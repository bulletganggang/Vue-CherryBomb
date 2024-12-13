<script setup></script>

<template>
  <div>this is content</div>
</template>

<style lang="scss" scoped>
// sass如何用全局变量，比如content的width，在别的地方也会用到，不如给他设置好
.content {
  width: $content-width;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
