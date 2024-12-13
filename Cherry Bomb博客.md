# Cherry Bomb博客

### 创建文件夹

```cmd
pnpm create vue
```

在创建选项中选择

### Eslint 配置代码风格

在.eslintrc.cjs中配置

```cjs
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true, // 单引号
        semi: false, // 无分号
        printWidth: 80, // 每行宽度至多80字符
        trailingComma: 'none', // 不加对象|数组最后逗号
        endOfLine: 'auto' // 换行符号不限制（win mac 不一致）
      }
    ],
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index'] // vue组件名称多单词组成（忽略index.vue）
      }
    ],
    'vue/no-setup-props-destructure': ['off'], // 关闭 props 解构的校验
    // 💡 添加未定义变量错误提示，create-vue@3.6.3 关闭，这里加上是为了支持下一个章节演示。
    'no-undef': 'error'
  },
  globals: {
    ElMessage: 'readonly',
    ElMessageBox: 'readonly',
    ElLoading: 'readonly'
  }
}
```

### 配置Git仓库

初始化git仓库

```
git init
```

初始化 husky 工具配置,提交前做代码检查

```
pnpm dlx husky-init && pnpm install
```

安装 lint-staged 包

```
pnpm i lint-staged -D
```

package.json 配置 lint-staged 命令

```
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs --fix --ignore-path .gitignore",
    "format": "prettier --write src/",
    "prepare": "husky install",
    "lint-staged": "lint-staged"
  },
  "lint-staged": {
    "*.{js,ts,vue}": [
      "eslint --fix"
    ]
  }
```

修改.husky/pre-commit 文件

```
-npm test
+pnpm lint-staged
```

### 目录调整

1. 删除一些初始化的默认文件
2. 修改剩余代码内容
3. 新增调整我们需要的目录结构
4. 拷贝全局样式和图片，安装预处理器支持

### 引入 Element Plus 组件库

安装Element Plus 组件库

```
pnpm install element-plus
```

安装按需导入所需的插件

```
pnpm add -D unplugin-vue-components unplugin-auto-import
```

配置vite.config.js

```
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

```

### 配置Pinia持久化

在stores文件夹中创建index.js，统一管理pinia，创建modules文件夹放置子组件pinia

```
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia
```

如果需要使用子组件中的pinia，在index中使用

```
export * from './modules/user'
```

在子组件的pinia中开启本地持久化

```
{
  persist: true
}
```

### axios配置

暂无~

### 配置ref插件

人要晕掉

[Vue3+Vite项目按需自动导入配置以及一些常见问题修复 - 掘金 (juejin.cn)](https://juejin.cn/post/7263274550074196025)

### 路由配置

脑袋空空想不到~想到啥写啥把

### vite配置scss

配置完成之后可以在vue文件中全局使用scss变量，非常方便
https://blog.csdn.net/m0_61486963/article/details/127494962

### JS函数库es-toolkit

[关于 es-toolkit | es-toolkit 中文文档 | es-toolkit中文网](https://www.es-toolkit.cn/zh_hans/intro.html)

一个比lodash好用也更加新的函数库

## 登录 & 注册页面

在views文件夹下新建login文件夹，再在login文件夹下建立LoginPage.vue

同时在router/index.js中配置路由

**本次登录页面主要结构参考此视频[Login Form in HTML & CSS - YouTube](https://www.youtube.com/watch?v=hlwlM4a5rxg)**

**部分组件用到了element-plus**

### 页面静态布局

```
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
          <el-icon
            ><View @click="handleViewPwd()" style="cursor: pointer"
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
          <el-icon
            ><View @click="handleViewPwd()" style="cursor: pointer"
          /></el-icon>
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
          <el-icon
            ><View @click="handleViewRePwd()" style="cursor: pointer"
          /></el-icon>
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
```

### 页面CSS代码

```
<style lang="scss" scoped>
// 背景
.loginpage {
  width: 100vw;
  height: 100vh;
  // background: linear-gradient(to right, #81d8d1, #65cbf7);
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 防止内容溢出导致背景出现空白 */

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

/* 媒体查询控制loginform最小宽度 */
@media screen and (max-width: 1630px) {
  .loginpage .loginform {
    width: 394px;
  }
}

/* 媒体查询控制inputbox最小宽度 */
@media screen and (max-width: 390px) {
  .loginpage .loginform .inputbox {
    width: 306px;
  }
}

/* 媒体查询控制loginform最小高度 */
@media screen and (max-height: 970px) {
  .loginpage .loginform {
    height: 504px;
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
```

### 页面JS逻辑代码

```
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
const backgroundUrl = ref('')

// 生成随机图片路径
;(() => {
  const randomNumber = Math.floor(Math.random() * totalImages) + 1
  backgroundUrl.value =
    '../../../src/assets/LoginImg/img' + randomNumber + '.jpg'
})()
</script>
```

以后有时间再来细说每部分都干了啥...
