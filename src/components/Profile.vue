<template>
  <div>
    <h1>这是用户的 ---{{ userInfo }}</h1>
  </div>
</template>
<script>
export default {
  computed: {
    userInfo() {
      return this.$route.query.name;
    }
  }
};
</script>
<style scoped></style>
