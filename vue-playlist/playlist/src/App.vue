<!--1模板开始-->
<template>
  <div id="app">
    <ul>
      <!--跳转页面时不刷新不像a标签那样-->
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/helloworld">HelloWorld</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<!--模板结束-->
<!--行为开始-->
<script>
  //局部注册组件
// import HelloWorld from './components/HelloWorld'
// import Users from './components/Users'
// import Header from './components/Header'
// import Footer from './components/Footer'
export default {
  name: 'app',
 data(){
    return{

    }
 }

}
</script>
<!--行为结束-->
<!--样式开始-->
<style>


</style>
<!--样式结束-->
