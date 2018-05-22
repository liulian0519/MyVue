<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    //fetch解决跨域请求
// fetch("/api/test/testToken.php",{
//   method:"post",
//   headers:{
//   token:"f4c902c9ae5a2a9d8f84868ad064e706"
//   },
//
//   body:JSON.stringify({username:'liulian',password:'123123'})
// })
//   .then(result=>{
//     //
//     return result.json()
//   })
//   .then(data=>{
//     console.log(data)
//   })

    //axios
this.$axios.post("/api/test/testToken.php",{username:'hello',password:'123123'})
  .then(data=>{
    console.log(data);
  })
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
