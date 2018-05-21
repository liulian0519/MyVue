<!--1模板开始-->
<template>
  <div id="app">

    <app-header @titleChange="updatetitle($event)" :title = "title"></app-header>
    <users :users="users"></users>
    <app-footer :title = "title"></app-footer>

  </div>
</template>
<!--模板结束-->
<!--行为开始-->
<script>
  //局部注册组件
import HelloWorld from './components/HelloWorld'
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {

    // HelloWorld+
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  },
  methods:{
    updatetitle(ti){
      this.title = ti
    }
  },

  data(){
    return{
      // title:"jfkmvmf"
      users:[
        { name:"liulian", position:"web开发", show:false  },
        { name:"soul", position:"前端开发", show:false  },
        { name:"daidong", position:"Android开发", show:false  },
        { name:"dachui", position:"小程序开发", show:false  },
        { name:"ll", position:"H5开发", show:false  },
        { name:"dd", position:"前端开发", show:false  },
        { name:"dc", position:"AI开发", show:false  },
        { name:"dd", position:"前端开发", show:false  },
        { name:"dc", position:"AI开发", show:false  }
      ],
      title:"正在传值..."
    }

  }
}
</script>
<!--行为结束-->
<!--样式开始-->
<style>


</style>
<!--样式结束-->
