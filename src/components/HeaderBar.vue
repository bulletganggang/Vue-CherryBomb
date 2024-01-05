<script setup>
// 导入element-icon
import { Search, Sunny, Moon, UserFilled } from '@element-plus/icons-vue'
</script>

<template>
  <!-- 内容区 -->
  <div class="topBar">
    <!-- 左边logo区-->
    <div class="logo">CherryBomb</div>

    <!-- 中间分类区 -->
    <div class="menu">
      <!-- 主页 -->
      <router-link to="/home" class="menu-router-link">Home</router-link>

      <!-- 分类 -->
      <router-link to="/categories" class="menu-router-link"
        >Categories</router-link
      >

      <!-- 联系我 -->
      <router-link to="/contact" class="menu-router-link">Contact</router-link>
    </div>

    <!-- 右边按钮区-->
    <div class="actions-btn">
      <!-- 昼夜切换 -->
      <el-icon><Sunny /></el-icon>
      <el-icon style="display: none"><Moon /></el-icon>

      <!-- 搜索 -->
      <el-icon
        ><router-link to="/search" class="actions-icon-router-link"
          ><Search /></router-link
      ></el-icon>

      <!-- 登录/用户 -->
      <router-link to="/login" class="actions-router-link">Sign in</router-link>
      <router-link to="/user" style="display: none"
        ><el-avatar :icon="UserFilled" :size="0"
      /></router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 内容区
.topBar {
  width: 100%;
  height: 70px;
  background-color: white;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  // 左边logo区
  .logo {
    color: #474a50;
    font-size: 26px;
    font-weight: 800;
  }

  // 中间分类区
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    .menu-router-link {
      margin-right: 20px;
      font-size: 21px;
      font-weight: 300;
      color: #474a50;
      text-decoration: none;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  // 右边按钮区
  .actions-btn {
    .el-icon {
      margin-right: 15px;
      font-size: 21px;
      // 挺重要的这个属性，第一次发现还可以这样，可以让icon和字体对齐
      vertical-align: text-bottom;
      cursor: pointer;
      color: #474a50;
    }
    .actions-icon-router-link {
      color: #474a50;
    }
    .actions-router-link {
      font-size: 21px;
      font-weight: 300;
      color: #474a50;
      text-decoration: none;
      border: 1px solid #474a50;
      padding: 9px;
    }
    .el-avatar {
      cursor: pointer;
    }
  }
}
</style>
