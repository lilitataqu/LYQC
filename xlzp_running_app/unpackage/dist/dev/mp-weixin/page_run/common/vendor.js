(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["page_run/common/vendor"],{

/***/ 224:
/*!**************************************************************!*\
  !*** D:/xlzp - 加了老师的前端/xlzp_running_app/utils/lebu-timer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var time = '00:00:00';
var timer_id = 0;
// let ms = 0,
var s = 0,
  m = 0,
  h = 0;
function timer() {
  // console.log("计算时间" + s);
  //定义计时函数
  // ms = ms + 1000; //毫秒

  // if (ms >= 1000) {
  // 	ms = 0;
  // 	s = s + 1; //秒
  // }
  s = s + 1; //秒

  if (s >= 60) {
    s = 0;
    m = m + 1; //分钟
  }

  if (m >= 60) {
    m = 0;
    h = h + 1; //小时
  }

  time = toDub(h) + ':' + toDub(m) + ':' + toDub(s);
}
function toDub(n) {
  //补0操作
  if (n < 10) {
    return '0' + n;
  } else {
    return '' + n;
  }
}
function start() {
  timer_id = setInterval(function () {
    timer();
  }, 1000);
}
function end() {
  clearInterval(timer_id);
}
function reset() {
  time = '00:00:00';
  ms = 0, s = 0, m = 0, h = 0;
  timer_id = 0;
}
function getTime() {
  return time;
}
function restore(dateBegin, dateEnd) {
  console.log("结束时间" + dateEnd);
  var dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
  var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
  var leave1 = dateDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
  var hours = Math.floor(leave1 / (3600 * 1000)); //计算出小时数
  //计算相差分钟数
  var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave2 / (60 * 1000)); //计算相差分钟数
  //计算相差秒数
  var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
  var seconds = Math.round(leave3 / 1000);
  s = s + seconds;
  if (s >= 60) {
    s = s - 60;
    m = m + 1; //分钟
  }

  m = m + minutes;
  if (m >= 60) {
    m = m - 60;
    h = h + 1; //小时
  }

  h = h + hours;

  // ms = dateDiff;
  console.log(hours + "-" + minutes + "-" + seconds);
  console.log(h + "-" + m + "-" + s);
  clearInterval(timer_id);
  start();
}
module.exports = {
  start: start,
  end: end,
  reset: reset,
  getTime: getTime,
  restore: restore
};

/***/ }),

