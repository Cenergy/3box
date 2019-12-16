import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: []
  },
  getters: {},
  mutations: {
    addToCart(state, payload) {
      let oldProduct = state.cartList.find(item => item.iid === payload.iid);
      if (oldProduct) {
        oldProduct.count += 1;
      } else {
        oldProduct.count = 1;
        state.cartList.push(payload);
      }
    }
  },
  actions: {},
  modules: {}
});
