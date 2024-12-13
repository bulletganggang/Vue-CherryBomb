<script setup>
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
import { ArrowDownBold } from '@element-plus/icons-vue'
</script>

<template>
  <div class="main-home">
    <div class="home-background">
      <HeaderBar />

      <!-- 标题+欢迎语 -->
      <div class="welcome">
        <div class="welcome-title">Cherry Bomb</div>
        <div class="welcome-word">Welcome to my blog!</div>
      </div>

      <!-- 下滑阅读-->
      <div class="slide-to-read">
        <div class="slide-to-read-title">Slide to read</div>
        <div>
          <el-icon><ArrowDownBold /></el-icon>
        </div>
      </div>
    </div>
    <Content />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.main-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;

  .home-background {
    width: 100%;
    height: 100vh;
    background-image: url('@/assets/images/homeImg.png');
    background-position: center;
    background-size: cover;
    overflow: hidden; /* 防止内容溢出导致背景出现空白 */
    position: relative;

    .welcome {
      position: absolute;
      left: 50%;
      top: 38%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      text-align: center;
      color: #fff;

      .welcome-title {
        font-size: 48px;
        font-weight: 900;
        text-shadow: rgb(0, 0, 0) 4.8px 4.8px 9.6px;
      }

      .welcome-word {
        font-size: 22px;
        font-weight: 500;
        text-shadow: rgb(0, 0, 0) 1.8px 1.8px 3.6px;
      }
    }

    .slide-to-read {
      position: absolute;
      left: 50%;
      bottom: 15%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      text-align: center;
      color: #fff;
    }
  }
}
</style>
