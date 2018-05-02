<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <div>
      <button @click="goForm">前进</button>
      <button @click="goBack">后退</button>
      <button @click="goHome">返回首页</button>
    </div>
    <router-link to="/">Home</router-link>|
    <router-link to="/params/1996/liulian">params</router-link>|
    <router-link to="/goHome">goHome</router-link>|
    <router-link to="/goParams/1995/daidong">goParams</router-link>|
    <router-link to="/hi1">hi1</router-link>|
    <router-link to="/liu">liu</router-link>|
    <router-link to="/123456">我是瞎写的</router-link>|
    <!--单页面多路由操作-->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

    <!--<router-view name="left" style="float: left; width: 50%; height: 300px; background-color: #989898;"/>-->
    <!--<router-view name="right" style="float: left; width: 50%; height: 300px; background-color: #c2c2c2;" />-->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goForm(){
      this.$router.go(1)
    },
    goBack(){
      this.$router.go(-1)
    },
    goHome(){
      this.$router.push('/')
    }
  }
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
  .fade-enter{
    opacity: 0;

  }
  .fade-enter-active{
    transition: opacity .3s;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-leave-active{
    transition: opacity .3s;
  }
</style>
