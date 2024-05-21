---
article: false
---

# 应用和包管理

```bash
# 列出系统已安装应用
apt list --installed

# 使用分页器
apt list --installed | less -N
# 输入 /apt 并按回车键，然后按 n 键，就会将每一个匹配到的 apt 字符串放到分页器第一行
# / 后可以加正则表达式

# 过滤命令 grep
apt list --installed | grep '^apt' > apt_related_pkgs
```

缓存策略：减轻软件源服务器检索压力提升用户体验，在本地保存一份软件源中的信息副本。

```bash
# 安全软件前同步本地副本，防止本地缓存与服务器信息不一致导致安装软件失败
apt update

# 使用 search 命令搜索名字包含 Git 的应用
# 包名开头和结尾之间只有 git， 实现严格匹配
apt search '^git$'

# 免交互参数 -y
sudo apt install -y git

# 升级缓存
sudo apt update
# 列出可以升级的包
sudo apt list --upgradable
# 完成升级
sudo apt upgrade

# 移除可移除包
sudo apt autoremove

# 卸载应用
sudo apt remove git
```

### 使用`dpkg`管理应用

1.安装

手动安装`deb`包的一个常见原因:发行版要维护大量包，这些包都是独立开发的，彼此之间不会互相协调进度，保证兼容。所以避免发行版出现内部版本冲突的重任就落到了发行版维护者身上，而发行版维护者资源有限，不可能随时跟进每个包的新版本，验证它与其他包之间的兼容性。这时包开发者就会将最新版本发布到自己的网站上，供用户下载和安装，而不必等待发行版更新。

```bash
# 使用命令行工具 wget 下载 deb 文件
wget https://github.com/jarun/googler/releases/download/v4.3.1/googler_4.3.1-1_ubuntu20.04.amd64.deb

# 查看一下这个安装包的元数据   -I 是 --info简写
dpkg -I googler_4.3.1-1_ubuntu20.04.amd64.deb

# 查看这个安装包会在系统中添加哪些文件   -c 是 --contents 的简写
dpkg -c googler_4.3.1-1_ubuntu20.04.amd64.deb

# 安装  -i 是 --install 的简写
sudo dpkg -i googler_4.3.1-1_ubuntu20.04.amd64.deb

# 运行安装好的应用并检验文件是否存在  -L 是 --listfiles 的简写
googler -v
dpkg -L googler
```

虽然在实际安装过程中只有`dpkg -i`命令是必需的，其他都可以忽略，但安装前后查看一下安装文件的内容是提高安全性的好习惯。

`dpkg`也提供了列出系统中已安装应用的功能

```bash
# -l 是 --list 的简写
dpkg -l | head

# 列出某个具体应用的信息
dpkg -l googler
```

2.查询

```bash
# -S 是 --search 的简写
dpkg -S /usr/bin/googler
which ls
dpkg -S /bin/ls
dpkg -S $(which ls)
```

3.卸载

```bash
# 卸载完成后查询
sudo dpkg -r googler
dpkg -l googler
```

`gdebi`工具：自动解析要安装的`deb`包的依赖，以及依赖的依赖，然后自动完成下载和安装。

所以下次安装`deb`包的时候，用`sudo gdebi googler_4.3.1-1_ubuntu20.04. amd64.deb`代替`sudo dpkg -i googler_4.3.1-1_ubuntu20.04.amd64.deb`即可。

4.安全

关于`dpkg`工具的最后一个话题与它的安全性有关。前面说过在安装之前可以通过`-I`、`-c`等参数检查包的元数据和内容，但这些方法不能发现可执行文件内部隐藏的恶意代码。所以为了保证系统安全，要养成只在官网下载`deb`包的习惯。对于从第三方得到的包，除非来源完全可靠，否则尽量不要安装。

## 跨平台包管理器






























