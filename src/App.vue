<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img src="./assets/img/tabbar/home.svg" alt slot="item-icon" />
        <div class="tab-bar-item" slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/img/tabbar/category.svg" alt slot="item-icon" />
        <div class="tab-bar-item" slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/img/tabbar/cart.svg" alt slot="item-icon" />
        <div class="tab-bar-item" slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/img/tabbar/profile.svg" alt slot="item-icon" />
        <div class="tab-bar-item" slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";
export default {
  name: "app",
  data() {
    return {};
  },
  components: { TabBar, TabBarItem },
  methods: {}
};
</script>

<style>
@import url("./assets/css/base.css");
</style>
