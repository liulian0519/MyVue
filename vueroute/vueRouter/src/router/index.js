import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'
Vue.use(Router)

export default new Router({
  // mode:'history',  没有#
  // mode:'hash',   有#
  routes: [
    //SPA单页应用的demo
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   components: {
    //     default: HelloWorld,
    //     left:Hi1,
    //     right:Hi2
    //   }
    //
    // },
    // {
    //   path: '/liu',
    //   name: 'HelloWorld',
    //   components: {
    //     default: HelloWorld,
    //     left:Hi2,
    //     right:Hi1
    //   }
    // }

    //url传参 第一步：配置路由  注意冒号(括号里写正则表达式)
    //        第二步：在App.vue中用<routerlink>中的to传递参数
    //        第三步：在component中接收参数  注意div包裹
    // alias:类似重定向
    {
      path:'/',
      name:'HelloWorld',
      component:HelloWorld
    },
    {
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params
    },
    {
      path:'/goHome',
      redirect:'/'
    },
    {
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path:'/hi1',
      component:Hi1,
      alias:'/liu'
    },
    {
      path:'*',
      component:Error
    }

  ]
})
