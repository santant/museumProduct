import Cookies from 'js-cookie'

const app = {
  state: {
    navTitle: {
      navTitle: '', //标题
      navOutline: '', //二级栏目
      threeLine: '',
      navTitle: '',
      onRoutesIndex:'1-2', //默认选中的级别
      titleNavArr: [] //选中的导航栏有可能做多级选择，暂时定义为数组
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
    closeMenuWindow(state, windowData) { //点击上侧导航栏关闭当前窗口对应的路由
      if (!state.navTitle.titleNavArr[windowData.index].active) {
        if (state.navTitle.titleNavArr.length > 1 || windowData.index > 0) {
          state.navTitle.titleNavArr.splice(windowData.index, 1)
          return
        }
      } else {
        if (state.navTitle.titleNavArr.length > (windowData.index + 1)) { //缓存数组的值大于导航条的索引
          // state.navTitle.titleNavArr.splice(windowIndex, 1)
          var path = state.navTitle.titleNavArr[windowData.index + 1].path
          state.navTitle.titleNavArr.splice(windowData.index, 1)
          windowData.$router.push({  //刷新当前关闭按钮的后面的路由
            path: path
          })
          state.navTitle.titleNavArr[windowData.index].active = true
        } else {
          if (windowData.index > 0){
            var path = state.navTitle.titleNavArr[windowData.index - 1].path
            state.navTitle.titleNavArr.splice(windowData.index, 1)
            windowData.$router.push({  //刷新当前关闭按钮的后面的路由
              path: path
            })
            state.navTitle.titleNavArr[windowData.index - 1].active = true
          }else { //当前只有1个title页的时候返回首页
            state.navTitle.titleNavArr = []
            window.location='/'
          }
        }
      }
    },
    checkMenuPathColor(state, colorIndex) { //根据索引修改选中的变量
      state.navTitle.titleNavArr.map((el, i) => {
        el.active = false
      })
      state.navTitle.titleNavArr[colorIndex.Index].active = true
      //修改左侧的对应关系
      if (state.navTitle.onRoutesIndex!=colorIndex.pageIndex){
        state.navTitle.onRoutesIndex = colorIndex.pageIndex
      }
    },
    checkPath(state, dataRouter) {//切换链接
      var oIndexPage = dataRouter.oIndex.split('-')
      state.navTitle.navTitle = state.routerListDate[(oIndexPage[0] - 1)].meta.lable
      state.navTitle.navOutline = state.routerListDate[(oIndexPage[0] - 1)].children[(oIndexPage[1] - 1)].meta.lable
      oIndexPage.length > 2 ? state.navTitle.threeLine = state.routerListDate[(oIndexPage[0] - 1)].children[(oIndexPage[1] - 1)].children[(oIndexPage[2] - 1)].meta.lable : state.navTitle.threeLine = ''
      let keyData = false
      var namePage = ''
      oIndexPage.length > 2 ? namePage = state.navTitle.threeLine : namePage = state.navTitle.navOutline
      state.navTitle.titleNavArr.map((el, i) => { //遍历菜单有重复的跳出，和给重置样式
        if (el.pageIndex == dataRouter.oIndex) {
          el.active = true
          keyData = true
        } else {
          el.active = false
        }
      })
      let navArr = {
        'path': dataRouter.path,
        'titleName': namePage,
        'pageIndex': dataRouter.oIndex,
        'active': dataRouter.active ? dataRouter.active : false
      }
      if (!keyData) {
        state.navTitle.titleNavArr.push(navArr) //添加数据到导航数组里面
      }
      dataRouter.$router.push({ //跳转链接
        path: dataRouter.path,
        query: {}
      })
    }
  },
  actions: {}
}
export default app
