import{_ as s,W as a,X as d,Z as e,$ as o,Y as c,a1 as n,C as r}from"./framework-f9ba3f0e.js";const i="/assets/002-ab380b8c.png",l={},p=n('<h2 id="docker镜像是什么" tabindex="-1"><a class="header-anchor" href="#docker镜像是什么" aria-hidden="true">#</a> <code>Docker</code>镜像是什么</h2><p>镜像是一种轻量级、可执行的独立软件包，它包含运行某个软件所需的所有内容，我们把应用程序和配置依赖打包好形成一个可交付的运行环境(包括代码、运行时需要的库、环境变量和配置文件等)，这个打包好的运行环境就是image镜像文件。   只有通过这个镜像文件才能生成<code>Docker</code>容器实例(类似Java中new出来一个对象)。</p><h3 id="分层的镜像" tabindex="-1"><a class="header-anchor" href="#分层的镜像" aria-hidden="true">#</a> 分层的镜像</h3><p>以我们的pull为例，在下载的过程中我们可以看到docker的镜像好像是在一层一层的在下载</p><p><code>UnionFS</code>（联合文件系统）：<code>Union</code>文件系统（<code>UnionFS</code>）是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加， 同时可以将不同目录挂载到同一个虚拟文件系统下(unite several directories into a single virtual filesystem)。<code>Union</code>文件系统是<code>Docker</code>镜像的基础。镜像可以通过分层来进行继承 ，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像。</p><p>**特性：**一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录</p><h3 id="docker镜像加载原理" tabindex="-1"><a class="header-anchor" href="#docker镜像加载原理" aria-hidden="true">#</a> <code>Docker</code>镜像加载原理</h3><p><code>Docker</code>的镜像实际上由一层一层的文件系统组成，这种层级的文件系统<code>UnionFS</code>。</p><figure><img src="'+i+'" alt="file system" tabindex="0" loading="lazy"><figcaption>file system</figcaption></figure><p><code>bootfs</code>(boot file system)主要包含<code>bootloader</code>和<code>kernel</code>, <code>bootloader</code>主要是引导加载<code>kernel</code>, <code>Linux</code>刚启动时会加载<code>bootfs</code>文件系统，在<code>Docker</code>镜像的最底层是引导文件系统<code>bootfs</code>。 这一层与我们典型的<code>Linux/Unix</code>系统是一样的，包含<code>boot</code>加载器和内核。当<code>boot</code>加载完成之后整个内核就都在内存中了，此时内存的使用权已由<code>bootfs</code>转交给内核，此时系统也会卸载<code>bootfs</code>。   <code>rootfs</code>(root file system) ，在<code>bootfs</code>之上 。包含的就是典型<code>Linux</code>系统中的<code>/dev</code>, <code>/proc</code>, <code>/bin</code>, <code>/etc</code>等标准目录和文件。<code>rootfs</code>就是各种不同的操作系统发行版，比如<code>Ubuntu</code>，<code>Centos</code>等等。</p><div class="hint-container info"><p class="hint-container-title">平时我们安装进虚拟机的`CentOS`都是好几个G，为什么`Docker`这里才200M？？</p><p>对于一个精简的<code>OS</code>，<code>rootfs</code>可以很小，只需要包括最基本的命令、工具和程序库就可以了，因为底层直接用<code>Host</code>的<code>kernel</code>，自己只需要提供<code>rootfs</code>就行了。由此可见对于不同的<code>linux</code>发行版, <code>bootfs</code>基本是一致的, <code>rootfs</code>会有差别, 因此不同的发行版可以公用<code>bootfs</code>。</p></div><div class="hint-container info"><p class="hint-container-title">为什么`Docker`镜像要采用这种分层结构呢？</p><p>镜像分层最大的一个好处就是共享资源，方便复制迁移，就是为了复用。</p><p>比如说有多个镜像都从相同的<code>base</code>镜像构建而来，那么<code>Docker Host</code>只需在磁盘上保存一份<code>base</code>镜像； 同时内存中也只需加载一份<code>base</code>镜像，就可以为所有容器服务了。而且镜像的每一层都可以被共享。</p></div><div class="hint-container tip"><p class="hint-container-title">重点理解</p><p><code>Docker</code>镜像层都是只读的，容器层是可写的。当容器启动时，一个新的可写层被加载到镜像的顶部。这一层通常被称作<strong>容器层</strong>，<strong>容器层</strong>之下的都叫<strong>镜像层</strong>。</p><p>所有对容器的改动 - 无论添加、删除、还是修改文件都只会发生在容器层中。只有容器层是可写的，容器层下面的所有镜像层都是只读的。</p></div><h3 id="commit操作" tabindex="-1"><a class="header-anchor" href="#commit操作" aria-hidden="true">#</a> <code>commit</code>操作</h3><p><code>docker commit</code>提交容器副本使之成为一个新的镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> commit <span class="token parameter variable">-m</span><span class="token operator">=</span><span class="token string">&quot;提交的描述信息&quot;</span> <span class="token parameter variable">-a</span><span class="token operator">=</span><span class="token string">&quot;作者&quot;</span> 容器ID 要创建的目标镜像名:<span class="token punctuation">[</span>标签名<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="阿里云" tabindex="-1"><a class="header-anchor" href="#阿里云" aria-hidden="true">#</a> 阿里云</h2>',17),u={href:"https://promotion.aliyun.com/ntms/act/kubernetes.html",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"通过阿里云创建容器镜像服务，并将本地镜像送至阿里云，或者从阿里云上下载自己的镜像。",-1),k=e("h2",{id:"私有库",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#私有库","aria-hidden":"true"},"#"),o(" 私有库")],-1),b={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},g=n('<p><code>Docker hub</code>、阿里云这样的公共镜像仓库可能不太方便，涉及机密的公司不可能提供镜像给公网，所以需要创建一个本地私人仓库供给团队使用，基于公司内部项目构建镜像。</p><p><code>Docker Registry</code>是官方提供的工具，可以用于构建私有镜像仓库</p><p>将本地镜像推送到私有库</p><ol><li>下载镜像Docker Registry</li></ol><p>docker pull registry</p><ol start="2"><li>运行私有库Registry，相当于本地有个私有Docker hub</li></ol><p>docker run -d -p 5000:5000  -v /zzyyuse/myregistry/:/tmp/registry --privileged=true registry 默认情况，仓库被创建在容器的/var/lib/registry目录下，建议自行用容器卷映射，方便于宿主机联调</p><ol start="3"><li>案例演示创建一个新镜像，ubuntu安装ifconfig命令</li></ol><p>从Hub上下载ubuntu镜像到本地并成功运行</p><p>原始的Ubuntu镜像是不带着ifconfig命令的</p><p></p><p>外网连通的情况下，安装ifconfig命令并测试通过</p><p>docker容器内 执行上述两条命令： apt-get update apt-get install net-tools</p><p>安装完成后，commit我们自己的新镜像</p><p>公式： docker commit -m=&quot; 提交的描述信息 &quot; -a=&quot; 作者 &quot;  容器 ID  要创建的目标镜像名 :[ 标签名 ] 命令： 在容器外执行，记得 docker commit -m=&quot; ifconfig cmd add &quot; -a=&quot; zzyy &quot; a69d7c825c4f  zzyyubuntu:1.2</p><p>启动我们的新镜像并和原来的对比</p><p>1 官网是默认下载的Ubuntu没有ifconfig命令 2我们自己commit构建的新镜像，新增加了ifconfig功能，可以成功使用。</p><ol start="4"><li>curl验证私服库上有什么镜像</li></ol>',18),m={href:"http://192.168.111.162:5000/v2/_catalog",target:"_blank",rel:"noopener noreferrer"},f=n(`<ol start="5"><li>将新镜像zzyyubuntu:1.2修改符合私服规范的Tag</li></ol><p>按照公式： docker   tag   镜像:Tag   Host:Port/Repository:Tag 自己host主机IP地址，填写同学你们自己的，不要粘贴错误，O(∩_∩)O 使用命令 docker tag 将zzyyubuntu:1.2 这个镜像修改为192.168.111.162:5000/zzyyubuntu:1.2   docker tag  zzyyubuntu:1.2  192.168.111.162:5000/zzyyubuntu:1.2</p><ol start="6"><li>修改配置文件使之支持http   在<code>/etc/docker/daemon.json </code>文件中添加<code>insecure-registries</code>配置,参考如下</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;insecure-registries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.111.162:5000&quot;</span><span class="token punctuation">]</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述理由：docker默认不允许http方式推送镜像，通过配置选项来取消这个限制。====&gt;  修改完后如果不生效，建议重启docker</p><ol start="7"><li>push推送到私服库</li></ol><p>docker push 192.168.111.162:5000/zzyyubuntu:1.2</p>`,7),_={start:"8"},v={href:"http://192.168.111.162:5000/v2/_catalog",target:"_blank",rel:"noopener noreferrer"},y=e("li",null,[e("p",null,"pull到本地并运行")],-1),z=e("p",null,"docker pull 192.168.111.162:5000/zzyyubuntu:1.2 docker run -it 镜像ID /bin/bash",-1);function x(D,q){const t=r("ExternalLinkIcon");return a(),d("div",null,[p,e("p",null,[e("a",u,[o("阿里云开发平台"),c(t)])]),h,k,e("p",null,[e("a",b,[o("Docker Hub"),c(t)]),o("在中国大陆访问太慢了且准备被阿里云取代的趋势，不太主流。")]),g,e("p",null,[o("curl -XGET "),e("a",m,[o("http://192.168.111.162:5000/v2/_catalog"),c(t)]),o("   可以看到，目前私服库没有任何镜像上传过。。。。。。")]),f,e("ol",_,[e("li",null,[e("p",null,[o("curl验证私服库上有什么镜像2   curl -XGET "),e("a",v,[o("http://192.168.111.162:5000/v2/_catalog"),c(t)])])]),y]),z])}const I=s(l,[["render",x],["__file","dockerImages.html.vue"]]);export{I as default};
