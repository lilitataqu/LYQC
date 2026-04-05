import request from '../../path/request.js'

// 查询auth列表
export function listAirport(query) {
  return request({
    url: '/system/airport/app/list',
    method: 'get',
    params: query
  })
}

// 查询auth详细
export function getAirport(id) {
  return request({
    url: '/system/airport/' + id,
    method: 'get'
  })
}

// 新增auth
export function addAirport(data) {
  return request({
    url: '/system/airport',
    method: 'post',
    data: data
  })
}

// 修改auth
export function updateAirport(data) {
  return request({
    url: '/system/airport',
    method: 'put',
    data: data
  })
}

// 删除auth
export function delAirport(id) {
  return request({
    url: '/system/airport/' + id,
    method: 'delete'
  })
}

// 导出auth
export function exportAirport(query) {
  return request({
    url: '/system/airport/export',
    method: 'get',
    params: query
  })
}