<template>
  <footer>
    <p>{{copyright}}</p>
    <p>{{title}}</p>
  </footer>
</template>

<script>
  export default {
    name: "app-footer",
    props:{
      title:{
        type:String
      }
    },
    data(){
      return{
        copyright:'copyright@2018 vuedemo'
      }
    }
  }
</script>

<style scoped>
 footer{
    background: #222;
    padding: 6px;
  }
 p{
    color: lightgreen;
    text-align: center;
  }
</style>
