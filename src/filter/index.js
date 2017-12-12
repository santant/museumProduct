import Vue from 'vue'

Vue.filter('test', function (value) {
  console.log(value)
  return value+1
})
