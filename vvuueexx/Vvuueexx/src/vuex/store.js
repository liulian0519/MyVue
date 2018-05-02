import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
  count:1
}
const mutations={
  add(state,n){
    state.count+=n;
  },
  reduce(state){
    state.count--;
  }
}
//感觉相当一个过滤器一样
const getters={
  count:function (state) {
    return state.count+=10;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
