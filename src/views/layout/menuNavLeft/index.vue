<template>
  <!-- 跟节点 -->
  <div>
    <el-menu text-color="#333" active-text-color="#fff" default-active="1-2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="$store.state.app.isCollapse">
      <el-submenu v-for="(item,indexs) in listNav" :index="(indexs+1)+''">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{item.meta.lable}}</span>
        </template>
        <template  v-for="(item_2,index_2) in item.children">
          <el-menu-item-group v-show="!item_2.meta.isMenu">
            <el-menu-item  @click.native="checkPath(item_2.path,(indexs+1)+'-'+(index_2+1)+'')"  :index="(indexs+1)+'-'+(index_2+1)+''">{{item_2.meta.lable}}</el-menu-item>
          </el-menu-item-group>
          <el-submenu :index="(indexs+1)+'-'+(index_2+1)+''" v-show="item_2.meta.isMenu">
            <span  slot="title">{{item_2.meta.lable}}</span>
            <el-menu-item @click.native="checkPath(item_3.path,(indexs+1)+'-'+(index_2+1)+'-'+(index_3+1))" :index="(indexs+1)+'-'+(index_2+1)+'-'+(index_3+1)+''" v-for="(item_3,index_3) in item_2.children">{{item_3.meta.lable}}</el-menu-item>
          </el-submenu>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import routerData from '@/router/routerData'
  export default {
    name: 'menuTop',
    data() {
      return {
      	listNav:routerData,
        isCollapse: false,
      }
    },
    components: { //引入组件

    },
    methods: { //执行的方法函数
      handleOpen(key, keyPath) {
        console.log(key);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      checkPath(path, oIndex) {//切换链接
        console.log(oIndex)
        let dataRouter = {
          path: path,
          oIndex: oIndex,
          $router: this.$router,
          active:true
        }
        sessionStorage.setItem('dataRouter', JSON.stringify({path: path, oIndex: oIndex}))
        this.$store.commit('checkPath', dataRouter)
      }
    },
    created() { //只执行一次

    },
    mounted() { //全部渲染完毕
//     console.log(this.$refs.menu.open('0-0'))
//      this.$refs.menu.open('1-0')

    },
    watch: { //数据改变执行异步函数
      //	       bbsTemplate_data: 'dataPull'
    },
    components: { //引入组件

    },
    computed: { //数据改变computed
      ...mapGetters({
        filterRouterList: 'routerListDate'//拿到状态的数据
      })
    }
  }
</script>

<style lang="scss">
</style>
