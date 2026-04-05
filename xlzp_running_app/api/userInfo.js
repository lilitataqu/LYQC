import request from '../path/request.js';
// 修改系统用户与微信用户关联
export function updateWechat(data) {
    return request({
        url: '/userInfo/editInfo',
        method: 'post',
        data: data
    })
}

// 获取登录用户信息
export function getUserInfo(data) {
    return request({
        url: '/userInfo',
        method: 'post',
        data: data
    })
}