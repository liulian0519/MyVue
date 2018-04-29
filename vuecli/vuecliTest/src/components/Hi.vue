<template>
  <div>
    <h2>{{msg}}</h2>
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: 'Hi',
    data () {
      return {
        msg: 'I am a hi page'
      }
    }
  }
</script>

<style scoped>

</style>
