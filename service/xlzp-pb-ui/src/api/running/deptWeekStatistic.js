import request from '@/utils/request'

// 查询统计本周各部门运动量列表
export function listDeptWeekStatistic(query) {
    return request({
        url: '/running/deptWeekStatistic/list',
        method: 'get',
        params: query
    })
}

// 部门选择列表
export function deptList() {
    return request({
        url: '/running/deptWeekStatistic/deptList',
        method: 'get',
    })
}