<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <tab-control
      :titles="tabControlTitles"
      class="home-tab-control"
      @tabClick="tabClicker"
      ref="tabControl1"
      v-show="isTabControlFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scrollPosition="contentScroll"
      @scrollPullingUp="loadMore"
      :pull-up-load="true"
    >
      <swiper>
        <swiper-item v-for="item in banners" :key="item.id">
          <a :href="item.link">
            <img :src="item.image" alt @load="swiperImageLoad" />
          </a>
        </swiper-item>
      </swiper>
      <feature-view></feature-view>
      <recommend-view :recommends="recommends"></recommend-view>
      <tab-control :titles="tabControlTitles" @tabClick="tabClicker" ref="tabControl2" />

      <goods-list :goods="goods[type].list" />
    </scroll>
    <back-top @click.native="backTop" class="back-top" v-show="showBackTop">
      <img src="~assets/img/common/top.png" alt />
    </back-top>
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
import BackTop from "content/backTop/BackTop";
import { debounce } from "@/common/utils";
export default {
  data() {
    return {
      result: null,
      banners: [],
      recommends: [],
      type: "pop",
      showBackTop: false,
      tabControlTitles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      hasSwiperImageLoaded: false,
      isTabControlFixed: false,
      topOffset: 0
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
  mounted() {
    this.$bus.$on("imgLoad", () => {
      debounce(this.$refs.scroll.refresh);
    });
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    loadMore() {
      this.getHomeDataObject(this.type);
      this.$refs.scroll.finishPullUp();
      console.log("Rd: loadMore -> loadMore");
    },
    contentScroll(position) {
      this.showBackTop = -position.y > 1000;
      this.isTabControlFixed = -position.y > this.topOffset;
    },
    swiperImageLoad() {
      if (!this.hasSwiperImageLoaded) {
        this.topOffset = this.$refs.tabControl2.$el.offsetTop;
        this.hasSwiperImageLoaded = true;
      }
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
    Scroll,
    BackTop
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
.home-tab-control {
  position: relative;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0px;
  bottom: 49px;
  overflow: hidden;
}

.back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
}
</style>
