<template>
    <div>
      <h2>{{msg}}</h2><hr>
      <!--
        第一种 直接实现
        第二种  加computed
        第三种   computed+mapstate
        第四种   最简单
      -->
      <h3>第一种：{{$store.state.count}} ---第四种：{{count}}</h3>
      <p>
        <button @click="$store.commit('add',5)">增加</button>
        <button @click="$store.commit('reduce')">减少</button>
      </p>
    </div>
</template>

<script>
  import store from '@/vuex/store'
  import {mapState,mapMutations,mapGetters} from 'vuex'
    export default {
        name: "Count",
      data(){
          return{
            msg:'Hello Vuex'
          }
      },
      // computed:mapState(['count']),
      computed:{
        ...mapState(['count']) ,
        ...mapGetters(['count'])
        // count(){
        //   return  this.$store.getters.count;
        // }
      },

      //第三种
      // computed:mapState({
      //   count:state=>state.count
      // }),
      //第二种
      // computed:{
      //   count(){
      //     return this.$store.state.count;
      //   }
      // },
      methods:mapMutations(['add','reduce']),
      store
    }
</script>

<style scoped>

</style>
