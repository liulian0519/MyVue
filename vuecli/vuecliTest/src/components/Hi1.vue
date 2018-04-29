<template>
  <div>
    <h3>{{msg}}------{{$route.params.username}}---------{{$route.params.id}}</h3>
  </div>
</template>

<script>

      export default {
        name: 'Hi1',
        data () {
          return {
            msg: 'I am a hi1 page'
          }
        }
      }
</script>

<style scoped>

</style>
