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
    <tab-control :titles="tabControlTitles" class="home-tab-control" @tabClick="tabClicker" />

    <goods-list :goods="goods[type].list" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata, getHomeData } from "network/home";
import { Swiper, SwiperItem } from "components/common/swiper";
import RecommendView from "./childrenCom/RecommendView";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
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
    GoodsList,
    TabControl
  }
};
</script>
<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.home-tab-control {
  position: sticky;
  top: 0px;
}
</style>
