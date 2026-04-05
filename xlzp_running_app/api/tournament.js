import request from '../path/request.js';
// 比赛相关API


// 获取用户未完成的比赛列表
export function tournamentUnfinishList(data) {
    return request({
        url: '/appTournament/user/unfinishList',
        method: 'get',
        params: data
    })
}

// 查询用户报名的比赛列表
export function tournamentUserList(data) {
    return request({
        url: '/appTournament/user/list',
        method: 'get',
        params: data
    })
}

// 查询比赛列表
export function tournamentList(data) {
    return request({
        url: '/appTournament/list',
        method: 'get',
        params: data
    })
}

// 查询比赛详情
export function tournamentInfo(data) {
    return request({
        url: '/appTournament/info',
        method: 'post',
        data: data
    })
}

// 查询比赛分组详情
export function tournamentGroupInfo(data) {
    return request({
        url: '/appTournament/groupInfo',
        method: 'post',
        data: data
    })
}

// 比赛报名
export function tournamentRegistration(data) {
    return request({
        url: '/appTournament/user/registration',
        method: 'post',
        data: data
    })
}

// 根据比赛ID 获取用户比赛报名状态
export function getUserRegistrationState(data) {
    return request({
        url: '/appTournament/user/registrationState',
        method: 'post',
        data: data
    })
}

// 根据比赛ID 获取用户是否可以比赛
export function getUserTournamentState(data) {
    return request({
        url: '/appTournament/user/tournamentState',
        method: 'post',
        data: data
    })
}

// 保存比赛跑步数据
export function tournamentAdd(data) {
    return request({
        url: '/appTournament/user/add',
        method: 'post',
        data: data
    })
}

// 查询比赛跑步数据
export function getTournamentRunInfo(data) {
    return request({
        url: '/appTournament/user/tournament/runInfo',
        method: 'post',
        data: data
    })
}

// 查询比赛分组排名列表
export function tournamentRankList(data) {
    return request({
        url: '/appTournament/rank',
        method: 'get',
        params: data
    })
}