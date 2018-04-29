<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <router-link to="/">Home</router-link>
    <router-link to="/params/1996abbbb/liulian">params</router-link>
    <!--单页面多路由操作-->
    <router-view/>
    <!--<router-view name="left" style="float: left; width: 50%; height: 300px; background-color: #989898;"/>-->
    <!--<router-view name="right" style="float: left; width: 50%; height: 300px; background-color: #c2c2c2;" />-->
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
