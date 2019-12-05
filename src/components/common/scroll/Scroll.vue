<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: {}
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      pullUpLoad: this.pullUpLoad,
      probeType: this.probeType,
      click: true
    });

    this.scroll.on("scroll", position => {
      this.$emit("scrollPosition", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("scrollPullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll.refresh();
    }
  }
};
</script>

<style scoped></style>
