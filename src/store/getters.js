export default {
  // 有点像filters,因为不会修改原数据，只会做一层包装。也有点像computed
  squCounter(state) {
    return state.counter * state.counter;
  },
  fourCounter(state, getters) {
    return state.counter * state.counter + getters.squCounter;
  }
};
