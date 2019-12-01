<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </swiper-item>
    </swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
    <div id="1000">1</div>
    <div id="1000">2</div>
    <div id="1000">3</div>
    <div id="1000">4</div>
    <div id="1000">5</div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
import { Swiper, SwiperItem } from "components/common/swiper";
import RecommendView from "./childrenCom/RecommendView";
import FeatureView from "./childrenCom/FeatureView";
import TabControl from "components/content/tabControl/TabControl";
export default {
  data() {
    return {
      result: null,
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      console.log("Rd: created -> res", res);
      this.result = res;
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    RecommendView,
    FeatureView,
    TabControl
  }
};
</script>
<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>
