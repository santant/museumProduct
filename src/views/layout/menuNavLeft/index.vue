<template>
  <!-- 跟节点 -->
  <div>
    <el-menu default-active="1-1"  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="$store.state.app.isCollapse">
      <el-submenu v-for="(item,indexs) in filterRouterList"  :index="indexs+''">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{item.meta.lable}}</span>
        </template>
        <template v-for="(item_2,index_2) in item.children">
          <el-menu-item @click.native="checkPath(item.path+'/'+item_2.path,indexs+'-'+index_2)" :path="item.path+'/'+item_2.path" :index="indexs+'-'+index_2">{{item_2.meta.lable}}</el-menu-item>
        </template>
        <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
        <!--<el-submenu index="1-3">-->
        <!--<span slot="title">选项4</span>-->
        <!--<el-menu-item index="1-3-1">选项1</el-menu-item>-->
        <!--</el-submenu>-->
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  import {mapGetters} from  'vuex'
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
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      checkPath(path,oIndex){//切换链接
        let dataRouter = {
          path:path,
          oIndex :oIndex,
          $router : this.$router
        }
        sessionStorage.setItem('dataRouter',JSON.stringify({ path:path, oIndex :oIndex}))
        this.$store.commit('checkPath',dataRouter)
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
        filterRouterList:'routerListDate'//拿到状态的数据
      })
    }
  }
</script>

<style lang="scss">
</style>
