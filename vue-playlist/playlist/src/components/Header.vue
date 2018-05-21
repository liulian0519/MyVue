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
      },
      // beforeCreate:function () {
      //   alert("组件实例化之前");
      // },
      // created:function () {
      //   alert("组建实例化完毕，但页面还未显示");
      // },
      // beforeMount:function () {
      //   alert("组件挂载前，页面仍未显示，但虚拟dom已经配置");
      // },
      // mounted:function () {
      //   alert("组件挂载后，此方法执行后，页面显示");
      // },
      // beforeUpdate:function () {
      //   alert("组件更新前，页面仍未更新但虚拟dom已经配置");
      // },
      // updated:function () {
      //   alert("组件更新，此方法执行后，页面显示");
      // },
      // beforeDestroy:function () {
      //   alert("组件销毁前")
      // },
      // destroyed:function () {
      //   alert("组件销毁")
      // }
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
