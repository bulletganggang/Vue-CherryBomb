<script setup>
// 导入element-icon
import { Search, Sunny, Moon, UserFilled } from '@element-plus/icons-vue'
import { throttle } from '@/utils/utils'

const theme = ref('Light')

const setTheme = throttle(() => {
  theme.value = theme.value === 'Light' ? 'Dark' : 'Light'
}, 300)
</script>

<template>
  <!-- 内容区 -->
  <div class="topBar">
    <!-- 左边logo区-->
    <div class="logo" @click="this.$router.push('/home')">CherryBomb</div>

    <!-- 中间分类区 -->
    <div class="menu">
      <!-- 主页 -->
      <router-link to="/home" class="menu-router-link">Home</router-link>

      <!-- 分类 -->
      <router-link to="/categories" class="menu-router-link">Categories</router-link>

      <!-- 联系我 -->
      <router-link to="/contact" class="menu-router-link">Contact</router-link>
    </div>

    <!-- 右边按钮区-->
    <div class="actions-btn">
      <!-- 昼夜切换 -->
      <div class="theme-icon" @click="setTheme">
        <el-icon v-if="theme === 'Light'"><Sunny /></el-icon>
        <el-icon v-else><Moon /></el-icon>
      </div>

      <!-- 搜索 -->
      <div class="search-container">
        <el-icon><Search /></el-icon>
      </div>

      <!-- 登录/用户 -->
      <router-link to="/login" class="actions-router-link">Sign in</router-link>
      <router-link to="/user" style="display: none">
        <el-avatar :icon="UserFilled" :size="0" />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 内容区
.topBar {
  width: 100%;
  height: 70px;
  background-color: transparent;
  margin: 0 auto;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;

  // 左边logo区
  .logo {
    color: #e8e8eb;
    font-size: 28px;
    font-weight: 900;

    &:hover {
      cursor: pointer;
    }
  }

  // 中间分类区
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 30px;
    .menu-router-link {
      font-size: 21px;
      font-weight: 300;
      color: #e8e8eb;
      text-decoration: none;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  // 右边按钮区
  .actions-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    .el-icon {
      margin-right: 15px;
      font-size: 21px;
      // 挺重要的这个属性，第一次发现还可以这样，可以让icon和字体对齐
      vertical-align: text-bottom;
      cursor: pointer;
      color: #e8e8eb;
    }

    .search-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .actions-router-link {
      font-size: 21px;
      font-weight: 300;
      color: #e8e8eb;
      text-decoration: none;
      border: 1px solid #e8e8eb;
      padding: 9px;
    }

    .el-avatar {
      cursor: pointer;
    }
  }
}
</style>
