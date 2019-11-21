<template>
  <div id="app">
    <!-- <HelloWorld msg="Hello Vue!!!" /> -->
    <!-- <Topview msg="top view's msg">
      <h6>123456</h6>
      <span slot="topviewslot">这不是slot的默认值</span>
    </Topview>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Topview from "./components/topview";

export default {
  name: "app",
  components: {
    HelloWorld,
    Topview
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
