<template>
    <header @click="change">
      <h1>{{title1}}</h1>
      <h1>{{title}}</h1>
    </header>
</template>

<script>
    export default {
        name: "app-header",
      props:{
        title:{
          type:String
        }
      },
      data(){
          return{
            title1:'HelloWorld'
          }
      },
      methods:{
        change:function () {
          // this.title="我被修改了"
          this.$emit("titleChange","子组件向父组件传值")   //注册一个事件
        }
      }
    }
</script>

<style scoped>
header{
  background: lightgreen;
  padding: 10px;
}
  h1{
    color: #222;
    text-align: center;
  }
</style>
