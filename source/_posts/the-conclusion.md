---
title: the conclusion
date: 2026-07-20 17:23:19
tags:
---
所以我现在还没搞明白，.deploy_git把网站文件推送到哪了。靠。

那个butterfly的action执行失败可以勉强解释为是之前Jekyll导致的。

……懂了点，pages这个功能在deploy from a branch 里会根据当前分支的内容判断构建方法。如果有config.yml和md这些文件，会启用我在创建repo时候选的Jekyll（其实现在记不清了）。

而在分支只有静态资源时就不构建。

以下GPT对我的“指正”：

GitHub Pages 的 Deploy from a branch 模式，会把选择的分支作为网站来源。如果这个分支是源码形式，GitHub Pages 默认会尝试使用 Jekyll 构建；如果分支已经包含生成好的静态文件（HTML/CSS/JS），就可以直接托管。Hexo 的做法是自己生成静态文件，再把生成结果放到 gh-pages 分支，让 GitHub Pages 只负责托管。

个人网址搭建中！！！

npm install npm uninstall