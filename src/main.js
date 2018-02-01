import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import Api from '@/api.js'
import 'element-ui/lib/theme-chalk/index.css'
 import '@/assets/font/iconfont.css'
//   <script src="static/config/config.js" type="text/javascript" charset="utf-8"></script>
Vue.prototype.Api = Api  //全局注入api接口
// Vue.prototype.filter = filter  //全局注入全局过滤器
// Vue.prototype.directive = directive  //全局指令注入
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
