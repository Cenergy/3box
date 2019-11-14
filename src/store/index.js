import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import * as types from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 10,
    data: 1
  },
  getters: {
    squCounter(state) {
      return state.counter * state.counter;
    },
    fourCounter(state, getters) {
      return state.counter * state.counter + getters.squCounter;
    }
  },
  mutations: {
    [types.INCREMENT](state) {
      state.counter++;
    },
    updateInfo(state, data) {
      state.data = data;
    }
  },
  actions: {
    // 处理异步的请求
    aGetUserInfo(context, playload) {
      return new Promise(async (resove, reject) => {
        // eslint-disable-next-line no-console
        console.log("Rd: aGetUserInfo -> reject", reject);
        const { data } = await axios.get(
          `https://api.github.com/users/${playload}`
        );
        context.commit("updateInfo", data);
        resove(data);
      });
    }
  },
  modules: {}
});
