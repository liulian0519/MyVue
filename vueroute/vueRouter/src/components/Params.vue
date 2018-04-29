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
      }
    }
</script>

<style scoped>

</style>