/***/ 225:
/*!*************************************************************!*\
  !*** D:/xlzp - 加了老师的前端/xlzp_running_app/utils/lebu-core.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//轴向样本空间
var arr_x = new Array(),
  arr_y = new Array(),
  arr_z = new Array(); //临界阈值

var ACTIVE_PRECISION = 0.5; //活跃轴体ID

var active_axis = 0; //动态阈值计算

var peak_x_new_max = 0,
  peak_y_new_max = 0,
  peak_z_new_max = 0;
var peak_x_new_min = 0,
  peak_y_new_min = 0,
  peak_z_new_min = 0;
var peak_x_old_max = 0,
  peak_y_old_max = 0,
  peak_z_old_max = 0;
var peak_x_old_min = 0,
  peak_y_old_min = 0,
  peak_z_old_min = 0;
var peak_limit = 50,
  cur_limit = 0; //动态轴向样本

var old_sample_x = 0,
  old_sample_y = 0,
  old_sample_z = 0;
var new_sample_x = 0,
  new_sample_y = 0,
  new_sample_z = 0;
var dynamic_precision = 0.5; //动态精度
//跑步步数

var steps = 0;
var old_steps = 0;
var old_time = 0;
var stride = 0;
var height = 0;
var weight = 0;
var kcal = 0; //运动里程(公里)

var distance = 0;
var desc = '';
var speed = 0; //初级滤波,使得样本更加平滑

function filter_calculate(acceleration) {
  var x = 0,
    y = 0,
    z = 0;
  arr_x.push(acceleration.x);
  arr_y.push(acceleration.y);
  arr_z.push(acceleration.z);
  if (arr_x.length >= 3 && arr_y.length >= 3 && arr_z.length >= 3) {
    for (var i = 0; i < arr_x.length; i++) {
      x = x + arr_x[i];
    }
    for (var i = 0; i < arr_y.length; i++) {
      y = y + arr_y[i];
    }
    for (var i = 0; i < arr_z.length; i++) {
      z = z + arr_z[i];
    }
    arr_x = new Array();
    arr_y = new Array();
    arr_z = new Array();
  }
  x = x / 3;
  y = y / 3;
  z = z / 3;
} //动态阈值更新

function peakUpdate(acceleration) {
  var cur_x = acceleration.x;
  var cur_y = acceleration.y;
  var cur_z = acceleration.z;
  cur_limit++;

  // console.log("cur_limit:" + cur_limit);
  // console.log("peak_limit:" + peak_limit);

  if (cur_limit > peak_limit) {
    peak_x_old_max = peak_x_new_max;
    peak_y_old_max = peak_y_new_max;
    peak_z_old_max = peak_z_new_max;
    peak_x_old_min = peak_x_new_min;
    peak_y_old_min = peak_y_new_min;
    peak_z_old_min = peak_z_new_min;
    cur_limit = 0;
    peak_x_new_max = 0;
    peak_y_new_max = 0;
    peak_z_new_max = 0;
    peak_x_new_min = cur_x;
    peak_y_new_min = cur_y;
    peak_z_new_min = cur_z;
  } else {
    peak_x_new_max = Math.max(peak_x_new_max, cur_x);
    peak_y_new_max = Math.max(peak_y_new_max, cur_y);
    peak_z_new_max = Math.max(peak_z_new_max, cur_z);
    peak_x_new_min = Math.min(peak_x_new_min, cur_x);
    peak_y_new_min = Math.min(peak_y_new_min, cur_y);
    peak_z_new_min = Math.min(peak_z_new_min, cur_z);
  }
} //去除高频噪声

function slidUpdate(acceleration) {
  var cur_x = acceleration.x;
  var cur_y = acceleration.y;
  var cur_z = acceleration.z;
  if (Math.abs(cur_x - new_sample_x) > dynamic_precision) {
    old_sample_x = new_sample_x;
    new_sample_x = cur_x;
  }
  if (Math.abs(cur_y - new_sample_y) > dynamic_precision) {
    old_sample_y = new_sample_y;
    new_sample_y = cur_y;
  }
  if (Math.abs(cur_z - new_sample_z) > dynamic_precision) {
    old_sample_z = new_sample_z;
    new_sample_z = cur_z;
  }
} //判断当前最活跃轴

function is_most_active() {
  var max_x = peak_x_new_max,
    max_y = peak_y_new_max,
    max_z = peak_z_new_max;
  var min_x = peak_x_new_min,
    min_y = peak_y_new_min,
    min_z = peak_z_new_min;
  var res = 0; //哪个轴都不活跃,静止状态

  var x_change = Math.abs(max_x - min_x);
  var y_change = Math.abs(max_y - min_y);
  var z_change = Math.abs(max_z - min_z);
  if (x_change > y_change && x_change > z_change && x_change >= ACTIVE_PRECISION) {
    res = 1; //x轴最活跃
  } else if (y_change > x_change && y_change > z_change && y_change >= ACTIVE_PRECISION) {
    res = 2; //y轴最活跃
  } else if (z_change > x_change && z_change > y_change && z_change >= ACTIVE_PRECISION) {
    res = 3; //z轴最活跃
  }

  active_axis = res;
} //判断是否运动

function judge() {
  // console.log('step:', steps);

  if (active_axis == 1) {
    // console.log("peak_x_old_max:" + peak_x_old_max);
    // console.log("peak_x_old_min:" + peak_x_old_min);
    var threshold_x = (peak_x_old_max + peak_x_old_min) / 2; //计算出动态阈值

    // console.log('X old:', old_sample_x, 'threshold:', threshold_x, 'new:', new_sample_x);

    if (Math.abs(old_sample_x) < threshold_x && Math.abs(new_sample_x) > threshold_x) {
      steps++;
    }
  } else if (active_axis == 2) {
    var threshold_y = (peak_y_old_max + peak_y_old_min) / 2;
    // console.log('Y old:', old_sample_y, 'threshold:', threshold_y, 'new:', new_sample_y);

    if (Math.abs(old_sample_y) < threshold_y && Math.abs(new_sample_y) > threshold_y) {
      steps++;
    }
  } else if (active_axis == 3) {
    var threshold_z = (peak_z_old_max + peak_z_old_min) / 2;
    // console.log('Z old:', old_sample_z, 'threshold:', threshold_z, 'new:', new_sample_z);

    if (Math.abs(old_sample_z) < threshold_z && Math.abs(new_sample_z) > threshold_z) {
      steps++;
    }
  }
} //计算跨距

function calStride() {
  stride = height * 0.45;
  // let os = uni.getSystemInfoSync().osName;
  // if(os == "ios"){
  // 	stride = height * 0.4;
  // }else{
  // 	stride = height * 0.3;
  // }
} //计算卡路里

function CalMotionCalories() {
  if (weight > 0) {
    kcal = weight * distance * 1.036;
    kcal = kcal.toFixed(2);
  }
} //计算配速

function calSpeed(totalTime) {
  var time_split = totalTime.split(':');
  var hours = time_split[0];
  var minutes = time_split[1];
  var seconds = time_split[2];
  var template = '0\'00"';
  if (distance > 0 && hours.length > 0 && minutes.length > 0 && seconds.length > 0) {
    var temp_speed = parseFloat(hours) * 60.0 + parseFloat(minutes) + parseFloat(seconds) / 60.0;
    temp_speed = temp_speed / parseFloat(distance);
    var min_speed = Math.floor(temp_speed);
    var sec_speed = Math.floor((temp_speed - min_speed) * 60.0);
    speed = min_speed + "'" + sec_speed + '"';
  } else {
    speed = template;
  }
} //计算运动距离

function calDistance() {
  if (stride > 0) {
    var temp_distance = steps * parseInt(stride);
    distance = (temp_distance / 100 / 1000).toFixed(2); //厘米转公里
  }
} //输出对象的数据

function param_output() {
  // console.log({
  //     active_axis: active_axis,
  //     old_sample_x: old_sample_x,
  //     old_sample_y: old_sample_y,
  //     old_sample_z: old_sample_z,
  //     threshold_x: (peak_x_old_max + peak_x_old_min) / 2,
  //     threshold_y: (peak_y_old_max + peak_y_old_min) / 2,
  //     threshold_z: (peak_z_old_max + peak_z_old_min) / 2,
  //     new_sample_x: new_sample_x,
  //     new_sample_y: new_sample_y,
  //     new_sample_z: new_sample_z,
  //     kcal: kcal,
  //     steps: steps,
  //     speed: speed,
  //     stride: stride
  // });
}
function setHeight(h) {
  height = h;
}
function setWeight(w) {
  weight = w;
}
function getStride() {
  return stride;
}
function reset() {
  height = 0;
  weight = 0;
  stride = 0;
  kcal = 0;
  distance = 0;
  speed = 0;
  steps = 0;
}
function run(res, totalTime) {
  calStride(); //计算跨距

  if (stride == 0) {
    desc = '跨距为0';
  }
  filter_calculate(res);
  peakUpdate(res);
  slidUpdate(res);
  is_most_active();
  judge(); //计算步数

  if (weight == 0) {
    desc = '体重为0';
  }
  if (height == 0) {
    desc = '身高为0';
  }
  calDistance(); //计算累计里程

  CalMotionCalories(); //计算累计卡路里

  calSpeed(totalTime); //计算配速

  return {
    steps: steps,
    distance: distance,
    speed: speed,
    kcal: kcal,
    height: height,
    weight: weight,
    desc: desc
  };
}
function setSteps(ex_steps) {
  var output_step = 0;
  if (ex_steps > steps * 2) {
    output_step = (ex_steps * 0.5 + steps) / 2;
  } else if (ex_steps > steps) {
    output_step = (ex_steps + steps) / 2;
  }
  steps = output_step;
}
module.exports = {
  param_output: param_output,
  run: run,
  setSteps: setSteps,
  setHeight: setHeight,
  setWeight: setWeight,
  getStride: getStride,
  reset: reset
};

/***/ }),

