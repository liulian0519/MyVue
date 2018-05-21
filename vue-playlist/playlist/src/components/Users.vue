<template>
  <div class="users">
    <h1>hello users</h1>
    <ul>
      <li v-for="user in users" @click="user.show = !user.show">
        <h2>{{user.name}}</h2>
        <h3 v-show="user.show">{{user.position}}</h3>
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
        name: "Users",
      // props:["users"],
      props:{
        users:{
          type:Array,
          required:true
        }
      },
      data(){
          return{

          }
      }
    }
</script>

<style scoped>
.users{
  width: 100%;
  max-width: 1200px;
  /*margin: 0 auto;*/
  margin: 40px auto;
  padding: 0 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
  ul{
    display: flex;
    list-style: none;
    padding: 0;
    flex-wrap: wrap;
  }
  li{
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>
