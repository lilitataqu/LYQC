import Vue from 'vue'
import axios from 'axios';
import errorCode from './errorCode.js';
import {getToken} from './auth.js';
import config from './config.js';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// 创建axios实例
const service = axios.create({
	    withCredentials: true,
	    crossDomain: true,
		  baseURL: config.postUrl, // api的base_url
		  timeout: 15000, // 请求超时时间,
		  responseType:"text"
})

// request拦截器
service.interceptors.request.use(config => {
	
  // 是否需要设置 token
  const isToken = (config.headers || {}).isToken === false
  if (getToken() && !isToken) {
    // config.headers['Access-Control-Allow-Origin']='http://www.domain1.com';
    config.headers['Authorization'] = 'Bearer ' +getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
	
  }
  // get请求映射params参数
  if (config.method === 'get' && config.params) {
    let url = config.url + '?';
    for (const propName of Object.keys(config.params)) {
      const value = config.params[propName];
      var part = encodeURIComponent(propName) + "=";
      if (value !== null && typeof(value) !== "undefined") {
        if (typeof value === 'object') {
          for (const key of Object.keys(value)) {
            let params = propName + '[' + key + ']';
            var subPart = encodeURIComponent(params) + "=";
            url += subPart + encodeURIComponent(value[key]) + "&";
          }
        } else {
          url += part + encodeURIComponent(value) + "&";
        }
      }
    }
    url = url.slice(0, -1);
    config.params = {};
    config.url = url;
  }
  return config
}, error => {
  Promise.reject(error)
})
// respone拦截器
service.interceptors.response.use(
  res => {
      // 未设置状态码则默认成功状态
  const code = res.data.code || 200;
  //console.log(code)
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode['default']
    if(code === 401){
     uni.showToast({
     	icon: 'none',
     	title: msg,
     	duration: 3000
     })
	 uni.clearStorage();
	uni.navigateTo({
		url:"/pages/login/index"
	})
	
    } else if(code === 500){
     uni.showToast({
     	icon: 'none',
     	title: msg,
     	duration: 3000
     })
      return Promise.reject(new Error(msg))
    }
    else{
       return  res.data;
    }
  },
  error => {
    //console.log('err' + error)
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    }
    else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    }
    else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
   uni.showToast({
   	icon: 'none',
   	title: message,
   	duration: 3000
   })
    return Promise.reject(error)
  }
)

axios.defaults.adapter = function(config) { //自己定义个适配器，用来适配uniapp的语法
    return new Promise((resolve, reject) => {
        var settle = require('axios/lib/core/settle');
        var buildURL = require('axios/lib/helpers/buildURL');
        uni.request({
            method: config.method.toUpperCase(),
            url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
            header: config.headers,
            data: config.data,
            dataType: config.dataType,
            responseType: config.responseType,
            sslVerify: config.sslVerify,
            complete: function complete(response) {
                response = {
                    data: response.data,
                    status: response.statusCode,
                    errMsg: response.errMsg,
                    header: response.header,
                    config: config
                };
                settle(resolve, reject, response);
            }
        })
    })
}

export default service