import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as e}from"./app-DzQ4eOgD.js";const i="/assets/001-B9nHpBhJ.png",c={},l=e('<figure><img src="'+i+`" alt="docker常用命令" tabindex="0" loading="lazy"><figcaption>docker常用命令</figcaption></figure><h2 id="帮助启动类命令" tabindex="-1"><a class="header-anchor" href="#帮助启动类命令"><span>帮助启动类命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 启动docker： </span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="镜像命令" tabindex="-1"><a class="header-anchor" href="#镜像命令"><span>镜像命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 列出本地主机上的镜像</span>
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


<span class="token comment"># 删除镜像</span>
<span class="token function">docker</span> rmi 某个XXX镜像名字ID

<span class="token comment"># 删除单个</span>
<span class="token function">docker</span> rmi  <span class="token parameter variable">-f</span> 镜像ID

<span class="token comment"># 删除多个</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> 镜像名1:TAG 镜像名2:TAG 

<span class="token comment"># 删除全部(谨慎使用！)</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-qa</span><span class="token variable">)</span></span>

<span class="token comment"># docker虚悬镜像？</span>
<span class="token comment"># 仓库名、标签都是&lt;none&gt;的镜像，俗称虚悬镜像dangling image</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="容器命令" tabindex="-1"><a class="header-anchor" href="#容器命令"><span>容器命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 有镜像才能创建容器，这是根本前提(下载一个ubuntu镜像演示)</span>
<span class="token function">docker</span> pull ubuntu

<span class="token comment"># 新建+启动容器</span>
<span class="token function">docker</span> run <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span> <span class="token punctuation">[</span>ARG<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token comment"># OPTIONS说明（常用）：有些是一个减号，有些是两个减号 </span>
<span class="token comment"># --name=&quot;容器新名字&quot;       为容器指定一个名称； </span>
<span class="token comment"># -d: 后台运行容器并返回容器ID，也即启动守护式容器(后台运行)； </span>
<span class="token comment"># -i：以交互模式运行容器，通常与 -t 同时使用； </span>
<span class="token comment"># -t：为容器重新分配一个伪输入终端，通常与 -i 同时使用； </span>
<span class="token comment"># 也即 启动交互式容器(前台有伪终端，等待交互) ； </span>
<span class="token comment"># -P:  随机 端口映射，大写P </span>
<span class="token comment"># -p:  指定 端口映射，小写p </span>


<span class="token comment"># 启动交互式容器(前台命令行)</span>

<span class="token comment"># 使用镜像ubuntu:latest以交互模式启动一个容器,在容器内执行/bin/bash命令。 </span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> ubuntu /bin/bash  
 
<span class="token comment"># 参数说明：</span>
<span class="token comment"># -i: 交互式操作。 </span>
<span class="token comment"># -t: 终端。 </span>
<span class="token comment"># ubuntu : ubuntu 镜像。 </span>
<span class="token comment"># /bin/bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。 </span>
<span class="token comment"># 要退出终端，直接输入 exit: </span>
 


<span class="token comment"># 列出当前所有正在运行的容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>

<span class="token comment"># OPTIONS说明（常用）： </span>
<span class="token comment"># -a: 列出当前所有 正在运行 的容器 + 历史上运行过 的 </span>
<span class="token comment"># -l: 显示最近创建的容器。 </span>
<span class="token comment"># -n：显示最近n个创建的容器。 </span>
<span class="token comment"># -q: 静默模式，只显示容器编号。 </span>


<span class="token comment"># 退出容器</span>

<span class="token comment"># 两种退出方式</span>
<span class="token comment"># 1.exit run进去容器，exit退出，容器停止</span>
<span class="token comment"># 2.ctrl+p+q run进去容器，ctrl+p+q退出，容器不停止</span>

<span class="token comment"># 启动已停止运行的容器</span>
<span class="token function">docker</span> start 容器ID或者容器名

<span class="token comment"># 重启容器</span>
<span class="token function">docker</span> restart 容器ID或者容器名

<span class="token comment"># 停止容器</span>
<span class="token function">docker</span> stop 容器ID或者容器名

<span class="token comment"># 强制停止容器</span>
<span class="token function">docker</span> <span class="token function">kill</span> 容器ID或容器名

<span class="token comment"># 删除已停止的容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> 容器ID

<span class="token comment"># 一次性删除多个容器实例</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">docker</span> <span class="token function">rm</span>


<span class="token comment"># 重要!!有镜像才能创建容器，这是根本前提(下载一个Redis6.0.8镜像演示)</span>

<span class="token comment"># 启动守护式容器(后台服务器)</span>
<span class="token comment"># 在大部分的场景下，我们希望 docker 的服务是在后台运行的，</span>
<span class="token comment"># 我们可以过 -d 指定容器的后台运行模式。</span>

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> 容器名

<span class="token comment"># 使用镜像ubuntu:latest以后台模式启动一个容器 </span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> ubuntu 
  
<span class="token comment"># 问题：然后docker ps -a 进行查看,  会发现容器已经退出</span>
<span class="token comment"># 很重要的要说明的一点:  Docker容器后台运行,就必须有一个前台进程.</span>
<span class="token comment"># 容器运行的命令如果不是那些 一直挂起的命令 （比如运行top，tail），就是会自动退出的。</span>

<span class="token comment"># 这个是docker的机制问题,比如你的web容器,我们以nginx为例，正常情况下,</span>
<span class="token comment"># 我们配置启动服务只需要启动响应的service即可。例如service nginx start</span>
<span class="token comment"># 但是,这样做,nginx为后台进程模式运行,就导致docker前台没有运行的应用,</span>
<span class="token comment"># 这样的容器后台启动后,会立即自杀因为他觉得他没事可做了.</span>
<span class="token comment"># 所以，最佳的解决方案是, 将你要运行的程序以前台进程的形式运行，</span>
<span class="token comment"># 常见就是命令行模式，表示我还有交互操作，别中断，O(∩_∩)O哈哈~</span>


<span class="token comment"># redis 前后台启动演示case</span>

<span class="token comment"># 前台交互式启动</span>
 <span class="token function">docker</span> run <span class="token parameter variable">-it</span> redis:6.0.8

<span class="token comment"># 后台守护式启动</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> redis:6.0.8

<span class="token comment"># 查看容器日志</span>
<span class="token function">docker</span> logs 容器ID

<span class="token comment"># 查看容器内运行的进程</span>
<span class="token function">docker</span> <span class="token function">top</span> 容器ID

<span class="token comment"># 查看容器内部细节</span>
<span class="token function">docker</span> inspect 容器ID

<span class="token comment"># 重新进入正在运行的容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器ID bashShell
<span class="token function">docker</span> attach 容器ID
<span class="token comment"># 上述两个区别</span>
<span class="token comment"># 1.attach 直接进入容器启动命令的终端，不会启动新的进程。用exit退出，会导致容器的停止。</span>
<span class="token comment"># 2.exec 是在容器中打开新的终端，并且可以启动新的进程。用exit退出，不会导致容器的停止。</span>


<span class="token comment"># 推荐使用 docker exec 命令，因为退出容器终端，不会导致容器的停止。</span>
<span class="token comment"># 一般用-d后台启动的程序，再用exec进入对应容器实例</span>


<span class="token comment"># 从容器内拷贝文件到主机上  容器→主机</span>
<span class="token function">docker</span> <span class="token function">cp</span>  容器ID:容器内路径 目的主机路径


<span class="token comment"># 导入和导出容器</span>
<span class="token comment"># export 导出容器的内容留作为一个tar归档文件[对应import命令]</span>
<span class="token comment"># import 从tar包中的内容创建一个新的文件系统再导入为镜像[对应export]</span>

<span class="token function">docker</span> <span class="token builtin class-name">export</span> 容器ID <span class="token operator">&gt;</span> 文件名.tar
<span class="token function">cat</span> 文件名.tar <span class="token operator">|</span> <span class="token function">docker</span> <span class="token function">import</span> - 镜像用户/镜像名:镜像版本号

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[l];function o(d,p){return a(),s("div",null,t)}const v=n(c,[["render",o],["__file","commomCmds.html.vue"]]),u=JSON.parse('{"path":"/docker/commomCmds.html","title":"","lang":"zh-CN","frontmatter":{"article":false,"description":"docker常用命令docker常用命令 帮助启动类命令 镜像命令 容器命令","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/docker/commomCmds.html"}],["meta",{"property":"og:site_name","content":"Kamishima-kaede"}],["meta",{"property":"og:description","content":"docker常用命令docker常用命令 帮助启动类命令 镜像命令 容器命令"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-26T07:19:57.000Z"}],["meta",{"property":"article:author","content":"kamishima-kaede"}],["meta",{"property":"article:modified_time","content":"2023-03-26T07:19:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"\\",\\"description\\":\\"docker常用命令docker常用命令 帮助启动类命令 镜像命令 容器命令\\"}"]]},"headers":[{"level":2,"title":"帮助启动类命令","slug":"帮助启动类命令","link":"#帮助启动类命令","children":[]},{"level":2,"title":"镜像命令","slug":"镜像命令","link":"#镜像命令","children":[]},{"level":2,"title":"容器命令","slug":"容器命令","link":"#容器命令","children":[]}],"git":{"createdTime":1679305911000,"updatedTime":1679815197000,"contributors":[{"name":"shiki ryougi","email":"shikiryougi@shikideMacBook.local","commits":5}]},"readingTime":{"minutes":5.33,"words":1600},"filePathRelative":"docker/commomCmds.md","localizedDate":"2023年3月20日","excerpt":"<figure><figcaption>docker常用命令</figcaption></figure>\\n<h2>帮助启动类命令</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 启动docker： </span>\\nsystemctl start <span class=\\"token function\\">docker</span>\\n\\n<span class=\\"token comment\\"># 停止docker： </span>\\nsystemctl stop <span class=\\"token function\\">docker</span>\\n\\n<span class=\\"token comment\\"># 重启docker： </span>\\nsystemctl restart <span class=\\"token function\\">docker</span>\\n\\n<span class=\\"token comment\\"># 查看docker状态： </span>\\nsystemctl status <span class=\\"token function\\">docker</span>\\n\\n<span class=\\"token comment\\"># 开机启动： </span>\\nsystemctl <span class=\\"token builtin class-name\\">enable</span> <span class=\\"token function\\">docker</span>\\n\\n<span class=\\"token comment\\"># 查看docker概要信息： </span>\\n<span class=\\"token function\\">docker</span> info\\n\\n<span class=\\"token comment\\"># 查看docker总体帮助文档： </span>\\n<span class=\\"token function\\">docker</span> <span class=\\"token parameter variable\\">--help</span>\\n\\n<span class=\\"token comment\\"># 查看docker命令帮助文档： </span>\\n<span class=\\"token function\\">docker</span> 具体命令 <span class=\\"token parameter variable\\">--help</span>\\n</code></pre></div>","autoDesc":true}');export{v as comp,u as data};
