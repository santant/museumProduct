import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$http = axios

const VueHttp = new Vue()
var HTTP = VueHttp.$http.create({
// baseUrl:'http:www.baidu.com',
// timeout:5000, //请求超时配置
  params: { // 每一个连接都跟手的东西，查询字符串
    userDbId: '2221214',
    client: 'pc'
  },
  headers: {}// 设置请求头的对象
})


export default {}

