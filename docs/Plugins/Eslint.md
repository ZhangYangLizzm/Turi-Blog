# Eslint  

## 安装Eslint

``` shell
yarn add eslint  -D
npx eslint --init
```

添加lint命令

``` json
{
    "scripts":{
        // lint当前项目中的文件并且开启自动修复
        "lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix",
    }
}
```

## Vue相关

命令行在解析vue文件会报`parsing error`.  
默认`eslint`不会解析`vue`文件，所以我们需要一个额外的解析器来帮我们解析`vue`文件。

```shell
yarn add vue-eslint-parser -d
```

添加以下选项

``` js
// .eslintrc.js
"parser": 'vue-eslint-parser',
```

## Typescript相关

``` js
// .eslintrc.js
"rules":[
  '@typescript-eslint/no-non-null-assertion': 'off',  //关闭ts的非空断言
  "@typescript-eslint/no-explicit-any":'off' //关闭ts的any
]
```
