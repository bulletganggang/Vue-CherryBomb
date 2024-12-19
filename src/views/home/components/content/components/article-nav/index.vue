<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  type: String,
  sum: Number
})
console.log(props)
</script>

<template>
  <div class="article-nav">
    <div class="type">{{ type }}</div>
    <div class="sum">{{ sum }}</div>
  </div>
</template>

<style lang="scss" scoped>
.article-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  transition: all 0.3s ease-in-out;
  .type {
    color: #606266;
  }
  .sum {
    color: #303133;
    font-weight: bold;
  }
  &:hover {
    cursor: pointer;
    .type,
    .sum {
      color: rgb(121, 187, 255);
    }
  }
}
</style>
