<template>
  <div id="app">
    <keep-alive exclude="Deatil">
      <router-view></router-view>
    </keep-alive>

    <tab-bar>
      <tab-bar-item link="/home" activeColor="red">
        <img src="~assets/img/tabbar/home.svg" alt slot="icon" />
        <img src="~assets/img/tabbar/home_active.svg" alt slot="active-icon" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img src="~assets/img/tabbar/category.svg" alt slot="icon" />
        <img src="~assets/img/tabbar/category_active.svg" alt slot="active-icon" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart">
        <img src="~assets/img/tabbar/cart.svg" alt slot="icon" />
        <img src="~assets/img/tabbar/cart_active.svg" alt slot="active-icon" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img src="~assets/img/tabbar/profile.svg" alt slot="icon" />
        <img src="~assets/img/tabbar/profile_active.svg" alt slot="active-icon" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "app",
  data() {
    return {
      isActive: true
    };
  },
  components: { TabBar, TabBarItem },
  methods: {}
};
</script>

<style>
@import url("assets/css/base.css");
</style>
