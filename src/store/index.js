import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import * as types from "./types";

import getters from "./getters";
import hello from "./modules/hello";

Vue.use(Vuex);

// axios.defaults.baseURL='https://api.github.com/users/'
// axios.defaults.timeout=5000

const axiosInstance = axios.create({
  baseURL: "https://api.github.com/",
  timeout: 5000
});

/**
 * 想要修改state的数据，必须通过mutations
 * this.$store.state.
 *
 *
 *
 *
 */

const moduleA = {
  state: {
    name: "张三"
  },
  getters: {
    getInfo(state) {
      return state.name + "123";
    },
    getInfo2(state, getters) {
      return state.name + getters.getInfo;
    },

    // eslint-disable-next-line no-unused-vars
    getInfo3(state, getters, rootState) {
      return getters.getInfo2 + rootState.counter;
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit("updateName", context.rootState.counter);
      }, 2000);
    }
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload;
    }
  }
};

export default new Vuex.Store({
  state: {
    counter: 10,
    data: 1
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
    },
    async aGetGithubUseInfo(context, username) {
      const { data } = await axiosInstance.get(`users/${username}`);
      context.commit("updateInfo", data);
    }
  },
  modules: {
    a: moduleA,
    hello
  }
});
