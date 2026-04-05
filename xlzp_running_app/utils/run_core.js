var base = 0.2;
//加速度，用x、y、z轴的三个加速度分量计算出
var acceleration = 0;
//当前传感器的值
//float gravityNew = 0;
//上次的加速度
var lastAcceleration = 0;

//是否上升的标志位
var isDirectionUp = false;
//持续上升次数
var continueUpCount = 0;
//上一点的持续上升的次数，为了记录波峰的上升次数
var continueUpFormerCount = 0;
//上一点的状态，上升还是下降
var lastStatus = false;

//波峰值
var peakOfWave = 0;
//波谷值
var valleyOfWave = 0;
//此次波峰的时间
var timeOfThisPeak = 0;
//上次波峰的时间
var timeOfLastPeak = 0;
//系统当前的时间
var timeOfNow = 0;

//初始阈(yu)值
var initialThreshold = 1.7 * base;// 8月31
// var initialThreshold = 1.7;//旧
// 动态阈值需要动态的数据，这个值用于这些动态数据的阈值
// var threadThreshold = 2.0;//旧
var threadThreshold = 2.0 * base;// 8月31
//用于存放计算阈值的波峰波谷差值
var valueNum = 5;
var tempValue = [];
var tempCount = 0;

//初始范围
var minValue = 0.2;
var maxValue = 19.6;

/**
 * 计步状态
 * 0-未计步   1-预备计步，计时中   2-正常计步中，存储
 */
var pedometerState = 0;
//步数
var CURRENT_SETP = 0;
var TEMP_STEP = 0;
var lastStep = -1;

var timer;
// 倒计时3.5秒，3.5秒内不会显示计步，用于屏蔽细微波动
var duration = 3500;
var timeCount;

// 身高
var height = uni.getStorageSync('height') != null && uni.getStorageSync('height') != "" ? uni.getStorageSync('height') : 170;
var weight = uni.getStorageSync('weight') != null && uni.getStorageSync('weight') != "" ? uni.getStorageSync('weight') : 60;
// 步数
var step = 0;
// 跑步距离
var distance = 0;
// 消耗卡路里
var kcal = 0;
// 配速
var speed = 0;
// var list = [];
var stride = parseInt(height) * 0.785;

/**
 * 计算加速度
 * @param event
 */
function getAcceleration(event, totalTime, gpsDistance) {
	//忽略加速度方向，取绝对值
	acceleration = Math.sqrt(Math.pow(event.x, 2) +
		Math.pow(event.y, 2) + Math.pow(event.z, 2));
	//临时存储采样数值
	// list.push(acceleration);
	// console.log(list);
	detectorNewStep(acceleration);
	// calDistance();
	calMotionCalories(gpsDistance);
	calSpeed(totalTime, gpsDistance);
	return {
		steps: step,
		distance: distance,
		kcal: kcal,
		speed: speed
	}
}


/*
 * 检测步子，并开始计步
 * 1.传入sersor中的数据
 * 2.如果检测到了波峰，并且符合时间差以及阈值的条件，则判定为1步
 * 3.符合时间差条件，波峰波谷差值大于initialValue，则将该差值纳入阈值的计算中
 * */
function detectorNewStep(values) {
	// console.log("lastAcceleration为"+ lastAcceleration + "values为"+ values);
	if (lastAcceleration == 0) {
		lastAcceleration = values;
	} else {
		if (DetectorPeak(values, lastAcceleration)) {
			timeOfLastPeak = timeOfThisPeak;
			timeOfNow = new Date().getTime();

			if (timeOfNow - timeOfLastPeak >= 200 &&
				(peakOfWave - valleyOfWave >= threadThreshold) && (timeOfNow - timeOfLastPeak) <= 2000) {
				timeOfThisPeak = timeOfNow;
				//视为一步，更新界面的处理，不涉及到算法
				preStep();
			}
			if (timeOfNow - timeOfLastPeak >= 200 &&
				(peakOfWave - valleyOfWave >= initialThreshold)) {
				timeOfThisPeak = timeOfNow;
				threadThreshold = Peak_Valley_Thread(peakOfWave - valleyOfWave);
			}
		}
	}
	lastAcceleration = values;
}

/**
 * 检测波峰
 * 以下四个条件判断为波峰：
 *  1.目前点为下降的趋势：isDirectionUp为false
 *  2.之前的点为上升的趋势：lastStatus为true
 *  3.到波峰为止，持续上升大于等于2次
 *     - 这是因为：加速度传感器采集的频率比较高，一般大于30Hz，2次还算少的了
 *  4.波峰值大于1.2g,小于2g
 * 记录波谷值
 * 1.观察波形图，可以发现在出现步子的地方，波谷的下一个就是波峰，有比较明显的特征以及差值
 * 2.所以要记录每次的波谷值，为了和下次的波峰做对比
 * @param newValue 本次的加速度
 * @param oldValue 上次的加速度
 */
