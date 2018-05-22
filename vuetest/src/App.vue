<template>
  <div id="app">
  <!--<users></users>-->
    <router-link to="/">User</router-link>
    <router-link to="/test">Test</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import Users from './components/Users'
  import Test from './components/Test'
export default {
  name: 'App',
  components:{
    Users,
    Test
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
</style>
