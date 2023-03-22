import{_ as n,W as s,X as e,a1 as i}from"./framework-f9ba3f0e.js";const a="/assets/001-490c6958.png",l={},c=i('<figure><img src="'+a+`" alt="docker常用命令" tabindex="0" loading="lazy"><figcaption>docker常用命令</figcaption></figure><h2 id="帮助启动类命令" tabindex="-1"><a class="header-anchor" href="#帮助启动类命令" aria-hidden="true">#</a> 帮助启动类命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动docker： </span>
systemctl start <span class="token function">docker</span>

<span class="token comment"># 停止docker： </span>
systemctl stop <span class="token function">docker</span>

<span class="token comment"># 重启docker： </span>
systemctl restart <span class="token function">docker</span>

<span class="token comment"># 查看docker状态： </span>
systemctl status <span class="token function">docker</span>

<span class="token comment"># 开机启动： </span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>

<span class="token comment"># 查看docker概要信息： </span>
<span class="token function">docker</span> info

<span class="token comment"># 查看docker总体帮助文档： </span>
<span class="token function">docker</span> <span class="token parameter variable">--help</span>

<span class="token comment"># 查看docker命令帮助文档： </span>
<span class="token function">docker</span> 具体命令 <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="镜像命令" tabindex="-1"><a class="header-anchor" href="#镜像命令" aria-hidden="true">#</a> 镜像命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出本地主机上的镜像</span>
<span class="token function">docker</span> images


<span class="token comment"># 各个列表项说明: </span>
<span class="token comment"># REPOSITORY：表示镜像的仓库源</span>
<span class="token comment"># TAG：镜像的标签版本号 </span>
<span class="token comment"># IMAGE ID：镜像ID </span>
<span class="token comment"># CREATED：镜像创建时间 </span>
<span class="token comment"># SIZE：镜像大小 </span>
<span class="token comment">#  同一仓库源可以有多个 TAG版本，代表这个仓库源的不同个版本，我们使用 REPOSITORY:TAG 来定义不同的镜像。 </span>
<span class="token comment"># 如果你不指定一个镜像的版本标签，例如你只使用 ubuntu，docker 将默认使用 ubuntu:latest 镜像 </span>
  
<span class="token comment"># OPTIONS说明：</span>
<span class="token comment"># -a :列出本地所有的镜像（含历史映像层）</span>
<span class="token comment"># -q :只显示镜像ID。</span>

<span class="token comment"># 搜索镜像</span>
<span class="token function">docker</span> search 某个XXX镜像名字

<span class="token function">docker</span> search <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> 镜像名字

<span class="token comment"># OPTIONS说明：</span>
<span class="token comment"># --limit : 只列出N个镜像，默认25个</span>

<span class="token function">docker</span> search <span class="token parameter variable">--limit</span> <span class="token number">5</span> redis

<span class="token comment"># 下载镜像</span>
<span class="token function">docker</span> pull 某个XXX镜像名字

<span class="token function">docker</span> pull 镜像名字<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span>

<span class="token comment"># 没有TAG就是最新版，等价于</span>
<span class="token function">docker</span> pull 镜像名字:latest

<span class="token comment"># 查看镜像/容器/数据卷所占的空间</span>
<span class="token function">docker</span> system <span class="token function">df</span>

<span class="token function">docker</span> rmi 某个XXX镜像名字ID

<span class="token comment"># 删除镜像</span>

<span class="token comment"># 删除单个</span>
<span class="token function">docker</span> rmi  <span class="token parameter variable">-f</span> 镜像ID

<span class="token comment"># 删除多个</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> 镜像名1:TAG 镜像名2:TAG 

<span class="token comment"># 删除全部</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-qa</span><span class="token variable">)</span></span>

<span class="token comment"># 谈谈docker虚悬镜像是什么？</span>
<span class="token comment"># 仓库名、标签都是&lt;none&gt;的镜像，俗称虚悬镜像dangling image</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="容器命令" tabindex="-1"><a class="header-anchor" href="#容器命令" aria-hidden="true">#</a> 容器命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>有镜像才能创建容器，
这是根本前提<span class="token punctuation">(</span>下载一个CentOS或者ubuntu镜像演示<span class="token punctuation">)</span>

说明

 
￼ 


<span class="token function">docker</span> pull centos

<span class="token function">docker</span> pull ubuntu


￼ 


本次演示用ubuntu演示

新建+启动容器

<span class="token function">docker</span> run <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span> <span class="token punctuation">[</span>ARG<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

 OPTIONS说明

 OPTIONS说明（常用）：有些是一个减号，有些是两个减号 
  
<span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;容器新名字&quot;</span>       为容器指定一个名称； 
-d: 后台运行容器并返回容器ID，也即启动守护式容器<span class="token punctuation">(</span>后台运行<span class="token punctuation">)</span>； 
 
-i：以交互模式运行容器，通常与 <span class="token parameter variable">-t</span> 同时使用； 
-t：为容器重新分配一个伪输入终端，通常与 <span class="token parameter variable">-i</span> 同时使用； 
也即 启动交互式容器<span class="token punctuation">(</span>前台有伪终端，等待交互<span class="token punctuation">)</span> ； 
 
-P:  随机 端口映射，大写P 
-p:  指定 端口映射，小写p 
￼ 


启动交互式容器<span class="token punctuation">(</span>前台命令行<span class="token punctuation">)</span>

￼ 
<span class="token comment">#使用镜像centos:latest以 交互模式 启动一个容器,在容器内执行/bin/bash命令。 </span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> centos /bin/bash  
 
参数说明：
-i: 交互式操作。 
-t: 终端。 
centos <span class="token builtin class-name">:</span> centos 镜像。 
/bin/bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。 
要退出终端，直接输入 exit: 
 


列出当前所有正在运行的容器

<span class="token function">docker</span> <span class="token function">ps</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>

 OPTIONS说明

OPTIONS说明（常用）： 
  
<span class="token parameter variable">-a</span> <span class="token builtin class-name">:</span> 列出当前所有 正在运行 的容器 + 历史上运行过 的 
<span class="token parameter variable">-l</span> :显示最近创建的容器。 
-n：显示最近n个创建的容器。 
<span class="token parameter variable">-q</span> :静默模式，只显示容器编号。 


退出容器

两种退出方式

<span class="token builtin class-name">exit</span>

run进去容器，exit退出，容器停止

ctrl+p+q

run进去容器，ctrl+p+q退出，容器不停止

启动已停止运行的容器

<span class="token function">docker</span> start 容器ID或者容器名

重启容器

<span class="token function">docker</span> restart 容器ID或者容器名

停止容器

<span class="token function">docker</span> stop 容器ID或者容器名

强制停止容器

<span class="token function">docker</span> <span class="token function">kill</span> 容器ID或容器名

删除已停止的容器

<span class="token function">docker</span> <span class="token function">rm</span> 容器ID

一次性删除多个容器实例

<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span>

<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">docker</span> <span class="token function">rm</span>

重要

有镜像才能创建容器，这是根本前提<span class="token punctuation">(</span>下载一个Redis6.0.8镜像演示<span class="token punctuation">)</span>

启动守护式容器<span class="token punctuation">(</span>后台服务器<span class="token punctuation">)</span>

在大部分的场景下，我们希望 <span class="token function">docker</span> 的服务是在后台运行的，
我们可以过 <span class="token parameter variable">-d</span> 指定容器的后台运行模式。

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> 容器名

 
<span class="token comment">#使用镜像centos:latest以后台模式启动一个容器 </span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> centos 
  
问题：然后docker <span class="token function">ps</span> <span class="token parameter variable">-a</span> 进行查看,  会发现容器已经退出 
很重要的要说明的一点:  Docker容器后台运行,就必须有一个前台进程. 
容器运行的命令如果不是那些 一直挂起的命令 （比如运行top，tail），就是会自动退出的。 
  
这个是docker的机制问题,比如你的web容器,我们以nginx为例，正常情况下, 
我们配置启动服务只需要启动响应的service即可。例如service nginx start 
但是,这样做,nginx为后台进程模式运行,就导致docker前台没有运行的应用, 
这样的容器后台启动后,会立即自杀因为他觉得他没事可做了. 
所以，最佳的解决方案是, 将你要运行的程序以前台进程的形式运行， 
常见就是命令行模式，表示我还有交互操作，别中断，O<span class="token punctuation">(</span>∩_∩<span class="token punctuation">)</span>O哈哈~ 


redis 前后台启动演示case

前台交互式启动

 <span class="token function">docker</span> run <span class="token parameter variable">-it</span> redis:6.0.8

后台守护式启动

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> redis:6.0.8

查看容器日志

<span class="token function">docker</span> logs 容器ID

查看容器内运行的进程

<span class="token function">docker</span> <span class="token function">top</span> 容器ID

查看容器内部细节

<span class="token function">docker</span> inspect 容器ID

进入正在运行的容器并以命令行交互

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器ID bashShell

￼ 
￼ 


重新进入docker attach 容器ID

案例演示，用centos或者unbuntu都可以

上述两个区别

attach 直接进入容器启动命令的终端，不会启动新的进程
用exit退出，会导致容器的停止。

 
￼ 


<span class="token builtin class-name">exec</span> 是在容器中打开新的终端，并且可以启动新的进程
用exit退出，不会导致容器的停止。


￼ 


推荐大家使用 <span class="token function">docker</span> <span class="token builtin class-name">exec</span> 命令，因为退出容器终端，不会导致容器的停止。

用之前的redis容器实例进入试试

进入redis服务

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器ID /bin/bash

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器ID redis-cli

一般用-d后台启动的程序，再用exec进入对应容器实例

从容器内拷贝文件到主机上

容器→主机

<span class="token function">docker</span> <span class="token function">cp</span>  容器ID:容器内路径 目的主机路径

 
￼ 

公式： <span class="token function">docker</span> <span class="token function">cp</span>   容器 ID: 容器内路径   目的主机路径 
 


导入和导出容器

<span class="token builtin class-name">export</span> 导出容器的内容留作为一个tar归档文件<span class="token punctuation">[</span>对应import命令<span class="token punctuation">]</span>

<span class="token function">import</span> 从tar包中的内容创建一个新的文件系统再导入为镜像<span class="token punctuation">[</span>对应export<span class="token punctuation">]</span>

案例

<span class="token function">docker</span> <span class="token builtin class-name">export</span> 容器ID <span class="token operator">&gt;</span> 文件名.tar


￼ 


<span class="token function">cat</span> 文件名.tar <span class="token operator">|</span> <span class="token function">docker</span> <span class="token function">import</span> - 镜像用户/镜像名:镜像版本号


￼ 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当前 shell 下 attach 连接指定运行镜像</span>
attach
<span class="token comment"># 通过 Dockerfile 定制镜像 </span>
build
<span class="token comment"># 提交当前容器为新的镜像 </span>
commit
<span class="token comment"># 从容器中拷贝指定文件或者目录到宿主机中</span>
<span class="token function">cp</span>
<span class="token comment"># 创建一个新的容器，同 run，但不启动容器 </span>
create
<span class="token comment"># 查看 docker 容器变化           </span>
<span class="token function">diff</span>
<span class="token comment"># 从 docker 服务获取容器实时事件</span>
events
<span class="token comment"># 在已存在的容器上运行命令</span>
<span class="token builtin class-name">exec</span>
<span class="token comment"># 导出容器的内容流作为一个 tar 归档文件[对应 import ]</span>
<span class="token builtin class-name">export</span>
<span class="token comment"># 展示一个镜像形成历史</span>
<span class="token function">history</span>
<span class="token comment"># 列出系统当前镜像</span>
images
<span class="token comment"># 从tar包中的内容创建一个新的文件系统映像[对应export]</span>
<span class="token function">import</span>
<span class="token comment"># 显示系统相关信息</span>
info
<span class="token comment"># 查看容器详细信息</span>
inspect
<span class="token comment"># kill 指定 docker 容器</span>
<span class="token function">kill</span>
<span class="token comment"># 从一个 tar 包中加载一个镜像[对应 save]</span>
load
<span class="token comment"># 注册或者登陆一个 docker 源服务器</span>
login
<span class="token comment"># 从当前 Docker registry 退出</span>
<span class="token builtin class-name">logout</span>
<span class="token comment"># 输出当前容器日志信息</span>
logs
<span class="token comment"># 查看映射端口对应的容器内部源端口</span>
port
<span class="token comment"># 暂停容器</span>
pause
<span class="token comment"># 列出容器列表</span>
<span class="token function">ps</span>
<span class="token comment"># 从docker镜像源服务器拉取指定镜像或者库镜像</span>
pull
<span class="token comment"># 推送指定镜像或者库镜像至docker源服务器</span>
push
<span class="token comment"># 重启运行的容器</span>
restart
<span class="token comment"># 移除一个或者多个容器</span>
<span class="token function">rm</span>
<span class="token comment"># 移除一个或多个镜像[无容器使用该镜像才可删除，否则需删除相关容器才可继续或 -f 强制删除]</span>
rmi
<span class="token comment"># 创建一个新的容器并运行一个命令</span>
run
<span class="token comment"># 保存一个镜像为一个 tar 包[对应 load]</span>
save
<span class="token comment"># 在 docker hub 中搜索镜像</span>
search
<span class="token comment"># 启动容器</span>
start
<span class="token comment"># 停止容器</span>
stop
<span class="token comment"># 给源中镜像打标签</span>
tag
<span class="token comment"># 查看容器中运行的进程信息</span>
<span class="token function">top</span>
<span class="token comment"># 取消暂停容器</span>
unpause
<span class="token comment"># 查看 docker 版本号</span>
version
<span class="token comment"># 截取容器停止时的退出状态值</span>
<span class="token function">wait</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d=[c];function v(r,t){return s(),e("div",null,d)}const u=n(l,[["render",v],["__file","commomCmds.html.vue"]]);export{u as default};
