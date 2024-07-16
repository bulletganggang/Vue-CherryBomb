<script setup>
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="homeBg">
    <HeaderBar />

    <!-- 标题+欢迎语 -->
    <div class="welcome">
      <span class="welcome-title">Cherry Bomb</span>
      <span class="welcome-word">Welcome to my blog!</span>
    </div>
  </div>
  <Content></Content>
  <Footer></Footer>
</template>

<style lang="scss" scoped>
.homeBg {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/homeImg.png');
  background-position: center;
  background-size: cover;
  overflow: hidden; /* 防止内容溢出导致背景出现空白 */
  position: relative;

  .welcome {
    // background: red;
    position: absolute;
    left: 50%;
    top: 38%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
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
}
</style>
