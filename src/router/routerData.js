//自己维护的路由地址
let routerData = [
  {
    path: '/index',
    name: '首页',
    meta: {
      'lable': '首页',
      'icon': 'el-icon-star-on'
    },
    children: [
      {
        'name': 'test',
        path: '/index/test',
        meta: {
          'lable': '测试',
          'isMenu': true
        },
        children: [
          {
            'name': 'test',
            path: '/index/test',
            meta: {
              'lable': '过滤器和ajax',
              'isMenu': false
            }
          }
        ]
      },
      {
        path: '/index/table',
        meta: {
          'lable': '表格',
          'isMenu': false
        }
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {
      'lable': '权限管理',
      'icon': 'el-icon-edit'
    },
    children: [
      {
        path: '/admin/admin2',
        meta: {
          'lable': '权限管理',
          'isMenu': false
        }
      },
      {
        path: '/admin/user',
        meta: {
          'lable': '用户管理',
          'isMenu': false
        }
      }
    ]
  }
];
export default routerData

