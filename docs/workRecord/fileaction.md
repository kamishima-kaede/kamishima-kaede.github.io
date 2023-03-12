---
title: 前端上传下载文件
icon: linux
category: 前端
tag:
  - js
isOriginal: true
date: 2023-03-10
---

在项目中经常会遇到文件的上传下载需求，在这边总结归纳一下常用的方法。

<!-- more -->

## 纯前端下载模版文件

有时我们会遇到偷懒的后端同事，下载简单模板类的需求不愿意写接口，直接甩给前端同事做。对于这种需求也不是很复杂。

```javascript
const getTemplateFile = () => {
  const origin = window.location.origin
  // 假设下载的文件静态路径
  const templateFile = '/template/template.doc'
  const fileUrl = `${origin}${templateFile}`
  const link = document.createElement('a')
  link.style.display = 'none'
  link.setAttribute('href', fileUrl)
  link.download = '下载的文件名' + new Date().getTime()
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
```

## 通过接口下载文件

对于`GET`请求的借口，最常用的是`window.open(url)`


