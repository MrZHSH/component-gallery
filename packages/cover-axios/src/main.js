import Vue from 'vue'
import Vaxios from './cover-axios'

Vue.use(Vaxios, {
  useparam: true,
  param: {
    baseURL: '/',
    timeout: 0,
  },
})

Vue.config.productionTip = false