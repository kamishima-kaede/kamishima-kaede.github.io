# 镜像源

收集整理各种开发中用到的镜像源

[阿里巴巴开源镜像站](https://developer.aliyun.com/mirror/)

## 1.前端

### `nvm`

nodejs版本管理工具

> for windows: [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)
> for mac/linux: [nvm-sh/nvm](https://github.com/nvm-sh/nvm)

设置镜像

```text
nvm node_mirror https://npmmirror.com/mirrors/node/
nvm npm_mirror  https://npmmirror.com/mirrors/npm/
```

### `npm`

`node`包管理工具

1.查看当前源地址

```text
npm config get registry
```

2.设置淘宝镜像【不建议，影响其他指令】

```text
npm config set registry https://registry.npmmirror.com/
```

3.NPM镜像的管理工具
安装：`npm install -g nrm`

```text
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

```text
yarn config get registry
```

2.设置淘宝镜像【不建议，影响其他指令】

```text
yarn config set registry https://registry.npmmirror.com/
```

3.YARN镜像的管理工具
安装：`yarn global add yrm`

```text
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

```text
yarn config set electron_mirror https://npmmirror.com/mirrors/electron/
```

## 2.linux

### `Ubuntu`镜像

手动更改
用你熟悉的编辑器打开：`/etc/apt/sources.list`

替换默认的`http://archive.ubuntu.com/`为`mirrors.aliyun.com`

ubuntu 20.04(focal) 配置如下

```text
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
