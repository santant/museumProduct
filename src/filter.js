import Vue from 'vue'

Vue.filter('json', function (value) {   // 全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  return JSON.stringify(value)
})
Vue.filter('test', function (value) {   // 全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  return value+'value'
})


