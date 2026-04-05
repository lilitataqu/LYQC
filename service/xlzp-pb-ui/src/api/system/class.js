import request from '@/utils/request'

// 查询课程信息列表
export function listClass(query) {
    return request({
        url: '/system/class/list',
        method: 'get',
        params: query
    })
}

// 查询教师信息列表
export function listTeacher(query) {
  return request({
    url: '/system/class/teacherList',
    method: 'get',
    params: query
  })
}

// 查询课程信息详细
export function getClass(id) {
    return request({
        url: '/system/class/' + id,
        method: 'get'
    })
}

// 新增课程信息
export function addClass(data) {
    return request({
        url: '/system/class',
        method: 'post',
        data: data
    })
}

// 修改课程信息
export function updateClass(data) {
    return request({
        url: '/system/class',
        method: 'put',
        data: data
    })
}

// 删除课程信息
export function delClass(id) {
    return request({
        url: '/system/class/' + id,
        method: 'delete'
    })
}
