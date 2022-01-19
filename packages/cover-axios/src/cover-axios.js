/*
 * @Descripttion: 入口文件
 * @version:
 * @Author: zhangsheng
 * @Date: 2022-01-19 13:41:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-19 15:48:38
 */

import { axiosDefault } from './lib/axios'
import _lodash from 'lodash'

const Vaxios = []

/**
 * @name: zhangsheng
 * @msg: 组件封装
 * @param {*} Vue 实例
 * @param {object} options 配置项
 * @return {*}
 */
Vaxios.install = function (Vue, options) {
  let $axios = null

  let opt = {
    method: null, //自定义axios方法
    throwError: false, //抛出异常
    useparam: false,
    param: {
      baseURL: 'http//127.0.0.1:8080/api',
      timeout: 0,
    },
  }

  for (let propetry in options) {
    opt[propetry] = options[propetry]
  }

  if (opt.method && opt.param) {
    $axios = opt.method
  } else if (_lodash.size(opt.useparam) && _lodash.isObject(opt.param)) {
    $axios = axiosDefault(opt.param.baseURL, opt.param.timeout)
  }

  /**
   * [$GET 全局的 GET 方法]
   *
   * @method $GET
   * @param {String} url RESTful URL
   * @param {Object} payload GET 的 body 参数
   */

  ;(Vue.prototype.$GET = async (url, payload) => {
    try {
      let response = null

      if (_lodash.size(payload)) {
        if (_lodash.isObject(payload)) {
          let _payload = _lodash.omitBy(
            payload,
            (item) => item === '' || item === undefined || item === null
          )

          response = await $axios.get(`${url}`, {
            params: _payload,
          })
        } else throw Error('payload must be object')
      } else response = await $axios.get(`${url}`)

      return response.data
    } catch (err) {
      throw err
    }
  }),
    /**
     * [$POST 全局的 POST 方法]
     *
     * @method $POST
     * @param {String} url RESTful URL
     * @param {Object | Array} payload POST 的 body 参数
     */
    (Vue.prototype.$PUT = async (url, payload) => {
      try {
        if (_lodash.isArray(payload) || _lodash.isObject(payload)) {
          const response = await $axios.put(`${url}`, payload)
          return response.data
        } else throw Error('payload must be Array or Object')
      } catch (err) {
        throw err
      }
    }),
    /**
     * [$PATCH 全局的 PATCH 方法]
     *
     * @method $PATCH
     * @param {String} url RESTful URL
     * @param {Object | Array} payload PATCH 的 body 参数
     */
    (Vue.prototype.$PATCH = async (url, payload) => {
      try {
        if (_lodash.isArray(payload) || _lodash.isObject(payload)) {
          const response = await $axios.patch(`${url}`, payload)
          return response.data
        } else throw Error('payload must be Array or Object')
      } catch (err) {
        throw err
      }
    }),
    /**
     * [$DELETE 全局的 DELETE 方法]
     *
     * @method $DELETE
     * @param {String} url RESTful URL
     * @param {Object} payload DELETE 的 body 参数
     */
    (Vue.prototype.$DELETE = async (url, payload) => {
      try {
        let response = null
        if (_lodash.size(payload)) {
          if (_lodash.isObject(payload)) {
            response = await $axios.delete(`${url}`, {
              data: payload,
            })
          } else throw Error('payload must be Object')
        } else response = await $axios.delete(`${url}`)
        return response.data
      } catch (err) {
        throw err
      }
    }),
    /**
     * [$PUT 全局的 PUT 方法]
     *
     * @method $PUT
     * @param {String} url RESTful URL
     * @param {Object | Array} payload PUT 的 body 参数
     */
    (Vue.prototype.$PUT = async (url, payload) => {
      try {
        if (_lodash.isArray(payload) || _lodash.isObject(payload)) {
          const response = await $axios.put(`${url}`, payload)
          return response.data
        } else throw Error('payload must be Array or Object')
      } catch (err) {
        throw err
      }
    })
}

export default Vaxios
