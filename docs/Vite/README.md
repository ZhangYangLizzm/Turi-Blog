---
sidebar : auto
---
# Vite

## [Vite插件](../Plugins/Vite_Plugins.md)

## 更改路径名

``` ts
  //实际更改路径别名(vite.config.ts)
    resolve: {
      alias: {
        src: resolve(__dirname, 'src'),
      },
    },
    //为了不标红(tsconfig.json)
    "baseUrl": "./",
    "paths": {
      "src": ["./src/*"]
    },
```
