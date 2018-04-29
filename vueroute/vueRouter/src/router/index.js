import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'

Vue.use(Router)

export default new Router({
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
    {
      path:'/',
      name:'HelloWorld',
      component:HelloWorld
    },
    {
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params
    }

  ]
})
