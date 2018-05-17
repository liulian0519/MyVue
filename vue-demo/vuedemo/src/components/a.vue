<template>
<div>
  {{hello}}
  <button @click="emitdk">dd</button>
</div>
</template>

<script>
    export default {
        name: "a.vue",
      data(){
        return{
          hello :'I am component A '
        }
      },
      methods:{
        emitdk(){
          this.$emit('my-event',this.hello)
        }
      },
      components:{

      }
    }
</script>

<style scoped>

</style>
