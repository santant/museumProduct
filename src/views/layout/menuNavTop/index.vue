<template>
  <!-- 跟节点 -->
  <div>
    <div class="navbar el-menu--horizontal">
      <i :class="{'chenkMenu_rotate90':$store.state.app.isCollapse}" @click="checkMenu" class="hamburger-container el-icon-sort"></i>
      <el-breadcrumb class="hamburger-fontH1" separator="/">
        <el-breadcrumb-item :to="{ path: '/index/test' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-dropdown class="user_msg">
				      <span class="el-dropdown-link">
				        admin<i class="el-icon-arrow-down el-icon--right"></i>
				      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!--导航栏-->
    <div class="scroll-container tags-view-container">
      <div class="scroll-wrapper">
        <a href="" class="tags-view-item">
          首页
          <span class="el-icon-close icon_hover"></span>
        </a>
        <a href="" class="tags-view-item tags-view-item-active">
          <i class="yuandian"></i>
          项目管理
          <span class="el-icon-close icon_hover"></span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
//  import asycRouterMap from '@/router/index.js'
  export default {
    name:'menuTop',
    data() {
      return {
        isCollapse: false,
      }
    },
    components: { //引入组件

    },
    methods: { //执行的方法函数
      checkMenu(){
        this.$store.commit('setCollapse')
      }
    },
    created() { //只执行一次

    },
    mounted() { //全部渲染完毕
    },
    watch: { //数据改变执行异步函数
      //	       bbsTemplate_data: 'dataPull'
    },
    components: { //引入组件

    },
    computed: { //数据改变computed

    }
  }
</script>

<style lang="scss">
</style>
