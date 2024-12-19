<script setup>
import Article from './components/article/index.vue'
import ArticleNav from './components/article-nav/index.vue'
import Pagination from '@/components/pagination/index.vue'

const articles = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

const articleNavs = ref([
  {
    type: '文章',
    sum: 11
  },
  {
    type: '标签',
    sum: 22
  },
  {
    type: '归档',
    sum: 33
  }
])
</script>

<template>
  <div class="content">
    <!-- 左侧文章列表 -->
    <div class="article-list">
      <Pagination :pageCount="articles.length">
        <Article v-for="article in articles" :key="article" />
      </Pagination>
    </div>

    <!-- 右侧个人信息 -->
    <div class="personal-info">
      <img class="avatar" src="@/assets/images/sunrise.png" alt="" />
      <div class="personal-profile">
        <h3>JINX</h3>
        <p>关关难过关关过，前路漫漫亦灿灿</p>
      </div>
      <div class="article-navs">
        <ArticleNav
          v-for="articleNav in articleNavs"
          :key="articleNav.type"
          :type="articleNav.type"
          :sum="articleNav.sum"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// sass如何用全局变量，比如content的width，在别的地方也会用到，不如给他设置好
.content {
  width: $content-width;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  .article-list {
    flex: 1;
  }
  .personal-info {
    height: 100%;
    width: 270px;
    padding: 15px;
    background-color: #fafcff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    position: sticky;
    top: 90px;

    &:hover {
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    }

    .avatar {
      width: 120px;
      height: 120px;
      border-radius: calc(#{$content-width} / 2);
      object-fit: cover;
    }
    .personal-profile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3px;
      margin: 12px 0;
      color: #303133;
      p {
        font-size: 14px;
        color: #606266;
      }
    }
    .article-navs {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      // padding-bottom: 12px;
      // border-bottom: 1px solid rgb(199.5, 201, 204);
    }
  }
}
</style>
