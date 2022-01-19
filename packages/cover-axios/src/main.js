import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vaxios from 'vaxios-plugin'

Vue.use(Vaxios, {
  useparam: true,
  param: {
    baseURL: 'https://cnodejs.org/api/v1',
    timeout: 0,
  },
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
