<script setup>
import Article from './components/article/index.vue'
</script>

<template>
  <div class="content">
    <div class="article-list">
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
    <div class="personal-info">this is personal-info</div>
  </div>
</template>

<style lang="scss" scoped>
// sass如何用全局变量，比如content的width，在别的地方也会用到，不如给他设置好
.content {
  width: $content-width;
  padding: 20px 0;
  // background: red;
  display: flex;
  justify-content: space-between;
  .article-list {
    width: 800px;
    // background-color: aqua;
  }
  .personal-info {
    width: 240px;
    background-color: yellow;
  }
}
</style>
