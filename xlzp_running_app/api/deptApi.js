import request from '../path/request.js';
// 查询全部学校
export function getSchoolList(data) {
    return request({
        url: '/appDept/schoolList',
        method: 'post',
        data: data
    })
}

// 根据学校deptId 查询该学校下的全部分院
export function getBranchCourtsList(data) {
    return request({
        url: '/appDept/branchCourtsList',
        method: 'post',
        data: data
    })
}