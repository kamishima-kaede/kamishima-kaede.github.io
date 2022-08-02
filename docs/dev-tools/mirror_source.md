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
# 镜像源

收集整理各种开发中用到的镜像源1

[阿里巴巴开源镜像站](https://developer.aliyun.com/mirror/)

## 1.前端

### `pnpm`

官网:[中文](https://www.pnpm.cn/)|[英文](https://pnpm.io/)

`pnpm`不仅能作为`JavaScript`的包管理工具,而且可以作为`nodejs`的版本管理工具,这是我推荐它的最主要原因,当然相比于`npm`和`yarn`它还有其他很多优点,可以去官网了解下.


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
pnpm config set registry https://registry.npmmirror.com/
```


### `nvm`

nodejs版本管理工具

> for windows: [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)
> for mac/linux: [nvm-sh/nvm](https://github.com/nvm-sh/nvm)

设置镜像

```bash
nvm node_mirror https://npmmirror.com/mirrors/node/
nvm npm_mirror  https://npmmirror.com/mirrors/npm/
```

### `npm`

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
安装：`npm install -g nrm`

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

### `yarn`

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
yarn config set electron_mirror https://npmmirror.com/mirrors/electron/
```

## 2.linux

### `Ubuntu`镜像

手动更改
用你熟悉的编辑器打开：`/etc/apt/sources.list`

替换默认的`http://archive.ubuntu.com/`为`mirrors.aliyun.com`

ubuntu 20.04(focal) 配置如下

```bash
deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse

```
