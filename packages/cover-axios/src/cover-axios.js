/*
 * @Descripttion: 入口文件
 * @version:
 * @Author: zhangsheng
 * @Date: 2022-01-19 13:41:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-03 17:37:36
 */

import {
  axiosDefault
} from './lib/axios'
import {
  proto_3
} from './lib/vue3-proto'
import {
  proto_2
} from './lib/vue2-proto'
const _lodash = require('lodash')

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
  } else if (opt.useparam && _lodash.isObject(opt.param)) {
    $axios = axiosDefault(opt.param.baseURL, opt.param.timeout)
  }

  if (Vue.config.globalProperties !== undefined) {
    proto_3(Vue, _lodash, $axios) // VUE3 使用config.globalProperties绑定全局变量
  } else {
    proto_2(Vue, _lodash, $axios) // VUE2 使用prototype绑定全局变量
  }
}

export default Vaxios