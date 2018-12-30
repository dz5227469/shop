import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//引入登录组件
import Login from './views/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/userAdd',
      // 添加用户
      // 异步加载：懒加载，在需要的时候才加载，目的是节省内存占用
      component: () => import( /* webpackChunkName: "about" */ './views/userAdd.vue')
    },

    {
      path: '/userManage',
      // 添加用户
      // 异步加载：懒加载，在需要的时候才加载，目的是节省内存占用
      component: () => import( /* webpackChunkName: "userManage" */ './views/userManage.vue')
    },

    {
      path: '/userPwd',
      // 添加用户
      // 异步加载：懒加载，在需要的时候才加载，目的是节省内存占用
      component: () => import( /* webpackChunkName: "userPwd" */ './views/userPwd.vue')
    },

  ]
})