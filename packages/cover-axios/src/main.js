import Vue from 'vue'
import Vaxios from './cover-axios'

Vue.use(Vaxios, {
  useparam: true,
  param: {
    baseURL: 'https://cnodejs.org/api/v1',
    timeout: 0,
  },
})

Vue.config.productionTip = false