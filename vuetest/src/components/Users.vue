<template>
    <div class="users">
      <h1>Users</h1>
      <!--t添加用户信息-->
      <form @submit="addUser">
        <input type="text" v-model="newUser.name" placeholder="Enter name">
        <input type="text" v-model="newUser.email" placeholder="Enter email">
        <input type="submit" value="Submit">
      </form>

      <!--展示用户信息-->
      <ul>
        <li v-for="item in users">
          <input type="checkbox" class="toggle" v-model="item.contacted">
          <span :class="{contacted:item.contacted}">
             {{item.name}}:{{item.email}}
          <button @click="deleteUser(item)">删除</button>
          </span>

        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "users",
      data(){
          return{
            newUser:{},
            users:[
              {name:"liulian",email:"liulian@creatshare.com",contacted:false},
              {name:"daidong",email:"daidong@creatshare.com",contacted:false},
              {name:"soul",email:"soul@creatshare.com",contacted:false}
            ]
          }
      },
      methods:{
        addUser:function (e) {
          e.preventDefault();
          this.users.push({
            name:this.newUser.name,
            email:this.newUser.email,
            contacted:false
          })
        },
        deleteUser:function (item) {
          // console.log(this.users.indexOf(item));
          this.users.splice(this.users.indexOf(item),1)
        }
      }
    }
</script>

<style scoped>
.contacted{
  text-decoration: line-through;
}
</style>
