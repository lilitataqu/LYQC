import request from '@/utils/request'

// 查询比赛分组列表
export function listTournamentGroup(query) {
    return request({
        url: '/running/tournamentGroup/list',
        method: 'get',
        params: query
    })
}

// 查询比赛分组详细
export function getTournamentGroup(id) {
    return request({
        url: '/running/tournamentGroup/' + id,
        method: 'get'
    })
}

// 新增比赛分组
export function addTournamentGroup(data) {
    return request({
        url: '/running/tournamentGroup',
        method: 'post',
        data: data
    })
}

// 修改比赛分组
export function updateTournamentGroup(data) {
    return request({
        url: '/running/tournamentGroup',
        method: 'put',
        data: data
    })
}

// 删除比赛分组
export function delTournamentGroup(id) {
    return request({
        url: '/running/tournamentGroup/' + id,
        method: 'delete'
    })
}
