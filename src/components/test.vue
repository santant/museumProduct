<template>
  <span v-DomHeight="{'b':'11'}">{{bb |test}}</span>
</template>

<script>
  import filter from '@/filter.js'
  import {DomHeight} from '@/directive.js'
//  import api from '@/api.js'
  export default {
    methods: {

    },
    data() {
      return {
        bb:'测试的文本'
      }
    },
    methods: {

    },
    mounted() {
      this.Api.userList.test().then(res=>{
        console.log(res)
      })
    }
  }
</script>

<style>
</style>
