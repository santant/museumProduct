<template>
  <!-- 跟节点 -->
  <div id="artup">
    <div class="app-wrapper">
      <div  :class="{'chenkMenu_width':$store.state.app.isCollapse,'ov_h':!$store.state.app.isCollapse}"  class="container sidebar-container theme1">
        <menuLeft></menuLeft>
      </div>
      <div :class="{'chenkMenu_marginLeft':$store.state.app.isCollapse}" class="container main-container">
        <menu-top></menu-top>
        <!--路由-->
        <div class="main-router">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import asycRouterMap from '@/router/index.js'
  import {mapGetters} from  'vuex'
  import menuTop from './menuNavTop/index.vue' //导航栏上面部分
  import menuLeft from './menuNavLeft/index.vue' //导航栏左侧部分
  import routerData from '@/router/routerData'
  export default {
    data() {
      return {
        isCollapse: false
      }
    },
    components: { //引入组件

    },
    methods: { //执行的方法函数

    },
    created() { //只执行一次

    },
    mounted() { //全部渲染完毕
      this.$store.commit('routerListDate',routerData)
      var dufIndex = ''
      if(!sessionStorage.getItem('dataRouter')){
          dufIndex = this.$store.state.app.navTitle.onRoutesIndex
      }else{
        dufIndex =  JSON.parse(sessionStorage.getItem('dataRouter')).oIndex
      }
      let dataRouter = {
        path:this.$route.path,
        oIndex :dufIndex,
        $router : this.$router,
        active:true
      }
      this.$store.commit('checkPath',dataRouter) //防止浏览器刷新bug
    },
    watch: { //数据改变执行异步函数
    },
    components: { //引入组件
      'menuTop':menuTop,
      'menuLeft':menuLeft
    },
    computed: { //数据改变computed
      ...mapGetters({
        oTitle: 'navTitle'
      })
    }
  }
</script>

<style lang="scss">
   @import "layout";
</style>
