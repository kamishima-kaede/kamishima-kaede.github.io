"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[3869],{975:(e,o,n)=>{n.r(o),n.d(o,{comp:()=>r,data:()=>c});var s=n(9034);const a=[(0,s.Fv)('<h2 id="容器数据卷" tabindex="-1"><a class="header-anchor" href="#容器数据卷"><span>容器数据卷</span></a></h2><h3 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么"><span>是什么？</span></a></h3><p>卷就是目录或文件，存在于一个或多个容器中，由<code>Docker</code>挂载到容器，但不属于联合文件系统，因此能够绕过<code>Union File System</code>提供一些用于持续存储或共享数据的特性：<br> 卷的设计目的就是<strong>数据的持久化</strong>， 完全独立于容器的生存周期，因此<code>Docker</code>不会在容器删除时删除其挂载的数据卷</p><p>将docker容器内的数据保存进宿主机的磁盘中</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;"># 运行一个带有容器卷存储功能的容器实例</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#88C0D0;">docker</span><span style="color:#A3BE8C;"> run</span><span style="color:#A3BE8C;"> -it</span><span style="color:#A3BE8C;"> --privileged=true</span><span style="color:#A3BE8C;"> -v</span><span style="color:#A3BE8C;"> /宿主机绝对路径目录:/容器内目录</span><span style="color:#A3BE8C;"> 镜像名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>Docker</code>挂载主机目录访问，如果出现<code>cannot open directory .: Permission denied</code><br> 解决办法：在挂载目录后多加一个<code>--privileged=true</code>参数即可。<br> 使用该参数，<code>container</code>内的<code>root</code>拥有真正的<code>root</code>权限，否则，<code>container</code>内的<code>root</code>只是外部的一个普通用户权限。</p></div><h3 id="能干嘛" tabindex="-1"><a class="header-anchor" href="#能干嘛"><span>能干嘛?</span></a></h3><p>将运用与运行的环境打包镜像，<code>run</code>后形成容器实例运行 ，但是我们对数据的要求希望是<strong>持久化的</strong><br>  <br><code>Docker</code>容器产生的数据，如果不备份，那么当容器实例删除后，容器内的数据自然也就没有了。 为了能保存数据在<code>Docker</code>中我们使用卷。<br>  <br> 特点：</p><ul><li>1：数据卷可在容器之间共享或重用数据</li><li>2：卷中的更改可以直接实时生效，爽</li><li>3：数据卷中的更改不会包含在镜像的更新中</li><li>4：数据卷的生命周期一直持续到没有容器使用它为止</li></ul>',9)],t={},r=(0,n(8538).A)(t,[["render",function(e,o){return(0,s.uX)(),(0,s.CE)("div",null,a)}]]),c=JSON.parse('{"path":"/docker/volume.html","title":"","lang":"zh-CN","frontmatter":{"article":false,"description":"容器数据卷 是什么？ 卷就是目录或文件，存在于一个或多个容器中，由Docker挂载到容器，但不属于联合文件系统，因此能够绕过Union File System提供一些用于持续存储或共享数据的特性： 卷的设计目的就是数据的持久化， 完全独立于容器的生存周期，因此Docker不会在容器删除时删除其挂载的数据卷 将docker容器内的数据保存进宿主机的磁盘中...","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/docker/volume.html"}],["meta",{"property":"og:site_name","content":"hanekawa-shiki"}],["meta",{"property":"og:description","content":"容器数据卷 是什么？ 卷就是目录或文件，存在于一个或多个容器中，由Docker挂载到容器，但不属于联合文件系统，因此能够绕过Union File System提供一些用于持续存储或共享数据的特性： 卷的设计目的就是数据的持久化， 完全独立于容器的生存周期，因此Docker不会在容器删除时删除其挂载的数据卷 将docker容器内的数据保存进宿主机的磁盘中..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-16T15:17:15.000Z"}],["meta",{"property":"article:author","content":"hanekawa-shiki"}],["meta",{"property":"article:modified_time","content":"2023-04-16T15:17:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"\\",\\"description\\":\\"容器数据卷 是什么？ 卷就是目录或文件，存在于一个或多个容器中，由Docker挂载到容器，但不属于联合文件系统，因此能够绕过Union File System提供一些用于持续存储或共享数据的特性： 卷的设计目的就是数据的持久化， 完全独立于容器的生存周期，因此Docker不会在容器删除时删除其挂载的数据卷 将docker容器内的数据保存进宿主机的磁盘中...\\"}"]]},"headers":[{"level":2,"title":"容器数据卷","slug":"容器数据卷","link":"#容器数据卷","children":[{"level":3,"title":"是什么？","slug":"是什么","link":"#是什么","children":[]},{"level":3,"title":"能干嘛?","slug":"能干嘛","link":"#能干嘛","children":[]}]}],"git":{"createdTime":1679815197000,"updatedTime":1681658235000,"contributors":[{"name":"shiki ryougi","email":"shikiryougi@shikideMacBook.local","commits":2}]},"readingTime":{"minutes":1.42,"words":427},"filePathRelative":"docker/volume.md","localizedDate":"2023年3月26日","excerpt":"<h2>容器数据卷</h2>\\n<h3>是什么？</h3>\\n<p>卷就是目录或文件，存在于一个或多个容器中，由<code>Docker</code>挂载到容器，但不属于联合文件系统，因此能够绕过<code>Union File System</code>提供一些用于持续存储或共享数据的特性：<br>\\n卷的设计目的就是<strong>数据的持久化</strong>， 完全独立于容器的生存周期，因此<code>Docker</code>不会在容器删除时删除其挂载的数据卷</p>\\n<p>将docker容器内的数据保存进宿主机的磁盘中</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"background-color:#2e3440ff;color:#d8dee9ff\\"><pre class=\\"shiki nord vp-code\\"><code><span class=\\"line\\"><span style=\\"color:#616E88\\"># 运行一个带有容器卷存储功能的容器实例</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#88C0D0\\">docker</span><span style=\\"color:#A3BE8C\\"> run</span><span style=\\"color:#A3BE8C\\"> -it</span><span style=\\"color:#A3BE8C\\"> --privileged=true</span><span style=\\"color:#A3BE8C\\"> -v</span><span style=\\"color:#A3BE8C\\"> /宿主机绝对路径目录:/容器内目录</span><span style=\\"color:#A3BE8C\\"> 镜像名</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')},8538:(e,o)=>{o.A=(e,o)=>{const n=e.__vccOpts||e;for(const[e,s]of o)n[e]=s;return n}}}]);