function DetectorPeak(newValue, oldValue) {
	// console.log(newValue.toString() + "/" +oldValue.toString());
	lastStatus = isDirectionUp;
	if (newValue >= oldValue) { //可以换成差值大于某一值也可
		isDirectionUp = true;
		continueUpCount++;
	} else {
		continueUpFormerCount = continueUpCount;
		continueUpCount = 0;
		isDirectionUp = false;
	}

	// Log.v(TAG, "oldValue:" + oldValue);
	if (!isDirectionUp && lastStatus &&
		// (continueUpFormerCount >= 2 && (oldValue >= minValue && oldValue < maxValue))) {
		(continueUpFormerCount >= 2)) {
		peakOfWave = oldValue;
		return true;
	} else if (!lastStatus && isDirectionUp) {
		valleyOfWave = oldValue;
		return false;
	} else {
		return false;
	}
}

/**
 * 阈值的计算
 * 1.通过波峰波谷的差值计算阈值
 * 2.记录4个值，存入tempValue[]数组中
 * 3.在将数组传入函数averageValue中计算阈值
 */
function Peak_Valley_Thread(value) {
	let tempThread = threadThreshold;
	if (tempCount < valueNum) { //存储过程
		tempValue[tempCount] = value;
		tempCount++;
	} else { //计算过程
		tempThread = averageValue(tempValue, valueNum);
		for (let i = 1; i < valueNum; i++) {
			tempValue[i - 1] = tempValue[i];
		}
		tempValue[valueNum - 1] = value;
	}
	return tempThread;

}

/**
 * 梯度化阈值
 * 1.计算数组的均值
 * 2.通过均值将阈值梯度化在一个范围里
 */
function averageValue(value, n) {
	let ave = 0;
	for (let i = 0; i < n; i++) {
		ave += value[i];
	}
	ave = ave / valueNum;
	if (ave >= 8 * base) {
		// Log.v(TAG, "超过8");
		ave = 4.3 * base;
	} else if (ave >= 7 * base && ave < 8 * base) {
		// Log.v(TAG, "7-8");
		ave = 3.3 * base;
	} else if (ave >= 4 * base && ave < 7 * base) {
		// Log.v(TAG, "4-7");
		ave = 2.3 * base;
	} else if (ave >= 3 * base && ave < 4 * base) {
		// Log.v(TAG, "3-4");
		ave = 2.0 * base;
	} else {
		// Log.v(TAG, "else");
		ave = 1.7 * base;
	}
	// if (ave >= 8) {
	// 	// Log.v(TAG, "超过8");
	// 	ave = 4.3;
	// } else if (ave >= 7 && ave < 8) {
	// 	// Log.v(TAG, "7-8");
	// 	ave = 3.3;
	// } else if (ave >= 4 && ave < 7) {
	// 	// Log.v(TAG, "4-7");
	// 	ave = 2.3;
	// } else if (ave >= 3 && ave < 4) {
	// 	// Log.v(TAG, "3-4");
	// 	ave = 2.0;
	// } else {
	// 	// Log.v(TAG, "else");
	// 	ave = 1.7;
	// }
	return ave;
}

function preStep(){
	step++;
	// console.log("走了一步");
}

/**
 * 计算累计里程
 */
function calDistance(){
	if (step > 0) {
	    // let temp_distance = parseInt(height) * 0.45 * step;//旧
	    // let temp_distance = parseInt(height) * 0.785 * step;
	    let temp_distance = stride * step;
	    distance = (temp_distance / 100 / 1000).toFixed(2); //厘米转公里
	}
}
/**
 * 计算卡路里
 */
function calMotionCalories(gpsDistance) {
    if (step > 0) {
        // kcal = weight * distance * 1.036;
        kcal = weight * gpsDistance * 1.036;
        kcal = kcal.toFixed(2);
    }
}


/**
 * 计算配速
 */
function calSpeed(totalTime, gpsDistance) {
    let time_split = totalTime.split(':');
    let hours = time_split[0];
    let minutes = time_split[1];
    let seconds = time_split[2];
    let template = '0\'00"';

    // if (distance > 0 && hours.length > 0 && minutes.length > 0 && seconds.length > 0) {
    if (gpsDistance > 0 && hours.length > 0 && minutes.length > 0 && seconds.length > 0) {
        let temp_speed = parseFloat(hours) * 60.0 + parseFloat(minutes) + parseFloat(seconds) / 60.0;
        // temp_speed = temp_speed / parseFloat(distance);
        temp_speed = temp_speed / parseFloat(gpsDistance);
        let min_speed = Math.floor(temp_speed);
        let sec_speed = Math.floor((temp_speed - min_speed) * 60.0);
        speed = min_speed + "'" + sec_speed + '"';
    } else {
        speed = template;
    }
}

/**
 * 重置数据
 */
function reset(){
	distance = 0;
	kcal = 0;
	speed = 0;
	step = 0;
	
}

function getStride() {
    return stride;
}

module.exports = {
	getAcceleration: getAcceleration,
	reset: reset,
	getStride: getStride
	
};
