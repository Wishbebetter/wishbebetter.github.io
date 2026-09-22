---
title: 100-prisonals
date: 2026-09-22 19:10:42
updated:
categories: clutter
tags:
  - Math
  - 
description: 有趣的百囚徒问题
cover:
permalink:
---
先上相关的论文：

[The Locker Puzzle](The_Locker_Puzzle.pdf)

# preface(copied)
#math

Philippe Flajolet和Robert Sedgewick在2009年提出了“百囚犯问题(prisoners problem）”：

在某个法制不健全的国家， 监狱中有编号1到100的100名死刑犯。监狱长给了他们最后一次机会：

一个房间里有100个抽屉，监狱长随意地把1到100这100个号码放入1号到100号抽屉中，每个抽屉一张。囚犯们逐个进入房间，每人可以任意打开50个抽屉，之后关上。如果每名囚犯都在这50个抽屉中发现了他的号码，那么**所有的**犯人都会被赦免；如果有人没有找到他的号码，那么**所有的**囚犯都会被处死。在第一个囚犯进入房间之前，囚犯们允许一起讨论开抽屉的“策略”，但一旦第一个囚犯进入房间，他们之间就被禁止交流。

如果纯粹随机开抽屉，那么所有人都被赦免的概率只有$\left( \frac{1}{2} \right)^{100}$。

囚犯有什么其他的好策略么?

# strategy

根据我的理解，似乎是将独立事件变为相关事件。

如果是随机选择，则这100个事件相互独立。

抽屉号码与纸上号码（就当写在纸上了）形成映射

$$
\begin{align}
\begin{bmatrix}
x_{1}\to y_{1} \\
\vdots ~ \to ~ \vdots \\
x_{n}\to y_{n}
\end{bmatrix}
\end{align}
$$

## 正文

采用：第i个人找第i个抽屉，如果未找到自己的号码，则找序号等于纸上号码的抽屉。

采用这种策略会导致：如果第i个人在找了j次后找到了自己的号码，则在寻找过程中的（j-1）个人也将在j次后找到自己的号码。

则该问题转化为：出现大于50次找寻的循环序列的概率是多少？

对于k个数，环状序列的排序方法有：k!个。

一个有n个不重复序列最多可以分解为n个循环，最少可以分为1个。

那么对于一个有n个数字的序列，存在一个k个数字的循环时可有的排序数是：(k-1)!（注意初始数位置的选定是有意义的，因为还有其他数.但是选定的数都不能选择对应序号的位置，否则无法形成循环）

所以对于n个数，出现k个数形成的循环概率是：

$$
\begin{align}
\text{总排列} & \quad n! \\

\text{有k循环的排列数} & \quad \underset{在n个数里选k个数}{\underline{C_{k}^{n}}} \underset{k个数的排列}{\underline{(k-1)!}} \underset{剩余数的排列}{\underline{(k-n)!}} = \frac{n!}{k} \\

\text{所以概率为: } & \frac{1}{k} \\

\text{有大于等于k的循环概率为} & \sum^{n}_{k} \frac{1}{i} \\

\text{当n趋于无穷时:} \int^{n}_{k} \frac{1}{x}dx & = \ln \frac{n}{k} \\

\end{align}
$$

所以囚犯存活的概率大于(1-$\ln 2$) $\approx$ 31%