<template>
  <div>
    <h2>{{msg}}</h2>
    <h4>newsId:{{$route.params.newsId}}-----newsTitle:{{$route.params.newsTitle}}</h4>
  </div>

</template>

<script>
    export default {
        name: "Params",
      data(){
          return{
            msg:'Parms pages'
          }
      },
      beforeRouteEnter:(to, from, next)=>{
          console.log("准备进入params路由模板");
          next();
      },
      beforeRouteLeave:(to, from, next)=>{
          console.log("准备离开Params路由模板");
          next();
      }
    }
</script>

<style scoped>

</style>
