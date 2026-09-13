---
title: Matrix_deployment
date: 2026-09-06 17:59:11
tags:
  - Matrix
  - Snikket
---

其实我本来想部署matrix的。但是看了

https://www.techug.com/post/self-hosting-a-matrix-server-for-5-years/

后转向了snikket。

注意部署Snikket后Snikket-Nginx将会占据重要端口比如443。

## 如何修改用户权限：
进入Prosody

执行
```Lua
room._affiliations["账户域名"] = "owner"
```

确认
```Lua
room._affiliations["账户域名"]
```
返回owner则修改成功。

持久化保存
```Lua
room:save()
```
返回Result: true