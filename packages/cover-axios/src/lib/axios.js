/*
 * @Descripttion: 创建实例，request 和response 的二次封装
 * @version:
 * @Author: zhangsheng
 * @Date: 2022-01-19 10:52:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-19 13:34:55
 */
import axios from 'axios'
//const axios = typeof require === 'function' ? require('axios') : window.axios

if (!axios) {
  throw new Error('[Vaxios] cannot locate axios.js.')
}

/**
 * @name: zhangsheng
 * @msg: 创建一个axios的实例
 * @param {string} baseURL
 * @param {number} timeout
 * @return {object} 返回一个promise实例
 */
export function axiosDefault(
  baseURL = 'http://127.0.0.1:8080/api',
  timeout = 0
) {
  // 创建一个axios的实例
  const instance = axios.create({
    baseURL: `${baseURL}`,
    timeout: `${timeout}`,
  })

  // http request 拦截器
  instance.interceptors.request.use(
    (config) => {
      config.headers['Content-Type'] = 'application/json;chartset=UTF-8'
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  ),
    // HTTP response 拦截器
    instance.interceptors.response.use(
      (response) => {
        return response
      },

      (error) => {
        if (Error.response) {
          const err = error.response.data
          console.error(err)
        }

        return Promise.reject(error)
      }
    )

  return instance
}
