# Vue Plugins

## 自动引入

### 自动引入组件

**`unplugin-vue-components`--用于库的自动引入**  

- 自定义组件
- Vue-router组件
- UI库组件（ElementPlus）

``` ts
//vite.config.ts
import Components from 'unplugin-vue-components/vite'

Components({
        dts: true,
        types: [
          {
            from: 'vue-router',
            names: ['RouterLink', 'RouterView'],
          },
        ],
        resolvers: [ElementPlusResolver()],
      }),

```

```ts
//tsconfig.json
//在includes中添加以下文件
    "./components.d.ts",
```

### 用于hooks函数自动引入

**`unplugin-auto-import` --用于hooks函数的自动引入**

``` ts
//vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        dts: true,
        imports: ['vue', 'vue-router'],
      })
```

```ts
//tsconfig.json
//在includes中添加以下文件
    "./auto-imports.d.ts"
```

::: warning 提示
当使用Eslint插件时会有冲突，解决方法如下
:::

1. Enable eslintrc.enabled

```ts
    // <!-- vite.config.ts -->
AutoImport({
  eslintrc: {
    enabled: true, // <-- this
  },
})
```

2. Update your eslintrc: Extending Configuration Files

``` js
// .eslintrc.js
module.exports = {
  extends: [
    './.eslintrc-auto-import.json',
  ],
}
```
