import request from '../path/request.js';
// 新增跑步数据
export function runInfoAdd(data) {
    return request({
        // url: '/appRunInfo/add',
        url: '/appRunInfo/add/v2',
        method: 'post',
        data: data
    })
}

// 根据id查询跑步数据
export function runInfoDetail(data) {
    return request({
        url: '/appRunInfo/detail',
        method: 'post',
        data: data
    })
}

// 根据id删除跑步数据
export function runInfoDelete(data) {
    return request({
        url: '/appRunInfo/delete',
        method: 'post',
        data: data
    })
}

// 获取跑步数据列表
export function runInfoList(data) {
    return request({
        url: '/appRunInfo/list',
        method: 'get',
        params: data
    })
}

// 统计用户本周卡路里与里程总数据
export function statistic(data) {
    return request({
        url: '/appRunInfo/statistic',
        method: 'get',
        params: data
    })
}

// 统计用户本周卡路里与里程总数据
export function runInfoExtendAdd(data) {
    return request({
        url: '/appRunInfo/addExtend',
        method: 'post',
        data: data
    })
}

// 排行榜数据
export function appRunInfoRank(data) {
    return request({
        url: '/appRunInfo/rank',
        method: 'post',
        data: data
    })
}