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
          'lable': '测试地址1',
          'icon': '',
          'isMenu': true
        },
        children: [
          {
            'name': 'test',
            path: '/index/test',
            meta: {
              'lable': '第三层目录1',
              'icon': '',
              'isMenu': false
            }
          },
          {
            path: '/index/test2',
            meta: {
              'lable': '第三层目录2',
              'icon': '',
              'isMenu': false
            }
          }
        ]
      },
      {
        path: '/index/test2',
        meta: {
          'lable': '测试地址2',
          'icon': '',
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
          'lable': '权限管理2',
          'isMenu': false
        }
      }
    ]
  }
];
export default routerData

