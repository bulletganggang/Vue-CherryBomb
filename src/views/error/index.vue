<script setup>
import { ref } from 'vue'

const backTime = ref(5)
const countTime = setInterval(() => {
  backTime.value--
  if (backTime.value === 1) {
    clearInterval(countTime)
    location.href = '/'
  }
}, 1000)
</script>

<template>
  <div>404 Not Found</div>
  <div>还有{{ backTime }}秒后返回主页面</div>
</template>

<style lang="scss" scoped>
div {
  font-size: 40px;
  font-weight: bold;
}
</style>
