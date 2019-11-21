<template>
  <div id="app">
    <!-- <HelloWorld msg="Hello Vue!!!" /> -->
    <!-- <Topview msg="top view's msg">
      <h6>123456</h6>
      <span slot="topviewslot">这不是slot的默认值</span>
    </Topview>-->

    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about">关于</router-link>
    <input type="button" value="到关于" @click="goAbout" />
    <router-link :to="'/user/' + userId" tag="p">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Topview from "./components/topview";

export default {
  name: "app",
  data() {
    return {
      userId: "zhangsan"
    };
  },
  components: {
    HelloWorld,
    Topview
  },
  methods: {
    goAbout() {
      this.$router.push("/about");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
