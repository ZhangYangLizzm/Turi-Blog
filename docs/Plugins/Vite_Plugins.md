# Vite Plugins

## 图片压缩

`yarn add vite-plugin-imagemin`

``` ts
//vite.config.ts
import imagemin from 'vite-plugin-imagemin'

plugins: [
      imagemin(),
      ...
 ]
```

## 打包文件大小可视化

`yarn add rollup-plugin-visualizer`

``` ts
//vite.config.ts
import visualizer from 'rollup-plugin-visualizer'

plugins: [
      visualizer(),
      ...
 ]
```

打包会生成`stats.html`打开即可

## https

对基本使用的配置需求来说，可以添加 @vitejs/plugin-basic-ssl 到项目插件中，会自动创建和缓存一个自签名的证书。

`yarn add @vitejs/plugin-basic-ssl`

```ts
   // vite.config.js
import basicSsl from '@vitejs/plugin-basic-ssl'

export default {
  plugins: [
    basicSsl()
  ]
}
```
