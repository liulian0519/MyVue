import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import Test from '@/components/Test'
Vue.use(Router)

export default new Router({
  mode:'history',

  routes: [
    {
      path: '/',
      component:Users

    },
    {
      path:'/test',
      component:Test
    }
  ]
})
