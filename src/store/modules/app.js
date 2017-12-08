import Cookies from 'js-cookie'
const app = {
  state: {
    isCollapse:false, //左侧导航栏展开收缩展示
    routerListDate: [] //路由地址列表
  },
  mutations: {
    routerListDate(state, routerData) {
      //拿到路由地址数据对象
      state.routerListDate = routerData
      console.log(state, routerData)
    },
    setCollapse(state){ //展开收缩左侧导航栏
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {

  }
}

export default app
