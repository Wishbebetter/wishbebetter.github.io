---
title: "HEXO & Butterfly 学习笔记"
date: 2026-09-06 16:03:07
tags:
  - HEXO
  - Butterfly
description: 记录我的 Hexo 博客搭建过程
cover:
  image: /img/lucky_star.jpg
---

## 前言

上次折腾个人博客在一个多月前了，靠着AI缝缝补补也是搭起来了。然而到了现在我连怎么发一篇文章都不会了，痛定思过！故有了这篇，同时也把以前试验性的文章撤下。

发布文章是在source\_posts下编辑md文档。

还有libre-wolf浏览器里访问blog的vercount栏一直转圈是因为我用$\mu$block拦截请求了。

所以我现在还没搞明白，.deploy_git把网站文件推送到哪了。靠。

那个butterfly的action执行失败可以勉强解释为是之前Jekyll导致的。

……懂了点，pages这个功能在deploy from a branch 里会根据当前分支的内容判断构建方法。如果有config.yml和md这些文件，会启用我在创建repo时候选的Jekyll（其实现在记不清了）。

而在分支只有静态资源时就不构建。

以下GPT对我的“指正”：

GitHub Pages 的 Deploy from a branch 模式，会把选择的分支作为网站来源。如果这个分支是源码形式，GitHub Pages 默认会尝试使用 Jekyll 构建；如果分支已经包含生成好的静态文件（HTML/CSS/JS），就可以直接托管。Hexo 的做法是自己生成静态文件，再把生成结果放到 gh-pages 分支，让 GitHub Pages 只负责托管。

个人网址搭建中！！！

npm install npm uninstall

在想办法验证vercount的dashboard，.well-known文件夹因为有.被特殊处理了。

在 hexo g阶段因为没有加到include:里，所以被忽略。在github pages是因为jekyll会忽略.开头的文件夹所以没有创建网址。