<script setup>
// 导入element-icon
import {
  User,
  View,
  ArrowRightBold,
  ArrowLeftBold
} from '@element-plus/icons-vue'

// 收集form元素
const form = ref({
  name: '',
  password: '',
  rePassword: '',
  rememberMe: false,

  // 定义警告次数，警告次数为0则只警告一次
  warnTime: 0
})

// 密码框处理事件

// 密码
const viewPwd = ref(false)

// 再次输入密码
const viewRePwd = ref(false)

// 处理查看密码
const handleViewPwd = () => {
  if (form.value.password !== '') {
    viewPwd.value = !viewPwd.value
  }
}

// 处理再次查看密码
const handleViewRePwd = () => {
  if (form.value.rePassword !== '') {
    viewRePwd.value = !viewRePwd.value
  }
}
// 处理密码框为空时仍然为文本框可以看到密码的bug
const handleEmptyPwd = () => {
  if (form.value.password === '') {
    viewPwd.value = false
  }
}

// 处理re密码框为空时仍然为文本框可以看到密码的bug
const handleEmptyRePwd = () => {
  if (form.value.rePassword === '') {
    viewRePwd.value = false
  }
}

// 点击密码框时警告不要输入真实密码
// user点击tab键或者点击鼠标到密码框，都会发出警告
const warnPwd = () => {
  if (form.value.warnTime) return
  ElMessage({
    showClose: true,
    message: '登录注册页面仅用于测试，请千万不要输入真实密码',
    type: 'warning'
  })
  form.value.warnTime++
}

// 切换登录/注册
const isLogin = ref(true)

// 处理登录/注册form切换
const handleChangeForm = () => {
  // 修改isLogin，切换模块
  isLogin.value = !isLogin.value

  // 切换的时候清空表单
  form.value.name = form.value.password = form.value.rePassword = ''
}

// 图片总数
const totalImages = 75

// 史上踩过最大坑
// 背景url
const backgroundUrl = ref('../../../src/assets/LoginImg/img66.jpg')

// 生成随机图片路径
;(() => {
  const randomNumber = Math.floor(Math.random() * totalImages) + 1
  backgroundUrl.value =
    '../../../src/assets/LoginImg/img' + randomNumber + '.jpg'
})()
</script>

<template>
  <div class="loginpage" :style="{ backgroundImage: `url(${backgroundUrl})` }">
    <!-- 登录注册模块 -->
    <div class="loginform">
      <!-- 标题 -->
      <h1>{{ isLogin ? 'Login' : 'Register' }}</h1>

      <!-- 登录模块 -->
      <el-form :model="form" v-if="isLogin">
        <!-- username -->
        <el-form-item class="inputbox">
          <input
            class="ipt"
            v-model="form.name"
            type="text"
            placeholder="用户名"
            @keydown.tab="warnPwd()"
          />
          <el-icon><User /></el-icon>
        </el-form-item>

        <!-- password -->
        <el-form-item class="inputbox">
          <input
            class="ipt"
            v-model="form.password"
            :type="viewPwd ? 'text' : 'password'"
            placeholder="密码"
            @input="handleEmptyPwd"
            @click="warnPwd"
          />
          <el-icon><View @click="handleViewPwd()" /></el-icon>
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
          <el-button
            type="primary"
            round
            class="login-btn"
            @click="handleChangeForm()"
            >注册<el-icon><ArrowRightBold /></el-icon
          ></el-button>
        </el-form-item>
      </el-form>

      <!-- 注册模块 -->
      <el-form :model="form" v-else>
        <!-- username -->
        <el-form-item class="inputbox">
          <input
            class="ipt"
            v-model="form.name"
            type="text"
            placeholder="用户名"
            @keydown.tab="warnPwd()"
          />
          <el-icon><User /></el-icon>
        </el-form-item>

        <!-- password -->
        <el-form-item class="inputbox">
          <input
            class="ipt"
            v-model="form.password"
            :type="viewPwd ? 'text' : 'password'"
            placeholder="密码"
            @input="handleEmptyPwd"
            @click="warnPwd"
          />
          <el-icon><View @click="handleViewPwd()" /></el-icon>
        </el-form-item>

        <!-- rePassword -->
        <el-form-item class="inputbox">
          <input
            class="ipt"
            v-model="form.rePassword"
            :type="viewRePwd ? 'text' : 'password'"
            placeholder="请再次输入密码"
            @input="handleEmptyRePwd"
          />
          <el-icon><View @click="handleViewRePwd()" /></el-icon>
        </el-form-item>

        <!-- 注册按钮 -->
        <el-form-item
          ><el-button type="primary" round class="login-btn"
            >注册</el-button
          ></el-form-item
        >

        <!-- 去登录按钮 -->
        <el-form-item class="have-account">
          <span>已有账号?</span>
          <el-button
            type="primary"
            round
            class="login-btn"
            @click="handleChangeForm()"
            ><el-icon><ArrowLeftBold /></el-icon>登录</el-button
          >
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
  // background: linear-gradient(to right, #81d8d1, #65cbf7);
  background-position: center;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  // 登录表单
  .loginform {
    color: #f3f3f3;
    height: 52%;
    width: 24%;
    border: 2px solid rgba($color: #fff, $alpha: 0.2);
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba($color: #000, $alpha: 0.1);
    border-radius: 10px;
    padding: 25px 40px;

    // 标题
    h1 {
      font-size: 48px;
      text-align: center;
      margin-top: -6px;
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

// 让密码输入框取消小眼睛
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
