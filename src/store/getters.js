export default {
  squCounter(state) {
    return state.counter * state.counter;
  },
  fourCounter(state, getters) {
    return state.counter * state.counter + getters.squCounter;
  }
};
