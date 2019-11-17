import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import * as types from "./types";

import getters from "./getters";
import hello from "./modules/hello";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 10,
    data: 1,
    name: "cenergy"
  },
  getters,
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
  modules: {
    hello
  }
});
