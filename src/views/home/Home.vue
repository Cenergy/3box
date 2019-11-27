<template>
  <div>
    <nav-bar class="nav-bar"><div slot="center">购物车</div></nav-bar>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
    <div>首页11111111111111222</div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
import { Swiper, SwiperItem } from "components/common/swiper";
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
      this.recommends = res.data.recommend;
    });
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem
  }
};
</script>
<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
