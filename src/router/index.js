import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/layout/layout'
import test from '@/components/test'
import test2 from '@/components/test2'
import table from '@/components/table'
Vue.use(Router)

const ROUTER = new Router({
  routes: [
    {
        path: '/index',
        alias: '/',
        name: '首页',
        component: index,
        meta:{
          'lable':'首页',
          'icon':'el-icon-star-on'
        },
      children: [
        {
        	 'name':'test',
        	  path: 'test',
            component: test,
            meta:{
              'lable':'test',
              'icon':'图标地址'
            }
        },
        {
          path: 'table',
          component: table,
          meta:{
            'lable':'表格',
            'icon':'图标地址'
          }
        },
        {
          path: 'test2',
          component: test2,
          meta:{
            'lable':'test2',
            'icon':'图标地址'
          }
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: index,
      meta:{
        'lable':'权限管理',
        'icon':'el-icon-edit'
      },
      children: [
        {
          path: 'admin2',
          component: test2,
          meta:{
            'lable':'权限管理2'
          },
          children: [
            {
              'name':'admin3',
              path: 'test',
              meta:{
                'lable':'第三层目录1',
                'icon':'图标地址',
                'isMenu':false
              }
            },
            {
              path: 'test2',
              meta:{
                'lable':'第三层目录2',
                'icon':'图标地址',
                'isMenu':false
              }
            }
          ]
        }
      ]
    }
  ]
})

// router.afterEach((to, from, next) => {
//   if(to.meta.title) {
//     window.document.title = to.meta.title
//   }
// })
export default ROUTER

