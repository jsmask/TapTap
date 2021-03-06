import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Android from './views/home/Android.vue'
import Ios from './views/home/Ios.vue'
import Medium from './views/home/Medium.vue'
import Details from './views/details/index.vue'
 

// 异步加载组件
// const Details = () => import("./views/details/index.vue")

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children:[{
        path:"/",
        component: Android,
      },
      {
        path:"/android",
        component: Android
      },
      {
        path:"/ios",
        component: Ios
      },
      {
        path:"/video",
        component: Medium
      }]
    },{
      path: '/detail',
      component:Details
    }
  ]
})
