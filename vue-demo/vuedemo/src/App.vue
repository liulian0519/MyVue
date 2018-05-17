<template>
  <div id="app">

    <comA @my-event="onCon"></comA>
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->

  </div>
</template>

<script>
  import comA from '@/components/a'
export default {
  name: 'App',
  components:{
    comA
  },
  methods:{
    onCon(parmfromA){
      console.log("fgjknfdklgmfkg"+parmfromA)
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
</style>
