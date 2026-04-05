import request from '../../path/request.js'

// 航空公司列表
export function listCompany() {
  return request({
    url: '/system/company/app/list',
    method: 'get',
  })
}

// 名称简写搜索航空公司列表
export function searchCompany(data) {
  return request({
    url: '/system/company/app/search',
    method: 'get',
	params: data
  })
}

// 文件夹列表
export function listFolder(data) {
  return request({
    url: '/system/folder/app/list',
    method: 'get',
	params: data
  })
}

// 文件列表
export function listFile(data) {
  return request({
    url: '/system/document/app/list',
    method: 'get',
	params: data
  })
}

// 文件内容
export function fileContent(data) {
  return request({
    url: '/system/document/app/content',
    method: 'get',
	params: data
  })
}


