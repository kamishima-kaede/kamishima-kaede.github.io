---
title: OpenMediaVault安装使用指南
icon: link
category: service
tag:
  - debian
  - linux
  - nas
  - homeserver
isOriginal: true
timeline: true
date: 2023-05-22
article: false
---

记一次`OpenMediaVault`(`OMV`)系统安装使用。

<!-- more -->

[下载镜像](https://www.openmediavault.org/download.html)，选择最新镜像，默认稳定版版本为6.x

全程选择英文安装，安装完成后再添加中文，不然系统会出现乱码。

安装`omv-extras`

```bash
wget -O - https://github.com/OpenMediaVault-Plugin-Developers/packages/raw/master/install | bash
```

[更换国内源](https://mirrors.tuna.tsinghua.edu.cn/help/openmediavault/)


## 参考

- [1] [记一次OMV6系统安装](https://momiji.fun/openmediavault-install/)