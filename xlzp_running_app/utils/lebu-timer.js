var time = '00:00:00';
var timer_id = 0;
// let ms = 0,
let	s = 0,
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
	timer_id = setInterval(function() {
		timer();
	}, 1000);
}

function end() {
	clearInterval(timer_id);
}

function reset() {
	time = '00:00:00';
	(ms = 0), (s = 0), (m = 0), (h = 0);
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
	console.log(hours + "-" + minutes + "-" + seconds)
	console.log(h + "-" + m + "-" + s)
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
