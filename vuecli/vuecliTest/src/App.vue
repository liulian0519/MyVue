<!--
 02添加子路由的方法
 第一步：改造app.vue 的导航代码
 第二步：改造Hi.vue页面，即加入<routerview>
 第三步 ：建立子页面 即 hi1和H2
 第四步：在index.js中进行配置  即配置children字段（别忘了引入hi1和hi2的component呦）
 -->
<!--
 03传递参数
 1.name传递 {{$route.name}}   在index.js中有子路由的情况下name无用
 2.修改<routerlink> :to   然后再模板处接受
-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--很象a标签-->
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/hi">Hi页面</router-link>
      <router-link :to="{name:'hi1',params:{username:'liulian',id:'ppx'}}">Hi子页面hi1</router-link>
      <router-link to="/hi/hi2">Hi子页面hi2</router-link>
    </div>
    <p>
      {{$route.name}}
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
