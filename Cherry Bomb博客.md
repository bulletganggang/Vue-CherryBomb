# Cherry Bomb博客

### 创建文件夹

```cmd
pnpm create vue
```

在创建选项中选择

![70280249874](C:\Users\Cherr\AppData\Local\Temp\1702802498742.png)



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

![70280449255](C:\Users\Cherr\AppData\Local\Temp\1702804492557.png)



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



## 登录&注册页面

在views文件夹下新建login文件夹，再在login文件夹下建立LoginPage.vue

同时在router/index.js中配置路由

本次登录页面主要结构参考此视频[Login Form in HTML & CSS - YouTube](https://www.youtube.com/watch?v=hlwlM4a5rxg)



