import request from '@/utils/request'

// 查询系统用户与微信用户关联列表
export function listWechat(query) {
    return request({
        url: '/running/wechat/list',
        method: 'get',
        params: query
    })
}

// 查询系统用户与微信用户关联详细
export function getWechat(id) {
    return request({
        url: '/running/wechat/' + id,
        method: 'get'
    })
}

// 新增系统用户与微信用户关联
export function addWechat(data) {
    return request({
        url: '/running/wechat',
        method: 'post',
        data: data
    })
}

// 修改系统用户与微信用户关联
export function updateWechat(data) {
    return request({
        url: '/running/wechat',
        method: 'put',
        data: data
    })
}

// 删除系统用户与微信用户关联
export function delWechat(id) {
    return request({
        url: '/running/wechat/' + id,
        method: 'delete'
    })
}
