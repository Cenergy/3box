<template>
  <div id="home" class="wrapper">
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <scroll class="content">
      <swiper>
        <swiper-item v-for="item in banners" :key="item.id">
          <a :href="item.link">
            <img :src="item.image" alt />
          </a>
        </swiper-item>
      </swiper>
      <feature-view></feature-view>
      <recommend-view :recommends="recommends"></recommend-view>
      <tab-control
        :titles="tabControlTitles"
        class="home-tab-control"
        @tabClick="tabClicker"
      />

      <goods-list :goods="goods[type].list" />
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata, getHomeData } from "network/home";
import { Swiper, SwiperItem } from "components/common/swiper";
import Scroll from "components/common/scroll/Scroll";
import RecommendView from "./children/RecommendView";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import FeatureView from "./children/FeatureView";
export default {
  data() {
    return {
      result: null,
      banners: [],
      recommends: [],
      type: "pop",
      tabControlTitles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.result = res;
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
    this.getHomeDataObject("pop");
    this.getHomeDataObject("new");
    this.getHomeDataObject("sell");
  },
  methods: {
    getHomeDataObject(type) {
      const page = this.goods[type].page + 1;
      console.log("Rd: getHomeData -> page", page);
      getHomeData(type, page + 1).then(res => {
        console.log("Rd: getHomeDataObject -> res", res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    tabClicker(index) {
      if (index === 0) this.type = "pop";
      if (index === 1) this.type = "new";
      if (index === 2) this.type = "sell";
    }
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    RecommendView,
    FeatureView,
    GoodsList,
    TabControl,
    Scroll
  }
};
</script>
<style scoped>
#home {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  height: calc(100%-490px);
  overflow: hidden;
}
</style>
