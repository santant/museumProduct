import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import filter from '@/filter'
import directive from '@/directive'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.filter = filter  //全局注入全局过滤器
Vue.prototype.directive = directive  //全局指令注入

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
