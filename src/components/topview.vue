<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <slot>
      <h1>Top view Slot</h1>
    </slot>

    <slot name="topviewslot">1111111</slot>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  props: {
    msg: String
  },

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
