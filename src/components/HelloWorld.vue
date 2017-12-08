<template>
	<!-- 跟节点 -->
	<div id="artup">
		<div class="app-wrapper">
			<div  :class="{'chenkMenu_width':isCollapse}"  class="container sidebar-container theme1">
				<el-menu default-active="1-1"  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
				  <el-submenu v-for="(item,indexs) in routerList"  :index="indexs+''">
				    <template slot="title">
				      <i :class="item.meta.icon"></i>
				      <span slot="title">{{item.meta.lable}}</span>
				    </template>
		            <template v-for="(item_2,index_2) in item.children">
						      <el-menu-item @click.native="checkPath(item.path+'/'+item_2.path)" :path="item.path+'/'+item_2.path" :index="indexs+'-'+index_2">{{item_2.meta.lable}}</el-menu-item>
		            </template>
				      <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
                 <!--<el-submenu index="1-3">-->
                <!--<span slot="title">选项4</span>-->
                <!--<el-menu-item index="1-3-1">选项1</el-menu-item>-->
				     <!--</el-submenu>-->
				  </el-submenu>
				</el-menu>
			</div>
			<div :class="{'chenkMenu_marginLeft':isCollapse}" class="container main-container">
				<div class="navbar el-menu--horizontal">
					<i :class="{'chenkMenu_rotate90':isCollapse}" @click="checkMenu" class="hamburger-container el-icon-sort"></i>
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
				<!--路由-->
				<router-view/>
			</div>
		</div>
	</div>
</template>
<script>
	 import asycRouterMap from '@/router/index.js'
    import {mapGetters} from  'vuex'
	export default {
		data() {
			return {
				isCollapse: false,
        routerList:[]
			}
		},
		//		beforeRouteEnter(to,from,next){//路由钩子函数
		//			console.log(to)
		//			console.log(from)
		//			next()
		//		},
		components: { //引入组件

		},
		methods: { //执行的方法函数
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        checkMenu(){
          this.isCollapse = !this.isCollapse
        },
        checkPath(path){
          window.location='#'+path
//          alert('切换path'+path)
        }
		},
		created() { //只执行一次

		},
		mounted() { //全部渲染完毕
      this.routerList = asycRouterMap.options.routes
      this.$store.commit('routerListDate',this.routerList)
		},
		watch: { //数据改变执行异步函数
			//	       bbsTemplate_data: 'dataPull'
		},
		components: { //引入组件

		},
		computed: { //数据改变computed
			 ...mapGetters({
			 	filterCount:'routerListDate'//拿到状态的数据
			 })
		}
	}
</script>

<style lang="scss">
	#artup {
		/*冲突左侧导航栏的样式*/
		.el-menu{
			background: #495060;
			border: none;
		}
		.el-submenu__title *{
			color: #fff;
		}
		.el-menu-item-group__title{
			color: #fff;
		}
		.el-submenu .el-menu-item{
			color: #fff;
		}

		.el-menu-item{
			color: #fff;
		}
		 .is-active{
			    color: #409EFF;
		}
    .el-submenu__title:hover {
      background-color: rgb(48, 65, 86);
    }
    .el-menu-item:focus, .el-menu-item:hover {
      outline: 0;
      background-color: rgb(48, 65, 86);
    }

		.chenkMenu_marginLeft{
			margin-left: 64px !important;
		}
		.chenkMenu_width{
			width: 64px !important;
		}
		.chenkMenu_rotate90{
			transform: rotate(-90deg);
		}
		.hamburger-fontH1{
			line-height: 50px;
			width: 400px;
			float: left;
		}
		.user_msg{
			float: right;
			padding-right: 20px;
		}
		height: 100%;
		width: 100%;
		.app-wrapper {
			position: relative;
			height: 100%;
			width: 100%;
			overflow: hidden;
		}
		.container {

		}
		.sidebar-container {
			transition: 0.28s;
			width: 200px;
			height: 100%;
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			z-index: 1001;
		}
		.main-container {
			min-height: 100%;
			margin-left: 200px;
			transition: 0.28s;
			.navbar{
				height: 50px;
			    line-height: 50px;
			    border-radius: 0px !important;
			    .hamburger-container{
			    	    line-height: 58px;
				    height: 50px;
				    float: left;
				    padding: 0 10px;
				    font-size: 20px;
				    transition: 0.28s;
			    }
			}
		}
		.el-menu-vertical-demo:not(.el-menu--collapse) {
		    width: 200px;
		    min-height: 400px;
		}
		/*路由导航*/
		 .croll-container{
			    white-space: nowrap;
			    position: relative;
			    overflow: hidden;
		 }
		 .tags-view-container {
		    background: #fff;
		    height: 34px;
		    border-bottom: 1px solid #d8dce5;
		    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
		    .tags-view-item{
		    		    display: inline-block;
				    position: relative;
				    height: 26px;
				    line-height: 26px;
				    border: 1px solid #d8dce5;
				    color: #495060;
				    background: #fff;
				    padding: 0 8px;
				    font-size: 12px;
				    margin-left: 5px;
				    margin-top: 4px;
				   span{
				   	width: 14px;
				   	transform: all 0.3s;
				   }
				   .yuandian{
				   	width: 10px;
				   	height: 10px;
				   	display: inline-block;
				   	border-radius: 50%;
				   	background: #fff;
				   	position: relative;
				   	top: 1px;
				   }
				    .icon_hover:hover{
				    		border-radius: 50%;
				    		background: #ccc;
				    		color: #fff;
				    		height: 14px;
						font-size: 14px;
						position: relative;
						top: 1px;
				    }

		    }
		    .tags-view-item-active{
				 background-color: #42b983 !important;
			    color: #fff !important;
			    border-color: #42b983 !important;
			}
		}
	}
</style>
