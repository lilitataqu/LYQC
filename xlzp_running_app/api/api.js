import request from '../path/request.js';
export function login(data) {
	return request({
		url: '/app/login',
		method: 'post',
		data: data
	})
}

export function loginByPhone(data) {
	return request({
		url: '/app/loginByPhone',
		method: 'post',
		data: data
	})
}
export function getAuthInfo() {
	return request({
		url: '/app/loginByPhone',
		method: 'post',
		data: data
	})
}

export function bindingWx(data) {
	return request({
		url: '/app/bindingWx',
		method: 'post',
		data: data
	})
}

export function loginPhone(data) {
	return request({
		url: '/app/loginPhone',
		method: 'post',
		data: data
	})
}
