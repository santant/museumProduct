<template>
  <!-- 跟节点 -->
  <div>
    <div class="navbar el-menu--horizontal">
      <i :class="{'chenkMenu_rotate90':$store.state.app.isCollapse,'posTop':!$store.state.app.isCollapse}" @click="checkMenu"
         class="hamburger-container iconfont">&#xe610;</i>
      <el-breadcrumb class="hamburger-fontH1" separator="/">
        <el-breadcrumb-item>{{navTitle.navTitle}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{navTitle.navOutline}}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="navTitle.threeLine">{{navTitle.threeLine}}</el-breadcrumb-item>
        <!--<el-breadcrumb-item  :to="{ path: '/index/test' }">活动详情</el-breadcrumb-item>-->
      </el-breadcrumb>
      <div class="user_msg">
        <!--<i class="iconfont">&#xe670;</i>-->
        <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
          <i  @click="bb" class="iconfont">&#xe670;</i>
        </el-tooltip>

        <el-tooltip class="item" effect="dark" content="退出登录" placement="bottom">
          <span>退出</span>
        </el-tooltip>
      </div>
    </div>
    <!--导航栏-->
    <div class="scroll-container tags-view-container">
      <div class="scroll-wrapper">
        <div @click="menuToHerf($event,navItem,index)"
             v-for="(navItem,index) in  navTitle.titleNavArr" :class="{'tags-view-item-active':navItem.active}"
             class="tags-view-item">

          {{navItem.titleName}}
          <span @click.prevent="closeWindow($event,index)" class="el-icon-close icon_hover"></span>
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
        num:0
      }
    },
    components: { //引入组件

    },
    methods: { //执行的方法函数
      checkMenu() {
        this.$store.commit('setCollapse')
      },
      bb(){
        if(++this.num%2==1){
          var  element = document.getElementById("app")
          //某个元素有请求
          var requestMethod =element.requestFullScreen
            ||element.webkitRequestFullScreen //谷歌
            ||element.mozRequestFullScreen  //火狐
            ||element.msRequestFullScreen; //IE11
          if (requestMethod) {
            requestMethod.call(element);   //执行这个请求的方法
          } else if (typeof window.ActiveXObject !== "undefined") {  //window.ActiveXObject判断是否支持ActiveX控件
            //这里其实就是模拟了按下键盘的F11，使浏览器全屏
            var wscript = new ActiveXObject("WScript.Shell"); //创建ActiveX
            if (wscript !== null) {    //创建成功
              wscript.SendKeys("{F11}");//触发f11
            }
          }
        }else {
          exitFull()
        }
        function exitFull() { //关闭浏览器
          // 判断各种浏览器，找到正确的方法
          var exitMethod = document.exitFullscreen || //W3C
            document.mozCancelFullScreen || //Chrome等
            document.webkitExitFullscreen || //FireFox
            document.webkitExitFullscreen; //IE11
          if (exitMethod) {
            exitMethod.call(document);
          }
          else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
              wscript.SendKeys("{F11}");
            }
          }
        }
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
