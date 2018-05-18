<template>
  <div id="app">
      <input v-model="hello" type="text">{{hellowithoutnumber}}
    <comA @my-event="onCon"></comA>
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
  <select v-model="selects">
    <option v-for="item in selectoption" :value="item.value">{{item.text}}</option>
  </select>
    {{selects}}
  </div>
</template>

<script>
  import comA from '@/components/a'
export default {
  name: 'App',
  components:{
    comA
  },
  data(){
    return{
      hello:'',
      selects:' ',
      selectoption:[
        {
          text:'apple',
          value: 0
        },
        {
          text:'babanb',
          value:1
        },
        {
          text:'kfkfk',
          value:2
        }
      ]
    }

  },
  methods:{
    onCon(parmfromA){
      console.log("fgjknfdklgmfkg"+parmfromA)
    }
  },
  computed:{
    hellowithoutnumber(){
      return this.hello.replace(/\d/g,'')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
