export default {
  state: {
    hello: "world",
    students: [{ id: 1, name: 222 }]
  },
  getters: {
    fullInfo(state) {
      return state.hello;
    },
    fullInfo2(state, getters) {
      return state.hello + getters.fullInfo;
    }
  },
  mutations: {
    getFullInfo(state, payload) {
      // eslint-disable-next-line no-console
      console.log("Go: getFullInfo -> payload", payload);
      state.hello = payload;
    }
  }
};
