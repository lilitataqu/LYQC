export function difference(dateBegin, dateEnd) {
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
	}
}

export function add(time1, time2) {
	var hour = time1.hour + time2.hour;
	var minute = time1.minute + time2.minute;
	if(minute >= 60){
		hour++;
		minute = minute - 60; 
	}
	var second = time1.second + time2.second;
	if(second >= 60){
		minute++;
		second = second - 60; 
	}
	return {
		hour: hour,
		minute: minute,
		second: second
	}
	
}