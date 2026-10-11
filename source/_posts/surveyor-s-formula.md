---
title: surveyor's_formula
date: 2026-09-26 22:53:03
updated:
categories:
tags:
  - Math
  - 
description:
cover:
permalink:
---

# CORE: 一个多边形的面积 = 每条边与原点形成的有向三角形面积之和（画一画就可以看来了）。

对于一个n边形，其面积公式为：

$$
A_n = 1/2\left| \sum_{i=1}^{n-1}(\det (\begin{bmatrix}
    x_i,y_i \\
    x_{x+1},y_{i+1}
\end{bmatrix})) \right|
$$
