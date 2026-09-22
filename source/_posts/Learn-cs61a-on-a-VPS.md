---
title: Learn_cs61a_on_a_VPS
date: 2026-09-14 21:14:09
updated:
categories:
  - cs61a
tags:
  - VPS
  - Linux
  - Python
description: "学习cs61a的记录"
cover:
permalink:
---

## 事前准备

由于电脑比较笨重，还要充电器。所以使用iPad+ssh连接VPS的方法。

> [!TIP]
> 在.ssh文件夹创建config并:
> ```
> Host (alias)
>    HostName (IP address)
>    User (like: root)
>    IdentityFile (like: ~/.ssh/id_ed25519)
> ```
> 后可以直接:
> ssh alias
> 和
> scp src alias:dst-folder

进行测试需安装 pytest 和 pygrader。

##