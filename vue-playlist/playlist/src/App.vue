<!--1模板开始-->
<template>
  <div id="app">

    <app-header></app-header>
    <users></users>
    <app-footer></app-footer>
    <!--<img src="./assets/logo.png">-->
    <!--<HelloWorld/>   <!--<img src="./assets/logo.png">-->
    <!--<HelloWorld/>-->
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
  data(){
    return{
      title:"jfkmvmf"
    }

  }
}
</script>
<!--行为结束-->
<!--样式开始-->
<style>


</style>
<!--样式结束-->
