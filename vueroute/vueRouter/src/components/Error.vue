<template>
  <div>
    <h2>{{msg}}！</h2>
    此页面不存在 404
  </div>

</template>

<script>
    export default {
        name: "Error",
      data(){
          return{
            msg:'Error'
          }
      }
    }
</script>

<style scoped>

</style>
