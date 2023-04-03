---
sidebar: auto
collapsible: auto,
---

# Node.Js

## Express

## 连接 Mysql

```ts
npm install mysql

import mysql from 'mysql'
const database = mysql.createPool({
  host: 'localhost',
  port:3306,
  //根据mysql配置
  //用户密码数据库
  user: '***',
  password: '******',
  database: '******',
})

//进程退出时关闭mysql服务
process.on('exit', async () => {
  try {
    database.end()
  } catch (error) {
    console.error(error)
  }
})
```

## 错误解决方案

### MySql 错误 1251 - Client does not support authentication protocol requested by server 解决方案

1. 管理员运行 CMD 窗口（ 按 win 键 --> Windows 系统 --> 命令提示符(右键) --> 更多 --> 以管理员身份运行 ）

2. 通过 cmd 命令进入 mysql 的安装目录（笔者使用的 MySQL 是 8.0.12 版本的，mysql server 安装的默认路径为：C:\Program Files\MySQL\MySQL Server 8.0\bin）

3. 登录mysql
  
``` sql
mysql -u root -p
```

``` sql
 alter user 'root'@'localhost' identified with mysql_native_password by '123456';

flush privileges;
```

:::tip
作者：老衲呢
链接：<https://www.jianshu.com/p/b338a2ffec0d>
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
:::
