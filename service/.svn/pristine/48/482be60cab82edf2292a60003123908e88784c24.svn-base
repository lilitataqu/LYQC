import request from '@/utils/request'

// 查询用户比赛跑步数据列表
export function listTournamentGroupUser(query) {
    return request({
        url: '/running/tournamentGroupUser/list',
        method: 'get',
        params: query
    })
}

// 查询用户比赛跑步数据详细
export function getTournamentGroupUser(id) {
    return request({
        url: '/running/tournamentGroupUser/' + id,
        method: 'get'
    })
}

// 新增用户比赛跑步数据
export function addTournamentGroupUser(data) {
    return request({
        url: '/running/tournamentGroupUser',
        method: 'post',
        data: data
    })
}

// 修改用户比赛跑步数据
export function updateTournamentGroupUser(data) {
    return request({
        url: '/running/tournamentGroupUser',
        method: 'put',
        data: data
    })
}

// 删除用户比赛跑步数据
export function delTournamentGroupUser(id) {
    return request({
        url: '/running/tournamentGroupUser/' + id,
        method: 'delete'
    })
}
