import {getUserInfo} from '@/api/userInfo.js';
import storageKey from '@/constant/storageKey.js';
import config from '@/path/config.js';
export function apiUserInfo(){
	return getUserInfo().then(res => {
		console.log(res.data.avatar);
		uni.setStorageSync(storageKey.userName, res.data.nickName);
		uni.setStorageSync(storageKey.avatarUrl, res.data.avatar == "" ? "" : config.postUrl + res.data.avatar);
		uni.setStorageSync(storageKey.kcal, res.data.kcal);
		uni.setStorageSync(storageKey.distance, res.data.distance);
		uni.setStorageSync(storageKey.height, res.data.height);
		uni.setStorageSync(storageKey.weight, res.data.weight);
		uni.setStorageSync(storageKey.studentId, res.data.studentId);
		uni.setStorageSync(storageKey.sex, res.data.sex);
	});
}

export function getUserInfoCache(){
	let data = {};
	data.userName = uni.getStorageSync(storageKey.userName);
	data.avatarUrl = uni.getStorageSync(storageKey.avatarUrl);
	data.kcal = uni.getStorageSync(storageKey.kcal);
	data.distance = uni.getStorageSync(storageKey.distance);
	data.height = uni.getStorageSync(storageKey.height);
	data.weight = uni.getStorageSync(storageKey.weight);
	data.studentId = uni.getStorageSync(storageKey.studentId);
	data.sex = uni.getStorageSync(storageKey.sex);
	return data;
}