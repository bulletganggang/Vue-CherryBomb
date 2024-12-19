<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  pageCount: Number
})
console.log(props)
</script>

<template>
  <div class="pagination">
    <slot></slot>
    <el-pagination background layout="prev, pager, next" :total="pageCount" :pager-count="6" />
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
