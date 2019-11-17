<template>
  <div class="hello">
    <h1>{{name}},{{ msg }}</h1>
    <input type="button" value="+" @click="increment" />
    {{$store.state.counter}}
    {{$store.getters.squCounter}}
    {{$store.getters.fourCounter}}
    <hr />
    <input type="button" value="获取" @click="getInfo('cenergy')" />
    {{$store.state.data}}
    <hr />
    {{$store.state.hello.hello}}
    <input
      type="button"
      value="获取hello"
      @click="getHelloInfo('cenergy')"
    />
  </div>
</template>

<script>
import * as types from "../store/types";
import { mapState } from "vuex";
export default {
  data() {
    return { name1: "hello world's data" };
  },
  props: {
    msg: String
  },

  computed: {
    ...mapState(["name"])
  },
  methods: {
    incrementCount(num) {
      this.$store.commit("incrementCount", num);
    },
    increment() {
      this.$store.commit(types.INCREMENT);
    },
    async getInfo(name) {
      const res = await this.$store.dispatch("aGetUserInfo", name);
      // eslint-disable-next-line no-console
      console.log("Rd: getInfo -> res", res.id);
    },
    getHelloInfo(name1) {
      // eslint-disable-next-line no-console
      console.log("Go: getHelloInfo -> name1", name1);
      this.$store.commit("getFullInfo", name1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
