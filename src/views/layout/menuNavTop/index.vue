<template>
  <!-- 跟节点 -->
  <div>
    <div class="navbar el-menu--horizontal">
      <i :class="{'chenkMenu_rotate90':$store.state.app.isCollapse}" @click="checkMenu"
         class="hamburger-container el-icon-sort"></i>
      <el-breadcrumb class="hamburger-fontH1" separator="/">
        <el-breadcrumb-item>{{navTitle.navTitle}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{navTitle.navOutline}}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="navTitle.threeLine">{{navTitle.threeLine}}</el-breadcrumb-item>
        <!--<el-breadcrumb-item  :to="{ path: '/index/test' }">活动详情</el-breadcrumb-item>-->
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
        <div @click="menuToHerf($event,navItem,index)"
             v-for="(navItem,index) in  navTitle.titleNavArr" :class="{'tags-view-item-active':navItem.active}"
             class="tags-view-item">
          <span @click.prevent="closeWindow($event,index)" class="el-icon-close icon_hover"></span>
          {{navItem.titleName}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'menuTop',
    data() {
      return {
        isCollapse: false,
      }
    },
    components: { //引入组件

    },
    methods: { //执行的方法函数
      checkMenu() {
        this.$store.commit('setCollapse')
      },
      menuToHerf(ev, navItem, index) { //点击跳转链接
        ev.stopPropagation()
        var  dataIndex = { //菜单和导航的索引
          pageIndex:navItem.pageIndex,
          Index:index
        }
        this.$store.commit('checkMenuPathColor', dataIndex)
        this.$router.push({
          path: navItem.path
        })
      },
      closeWindow(ev, index) {
        ev.stopPropagation()
        this.$store.commit('closeMenuWindow', {
          $router: this.$router,
          index: index
        })
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
      ...mapGetters({
        filterRouterL: 'routerListDate',//拿到状态的数据
        navTitle: 'navTitle'
      })
    }
  }
</script>

<style lang="scss">
</style>
