import request from '../path/request.js';
// 查询星期数据
export function getWeekInfo(data) {
    return request({
        url: '/appClass/weekInfo',
        method: 'get',
        params: data
    })
}

// 查询课程时间数据
export function getClassNumber(data) {
    return request({
        url: '/appClass/classNumber',
        method: 'get',
        params: data
    })
}

// 根据星期与课程时间查询教师列表
export function getTeacherList(data) {
    return request({
        url: '/appClass/teacherList',
        method: 'post',
        data: data
    })
}

// 根据星期与课程时间查询教师列表
export function saveClass(data) {
    return request({
        url: '/appClass/save',
        method: 'post',
        data: data
    })
}