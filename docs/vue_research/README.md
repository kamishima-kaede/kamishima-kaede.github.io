---
title: vue 设计与实现
icon: vue
category: 前端
tag:
  - vue
  - 源码
isOriginal: true
date: 2024-06-20
---

《vue 设计与实现》阅读整理

<!-- more -->

## 相关概念

- 虚拟DOM 用来描述真实DOM的js对象
- 渲染器 将虚拟DOM转化为真实DOM
- 组件 就是一组DOM元素的封装，本质就是虚拟DOM
- 模版 template
- 编译器 将模版编译为渲染函数
  - 渲染器与编译器之间的交流 => 虚拟DOM
  - 编译器编译的时候可以寻找变更点，patchFlag

