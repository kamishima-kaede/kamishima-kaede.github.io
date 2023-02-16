---
title: 前端自动化部署
icon: linux
category: 运维
tag:
  - node
  - nginx
  - ubuntu
isOriginal: true
date: 2022-03-10
---

使用`ubuntu`+`nodejs`+`nginx`搭建静态网站

利用`git`+`webhook`+`pm2`实现自动更新代码并部署

使用`Let's Encrypt`实现免费启用`SSL`证书

<!-- more -->

- [`windows`启动`ssh-agent`](./environment_windows.html#windows启动ssh-agent)
  - [将私钥添加到`ssh-agent`](./environment_windows.html#将私钥添加到ssh-agent)
  - [`ssh`代理设置](./environment_windows.html#ssh代理设置)
  - [参考](./environment_windows.html#参考)
- [环境服务配置](./environment_server.html#环境服务配置)
  - [`git`](./environment_server.html#git)
    - [安装](./environment_server.html#安装)
    - [配置](./environment_server.html#配置)
    - [生成ssh密钥](./environment_server.html#生成ssh密钥)
    - [测试连接](./environment_server.html#测试连接)
  - [`Node`](./environment_server.html#node)
  - [`Nginx`](./environment_server.html#nginx)
    - [安装](./environment_server.html#安装-1)
    - [添加虚拟机配置](./environment_server.html#添加虚拟机配置)
    - [`nginx`反向代理配置](./environment_server.html#nginx反向代理配置)
    - [关闭`nginx`版本号露出](./environment_server.html#关闭nginx版本号露出)
  - [免费`SSL`证书启用](./environment_server.html#免费ssl证书启用)
    - [安装](./environment_server.html#安装-2)
  - [`UFW`防火墙](./environment_server.html#ufw防火墙)
  - [参考](./environment_server.html#参考)
- [自动化更新部署](./pm2&bash.html#自动化更新部署)
  - [自动更新代码](./pm2&bash.html#自动更新代码)
  - [打包部署](./pm2&bash.html#打包部署)
  - [持久化服务](./pm2&bash.html#持久化服务)
  - [github actions](./giuhub_actions.html)