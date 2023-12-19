<script setup>
import { User, View, ArrowRightBold } from '@element-plus/icons-vue'

// 收集form元素
const form = ref({
  name: '',
  password: '',
  rememberMe: false
})

// 修改登录/注册
const isRegister = ref(true)

// 查看密码
const viewPwd = ref('password')
</script>

<template>
  <div class="loginpage">
    <div class="loginform">
      <!-- 标题 -->
      <h1>{{ isRegister ? 'Login' : 'Register' }}</h1>

      <!-- 登录模块 -->
      <el-form :model="form" v-if="isRegister">
        <!-- username -->
        <el-form-item class="inputbox">
          <input
            class="ipt"
            v-model="form.name"
            type="text"
            placeholder="用户名"
          />
          <el-icon><User /></el-icon>
        </el-form-item>

        <!-- password -->
        <el-form-item class="inputbox">
          <input
            class="ipt"
            v-model="form.password"
            :type="viewPwd"
            placeholder="密码"
          />
          <el-icon
            ><View
              @click="
                viewPwd === 'password'
                  ? (viewPwd = 'text')
                  : (viewPwd = 'password')
              "
          /></el-icon>
        </el-form-item>

        <!-- 记住我 & 忘记密码 -->
        <el-form-item class="remember-forget">
          <el-checkbox v-model="form.rememberMe" label="记住我" size="large" />
          <a href="#">忘记密码?</a>
        </el-form-item>

        <!-- 登录按钮 -->
        <el-form-item
          ><el-button type="primary" round class="login-btn"
            >登录</el-button
          ></el-form-item
        >

        <!-- 去注册按钮 -->
        <el-form-item class="no-account">
          <span>没有账号?</span>
          <el-button type="primary" round class="register-btn"
            >注册<el-icon><ArrowRightBold /></el-icon
          ></el-button>
        </el-form-item>
      </el-form>

      <!-- 注册模块 -->
      <el-form :model="form" v-else></el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 背景
.loginpage {
  width: 100vw;
  height: 100vh;
  // background: linear-gradient(to right, #81d8d1, #65cbf7);
  background: url('@/assets/LoginImg/img2.jpg');
  background-position: center;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  // 登录表单
  .loginform {
    color: #f3f3f3;
    height: 52%;
    width: 25%;
    border: 2px solid rgba($color: #fff, $alpha: 0.2);
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba($color: #000, $alpha: 0.1);
    border-radius: 10px;
    padding: 25px 40px;

    // 标题
    h1 {
      font-size: 48px;
      text-align: center;
    }

    // 输入框
    .inputbox {
      margin: 30px 0;
      height: 50px;
      width: 100%;
      position: relative;

      input {
        height: 100%;
        width: 100%;
        background: transparent;
        outline: none;
        border: 2px solid rgba($color: #fff, $alpha: 0.2);
        border-radius: 40px;
        padding: 20px;
        padding-right: 50px;
        color: #f3f3f3;
        font-size: 16px;
        &::placeholder {
          color: #f3f3f3;
        }
      }

      .el-icon {
        position: absolute;
        top: 50%;
        right: 6%;
        transform: translateY(-50%);
        font-size: 20px;
      }
    }

    // 记住我 & 忘记密码
    .remember-forget {
      .el-checkbox {
        color: #f3f3f3;
        zoom: 113.5%;
      }
      a {
        margin-left: auto;
        color: #f3f3f3;
        font-size: 16px;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    // 登录 & 注册按钮
    .login-btn,
    .register-btn {
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

    // 去注册模块
    .no-account {
      margin: -5px 0;
      color: #81d8d1;
      .el-icon {
        top: -1px;
      }
    }
  }
}

input[type='password']::-ms-reveal {
  display: none;
}
input[type='password']::-ms-clear {
  display: none;
}
input[type='password']::-o-clear {
  display: none;
}
</style>
