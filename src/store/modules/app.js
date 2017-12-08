import Cookies from 'js-cookie'

const app = {
  state: {
    navTitle:{
      navTitle:'', //标题
      navOutline:'', //二级栏目
      threeLine :'' ,
      titleNav :'' //选中的导航栏
    },
    isCollapse: false, //左侧导航栏展开收缩展示
    routerListDate: [] //路由地址列表
  },
  mutations: {
    routerListDate(state, routerData) {
      //拿到路由地址数据对象
      state.routerListDate = routerData
      console.log(state, routerData)
    },
    setCollapse(state) { //展开收缩左侧导航栏
      state.isCollapse = !state.isCollapse
    },
    checkPath(state, dataRouter) {//切换链接
      var oIndexPage = dataRouter.oIndex.split('-')
      state.navTitle.navTitle = state.routerListDate[oIndexPage[0]].meta.lable
      state.navTitle.navOutline = state.routerListDate[oIndexPage[0]].children[oIndexPage[1]].meta.lable
      oIndexPage.length>2 ? state.navTitle.titleNav = state.navTitle.threeLine :state.navTitle.titleNav = state.navTitle.navOutline
      console.log(state)
      dataRouter.$router.push({
        path: dataRouter.path,
        query: {}
      })
    }
  },
  actions: {}
}
export default app
