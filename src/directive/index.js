// directive 自定义指令的js
import Vue from 'vue'
// 注册一个全局自定义指令 v-DomHeight 这个指令是操作index的swipe快DOM的高度
let DomHeight = Vue.directive('DomHeight', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el,data) { // 拿到dom动态算出高度
    console.log(el)
    console.log(data.expression) //传递的数据
  }
})
