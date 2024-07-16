<script setup>
// 导入element-icon
import { User, ArrowRightBold, Lock } from '@element-plus/icons-vue'

// 收集form元素
const form = ref({
  name: '',
  password: '',
  rePassword: '',
  rememberMe: false
})

// 切换登录/注册
const isLogin = ref(true)

// 处理登录/注册form切换
const handleChangeForm = () => {
  // 修改isLogin，切换模块
  isLogin.value = !isLogin.value

  // 切换的时候清空表单
  form.value.name = form.value.password = form.value.rePassword = ''
  form.value.rememberMe = false
}
</script>

<template>
  <div class="loginpage">
    <!-- 登录注册模块 -->
    <div class="loginform">
      <!-- 标题 -->
      <h1>{{ isLogin ? 'Login' : 'Register' }}</h1>

      <!-- 登录模块 -->
      <el-form :model="form" v-if="isLogin">
        <!-- username -->
        <el-form-item class="inputbox" required>
          <el-input v-model="form.name" :prefix-icon="User" placeholder="请输入用户名" />
        </el-form-item>

        <!-- password -->
        <el-form-item class="inputbox" required>
          <el-input
            type="password"
            :prefix-icon="Lock"
            show-password
            v-model="form.password"
            placeholder="请输入密码"
          />
        </el-form-item>

        <!-- 记住我 & 忘记密码 -->
        <el-form-item>
          <div class="remember-forget">
            <el-checkbox v-model="form.rememberMe" label="记住我" size="large" />
            <a href="#">忘记密码？</a>
          </div>
        </el-form-item>

        <!-- 登录按钮 -->
        <el-form-item
          ><el-button type="primary" round class="login-btn">登录</el-button></el-form-item
        >

        <!-- 去注册按钮 -->
        <el-form-item class="no-account">
          <span>暂无账号？</span>
          <el-button type="primary" round class="login-btn" @click="handleChangeForm()"
            >注册<el-icon><ArrowRightBold /></el-icon
          ></el-button>
        </el-form-item>
      </el-form>

      <!-- 注册模块 -->
      <el-form :model="form" v-else>
        <!-- username -->
        <el-form-item class="inputbox">
          <el-input v-model="form.name" :prefix-icon="User" placeholder="请输入用户名" />
        </el-form-item>

        <!-- password -->
        <el-form-item class="inputbox">
          <el-input
            type="password"
            :prefix-icon="Lock"
            show-password
            v-model="form.password"
            placeholder="请输入密码"
        /></el-form-item>

        <!-- rePassword -->
        <el-form-item class="inputbox">
          <el-input
            type="password"
            :prefix-icon="Lock"
            show-password
            v-model="form.rePassword"
            placeholder="请再次输入密码"
        /></el-form-item>

        <!-- 注册按钮 -->
        <el-form-item
          ><el-button type="primary" round class="login-btn">注册</el-button></el-form-item
        >

        <!-- 去登录按钮 -->
        <el-form-item class="have-account">
          <span>已有账号？</span>
          <el-button type="primary" round class="login-btn" @click="handleChangeForm()"
            ><span>登录</span><el-icon><ArrowRightBold /></el-icon
          ></el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 背景
.loginpage {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to left top, #1eadd1 0%, #16105f 100%);
  display: flex;
  justify-content: center;
  align-items: center;

  // 登录表单
  .loginform {
    color: #f3f3f3;
    height: 550px;
    width: 460px;
    border: 2px solid rgba($color: #fff, $alpha: 0.2);
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba($color: #000, $alpha: 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    // 标题
    h1 {
      font-size: 48px;
      margin-top: -6px;
    }

    // 输入框
    .inputbox {
      margin: 30px 0;
      height: 50px;
      width: 380px;
    }

    // 记住我 & 忘记密码
    .remember-forget {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 380px;

      .el-checkbox {
        color: #f3f3f3;
      }
      a {
        color: #f3f3f3;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    // 登录 & 注册按钮
    .login-btn {
      width: 100%;
      background: linear-gradient(to right, #81d8d1, #65cbf7);
      border: none;
      border-radius: 40px;
      height: 50px;
      color: #f3f3f3;
      font-size: 16px;
      font-weight: 600;
      box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
    }

    // 去注册/登录模块
    .have-account,
    .no-account {
      margin: -5px 0;
      color: #81d8d1;
      .el-icon {
        top: -1px;
      }
    }

    .have-account {
      margin: -10px 0;
    }
  }
}
</style>
