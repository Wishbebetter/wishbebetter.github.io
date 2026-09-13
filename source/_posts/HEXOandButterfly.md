---
title: "HEXO & Butterfly 学习笔记"
date: 2026-09-06 16:03:07
layout: post
tags:
  - HEXO
  - Butterfly
description: 记录我的 Hexo 博客搭建过程
cover:
  image: /img/lucky_star.jpg
---

## 前言

上次折腾个人博客在一个多月前了，靠着AI缝缝补补也是搭起来了。然而到了现在我连怎么发一篇文章都不会了，痛定思过！故有了这篇，同时也把以前试验性的文章撤下。

个人网址搭建中！！！

## 在部署butterfly-themed HEXO时遇到的坑

1. GitHub-pages默认的静态网站生成器（Static Site Generator，SSG）是Jekll，所以如果使用它之外的SSG，（我这里是）要在main branch的source文件夹（就是gh-pages分支的根目录）下创建名为.nojekyll的空文件。不然会导致github-action失败。
2. busuanzi的后端统计API似乎不可用了，需要自己（或者用AI）捏一个适配器来使用别的服务。
3. 统计uv和pv的时候会把自己的访问也计入，我为了方便是用$\mu$block拦截请求，不过坏处是只能在后台看到统计了。
4. HEXO默认会忽略 *.* 开头的文件夹比如.well-known，需要在_config.yml的include:里手动添加。
5. 尽量避免&这样的特殊字符作为标题，可能会导致html文件语法错误——比如index.html。
6. 善用AI

GPT：

GitHub Pages 的 Deploy from a branch 模式，会把选择的分支作为网站来源。如果这个分支是源码形式，GitHub Pages 默认会尝试使用 Jekyll 构建；如果分支已经包含生成好的静态文件（HTML/CSS/JS），就可以直接托管。Hexo 的做法是自己生成静态文件，再把生成结果放到 gh-pages 分支，让 GitHub Pages 只负责托管。