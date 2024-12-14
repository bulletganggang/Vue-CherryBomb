<script setup></script>

<template>
  <div class="article">
    <img class="article-cover" src="@/assets/images/homeimg.png" />
    <div class="article-info">
      <div class="article-header">
        <div class="title">前端入门教学</div>
        <div class="brief-introduction">123213123123</div>
      </div>
      <div class="article-footer">
        <div class="create-time">创建时间：123</div>
        <div class="views">浏览量：456</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article {
  height: 200px;
  width: 100%;
  margin-bottom: 15px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  gap: 15px;
  background-color: #fafcff;
  .article-cover {
    height: 100%;
    width: 240px;
    border-radius: 6px;
    object-fit: cover;
  }
  .article-info {
    width: 100%;
    height: 100%;
    color: #606266;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .article-header {
      .title {
        font-size: 30px;
        font-weight: bold;
        color: rgb(51.2, 126.4, 204);
        margin-bottom: 5px;
      }
    }
    .article-footer {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
