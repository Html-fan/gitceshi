import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"index",
      redirect:"/home",
      component:() => import ("@/components/index"),
      children:[
        {
          path: "/home",
          name: "home",
          component: () => import("@/view/home"),
          meta:{
            title:"首页"
          }
        },
        {
          path: "/about",
          name: "about",
          component: () => import("@/view/about"),
          meta: {
            title: "关于"
          }
        },
        {
          path: "/cart",
          name: "cart",
          component: () => import("@/view/cart"),
          meta: {
            title: "购物车"
          }
        },
        {
          path: "/user",
          name: "user",
          component: () => import("@/view/user"),
          meta: {
            title: "我的"
          }
        }

      ]
    },
    

  ]
})
