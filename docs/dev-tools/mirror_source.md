---
title: 镜像源收集
icon: link
category: 开发必备
tag:
  - node
  - pnpm
  - linux
isOriginal: true
timeline: true
date: 2021-07-28
---

本人常用的镜像站点:  
- [中科大镜像源](https://mirrors.ustc.edu.cn/)  
- [阿里巴巴开源镜像站](https://developer.aliyun.com/mirror/)  
- [华为开源镜像站](https://mirrors.huaweicloud.com/)  

## 常用开发工具镜像设置

### `pnpm`

官网:[中文](https://www.pnpm.cn/)|[英文](https://pnpm.io/)

`pnpm`不仅能作为`JavaScript`的包管理工具,而且可以作为`nodejs`的版本管理工具


在 POSIX 类系统上，即使尚未安装 Node.js，也可以使用以下脚本安装 pnpm：

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

如果没有安装 curl，可以使用 wget：

```bash
wget -qO- https://get.pnpm.io/install.sh | sh -
```

在 Windows 系统上（PowerShell）：

```bash
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

然后就可以使用`pnpm env`命令来安装`Node.js`了。
```bash
# 安装 LTS 版本的 Node.js
pnpm env use --global lts
pnpm env use --global argon

# 安装 v16 的Node.js
pnpm env use --global 16

# 安装 Node.js 的预发行版本
pnpm env use --global nightly
pnpm env use --global rc
pnpm env use --global 16.0.0-rc.0
pnpm env use --global rc/14

# 安装最新版本的 Node.js
pnpm env use --global latest

# 查看本地Node.js列表
pnpm env list

# 查看远程可用Node.js列表
pnpm env list --remote

# 查看远程可用指定Node.js版本
pnpm env list --remote 16

# 移除指定版本的 Node.js
pnpm env remove --global 14.0.0
```

设置npm包镜像地址：
```bash
pnpm config set registry https://registry.npmmirror.com/
```


### `nvm`(不推荐)

nodejs版本管理工具

> for windows: [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)
> for mac/linux: [nvm-sh/nvm](https://github.com/nvm-sh/nvm)

设置镜像

```bash
nvm node_mirror https://npmmirror.com/mirrors/node/
nvm npm_mirror  https://npmmirror.com/mirrors/npm/
```

### `npm`(不推荐)

`node`包管理工具

1.查看当前源地址

```bash
npm config get registry
```

2.设置淘宝镜像【不建议，影响其他指令】

```bash
npm config set registry https://registry.npmmirror.com/
```

3.NPM镜像的管理工具
安装：
```bash
npm install -g nrm
# 或者
pnpm add -g nrm
```

```bash
# 查看所有镜像
nrm ls

  npm ---------- https://registry.npmjs.org/
* yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.nlark.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/

# 使用淘宝镜像
nrm use taobao
```

4.中国`NPM`镜像

[中国NPM镜像](http://www.npmmirror.com/)

### `yarn`(不推荐)

`node`包管理工具

1.查看当前源地址

```bash
yarn config get registry
```

2.设置淘宝镜像【不建议，影响其他指令】

```bash
yarn config set registry https://registry.npmmirror.com/
```

3.YARN镜像的管理工具
安装：`yarn global add yrm`

```bash
# 查看所有镜像
yrm ls

  npm ---------- https://registry.npmjs.org/
* yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.nlark.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/

# 使用淘宝镜像
yrm use taobao

```

### `electron`镜像设置

```bash
pnpm config set electron_mirror https://npmmirror.com/mirrors/electron/
```

### `Ubuntu`镜像

手动更改  
用你熟悉的编辑器打开：`/etc/apt/sources.list`

替换默认的连接

`Ubuntu`各个版本国内镜像源请在头部连接中查找
