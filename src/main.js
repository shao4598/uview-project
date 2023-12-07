import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
import uView from 'uview-ui'
import clickOutside from './utils/clickOutside.js'

Vue.config.productionTip = false
Vue.use(uView)
Vue.use(clickOutside)

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