/***/ 226:
/*!******************************************************************!*\
  !*** D:/xlzp - 加了老师的前端/xlzp_running_app/utils/calculate_time.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.difference = difference;
function difference(dateBegin, dateEnd) {
  var dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
  var hours = Math.floor(dateDiff / (3600 * 1000)); //计算出小时数
  //计算相差分钟数
  var leave2 = dateDiff % (3600 * 1000); //计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave2 / (60 * 1000)); //计算相差分钟数
  //计算相差秒数
  var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
  var seconds = Math.round(leave3 / 1000);
  return {
    hour: hours,
    minute: minutes,
    second: seconds
  };
}
function add(time1, time2) {
  var hour = time1.hour + time2.hour;
  var minute = time1.minute + time2.minute;
  if (minute >= 60) {
    hour++;
    minute = minute - 60;
  }
  var second = time1.second + time2.second;
  if (second >= 60) {
    minute++;
    second = second - 60;
  }
  return {
    hour: hour,
    minute: minute,
    second: second
  };
}

/***/ }),

/***/ 235:
/*!************************************************************!*\
  !*** D:/xlzp - 加了老师的前端/xlzp_running_app/utils/run_core.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {var base = 0.2;
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
var initialThreshold = 1.7 * base; // 8月31
// var initialThreshold = 1.7;//旧
// 动态阈值需要动态的数据，这个值用于这些动态数据的阈值
// var threadThreshold = 2.0;//旧
var threadThreshold = 2.0 * base; // 8月31
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
  acceleration = Math.sqrt(Math.pow(event.x, 2) + Math.pow(event.y, 2) + Math.pow(event.z, 2));
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
  };
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
      if (timeOfNow - timeOfLastPeak >= 200 && peakOfWave - valleyOfWave >= threadThreshold && timeOfNow - timeOfLastPeak <= 2000) {
        timeOfThisPeak = timeOfNow;
        //视为一步，更新界面的处理，不涉及到算法
        preStep();
      }
      if (timeOfNow - timeOfLastPeak >= 200 && peakOfWave - valleyOfWave >= initialThreshold) {
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
  if (newValue >= oldValue) {
    //可以换成差值大于某一值也可
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
  continueUpFormerCount >= 2) {
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
  var tempThread = threadThreshold;
  if (tempCount < valueNum) {
    //存储过程
    tempValue[tempCount] = value;
    tempCount++;
  } else {
    //计算过程
    tempThread = averageValue(tempValue, valueNum);
    for (var i = 1; i < valueNum; i++) {
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
  var ave = 0;
  for (var i = 0; i < n; i++) {
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
function preStep() {
  step++;
  // console.log("走了一步");
}

/**
 * 计算累计里程
 */
function calDistance() {
  if (step > 0) {
    // let temp_distance = parseInt(height) * 0.45 * step;//旧
    // let temp_distance = parseInt(height) * 0.785 * step;
    var temp_distance = stride * step;
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
  var time_split = totalTime.split(':');
  var hours = time_split[0];
  var minutes = time_split[1];
  var seconds = time_split[2];
  var template = '0\'00"';

  // if (distance > 0 && hours.length > 0 && minutes.length > 0 && seconds.length > 0) {
  if (gpsDistance > 0 && hours.length > 0 && minutes.length > 0 && seconds.length > 0) {
    var temp_speed = parseFloat(hours) * 60.0 + parseFloat(minutes) + parseFloat(seconds) / 60.0;
    // temp_speed = temp_speed / parseFloat(distance);
    temp_speed = temp_speed / parseFloat(gpsDistance);
    var min_speed = Math.floor(temp_speed);
    var sec_speed = Math.floor((temp_speed - min_speed) * 60.0);
    speed = min_speed + "'" + sec_speed + '"';
  } else {
    speed = template;
  }
}

/**
 * 重置数据
 */
function reset() {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/page_run/common/vendor.js.map