import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import * as types from "./types";

Vue.use(Vuex);

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
  getters: {
    // 有点像filters,因为不会修改原数据，只会做一层包装。也有点像computed
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
  modules: {
    a: moduleA
  }
});
