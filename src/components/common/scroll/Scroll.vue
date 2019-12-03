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
  props: {},
  data() {
    return {
      scroll: {}
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      pullUpLoad: true
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>

<style scoped></style>
