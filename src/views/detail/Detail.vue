<!--  -->
<template>
  <div class>
    <detail-nav-bar slot="center"></detail-nav-bar>
    <detail-swiper :images="topImages" class="detail-set-scroll" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import DetailNavBar from "views/detail/children/DetailNavBar";
import DetailSwiper from "views/detail/children/DetailSwiper";
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "network/detail";
export default {
  name: "Deatil",
  //import引入的组件需要注入到对象中才能使用
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    //这里存放数据
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
      detailId: "",
      topImages: []
    };
  },

  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    detailNavBarClicked(index) {
      this.currentIndex = index;
    },
    detailNavBarLeft() {
      this.$router.go(-1);
    },
    getProductDetail() {
      getDetail(this.detailId).then(res => {
        const data = res.result;

        // 获取轮播图数据
        this.topImages = data.itemInfo.topImages;
        console.log("Rd: getProductDetail -> this.topImages", this.topImages);
        // 获取商品数据,调用封装的ES6的class
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    const iid = this.$route.params.id;
    this.detailId = this.$route.params.id;
    this.getProductDetail();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped></style>
