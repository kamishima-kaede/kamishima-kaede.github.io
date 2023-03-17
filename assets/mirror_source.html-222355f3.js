import{_ as r,W as l,X as o,Y as c,Z as n,a0 as s,a1 as a,$ as i,C as t}from"./framework-18b71f17.js";const d={},p=n("p",null,"开发过程中常用的镜像资源收集记录",-1),m=n("p",null,"本人常用的镜像站点:",-1),u={href:"https://mirrors.ustc.edu.cn/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://developer.aliyun.com/mirror/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://mirrors.huaweicloud.com/",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"pnpm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pnpm","aria-hidden":"true"},"#"),s(),n("code",null,"pnpm")],-1),g={href:"https://www.pnpm.cn/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"},f=i(`<p><code>pnpm</code>不仅能作为<code>JavaScript</code>的包管理工具,而且可以作为<code>nodejs</code>的版本管理工具</p><p>在 POSIX 类系统上，即使尚未安装 Node.js，也可以使用以下脚本安装 pnpm：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.pnpm.io/install.sh <span class="token operator">|</span> <span class="token function">sh</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有安装 curl，可以使用 wget：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> -qO- https://get.pnpm.io/install.sh <span class="token operator">|</span> <span class="token function">sh</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 Windows 系统上（PowerShell）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iwr https://get.pnpm.io/install.ps1 <span class="token parameter variable">-useb</span> <span class="token operator">|</span> iex
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置<code>npm</code>包镜像地址：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果设置报错,原因一般是没有安装<code>npm</code>,可以手动创建<code>.npmrc</code>文件,然后添加:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">registry</span><span class="token operator">=</span>https://registry.npmmirror.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>.npmrc</code>文件所在位置如下,根据具体情况在所在位置创建:</p><ul><li>全局配置文件：<code>/etc/npmrc</code></li><li>用户配置文件：<code>~/.npmrc</code></li><li>项目配置文件：<code>$项目根目录/.npmrc</code></li></ul><p>设置<code>Node.js</code>镜像地址：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> node-mirror:release https://npmmirror.com/mirrors/node/
<span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> node-mirror:rc https://npmmirror.com/mirrors/node-rc/
<span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> node-mirror:nightly https://npmmirror.com/mirrors/node-nightly/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者编辑<code>.npmrc</code>,添加如下:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>node-mirror:release<span class="token operator">=</span>https://npmmirror.com/mirrors/node/
node-mirror:rc<span class="token operator">=</span>https://npmmirror.com/mirrors/node-rc/
node-mirror:nightly<span class="token operator">=</span>https://npmmirror.com/mirrors/node-nightly/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以使用<code>pnpm env</code>命令来安装<code>Node.js</code>了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 LTS 版本的 Node.js</span>
<span class="token function">pnpm</span> <span class="token function">env</span> use <span class="token parameter variable">--global</span> lts
<span class="token function">pnpm</span> <span class="token function">env</span> use <span class="token parameter variable">--global</span> argon

<span class="token comment"># 安装 v16 的Node.js</span>
<span class="token function">pnpm</span> <span class="token function">env</span> use <span class="token parameter variable">--global</span> <span class="token number">16</span>

<span class="token comment"># 安装 Node.js 的预发行版本</span>
<span class="token function">pnpm</span> <span class="token function">env</span> use <span class="token parameter variable">--global</span> nightly
<span class="token function">pnpm</span> <span class="token function">env</span> use <span class="token parameter variable">--global</span> rc
<span class="token function">pnpm</span> <span class="token function">env</span> use <span class="token parameter variable">--global</span> <span class="token number">16.0</span>.0-rc.0
<span class="token function">pnpm</span> <span class="token function">env</span> use <span class="token parameter variable">--global</span> rc/14

<span class="token comment"># 安装最新版本的 Node.js</span>
<span class="token function">pnpm</span> <span class="token function">env</span> use <span class="token parameter variable">--global</span> latest

<span class="token comment"># 查看本地Node.js列表</span>
<span class="token function">pnpm</span> <span class="token function">env</span> list

<span class="token comment"># 查看远程可用Node.js列表</span>
<span class="token function">pnpm</span> <span class="token function">env</span> list <span class="token parameter variable">--remote</span>

<span class="token comment"># 查看远程可用指定Node.js版本</span>
<span class="token function">pnpm</span> <span class="token function">env</span> list <span class="token parameter variable">--remote</span> <span class="token number">16</span>

<span class="token comment"># 移除指定版本的 Node.js</span>
<span class="token function">pnpm</span> <span class="token function">env</span> remove <span class="token parameter variable">--global</span> <span class="token number">14.0</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nvm-不推荐" tabindex="-1"><a class="header-anchor" href="#nvm-不推荐" aria-hidden="true">#</a> <code>nvm</code>(不推荐)</h2><p>nodejs版本管理工具</p>`,21),_={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},x=i(`<p>设置镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm node_mirror https://npmmirror.com/mirrors/node/
nvm npm_mirror  https://npmmirror.com/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm-不推荐" tabindex="-1"><a class="header-anchor" href="#npm-不推荐" aria-hidden="true">#</a> <code>npm</code>(不推荐)</h2><p><code>node</code>包管理工具</p><p>1.查看当前源地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.设置淘宝镜像【不建议，影响其他指令】</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.NPM镜像的管理工具 安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> nrm
<span class="token comment"># 或者</span>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-g</span> nrm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有镜像</span>
nrm <span class="token function">ls</span>

  <span class="token function">npm</span> ---------- https://registry.npmjs.org/
* <span class="token function">yarn</span> --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.nlark.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/

<span class="token comment"># 使用淘宝镜像</span>
nrm use taobao
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.中国<code>NPM</code>镜像</p>`,12),N={href:"https://www.npmmirror.com/",target:"_blank",rel:"noopener noreferrer"},j=i(`<h2 id="yarn-不推荐" tabindex="-1"><a class="header-anchor" href="#yarn-不推荐" aria-hidden="true">#</a> <code>yarn</code>(不推荐)</h2><p><code>node</code>包管理工具</p><p>1.查看当前源地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.设置淘宝镜像【不建议，影响其他指令】</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.YARN镜像的管理工具 安装：<code>yarn global add yrm</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有镜像</span>
yrm <span class="token function">ls</span>

  <span class="token function">npm</span> ---------- https://registry.npmjs.org/
* <span class="token function">yarn</span> --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.nlark.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/

<span class="token comment"># 使用淘宝镜像</span>
yrm use taobao

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="electron镜像设置" tabindex="-1"><a class="header-anchor" href="#electron镜像设置" aria-hidden="true">#</a> <code>electron</code>镜像设置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> electron_mirror https://npmmirror.com/mirrors/electron/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ubuntu镜像" tabindex="-1"><a class="header-anchor" href="#ubuntu镜像" aria-hidden="true">#</a> <code>Ubuntu</code>镜像</h2><p>手动更改<br> 用你熟悉的编辑器打开：<code>/etc/apt/sources.list</code>,替换默认的连接</p>`,12),w={href:"https://mirrors.ustc.edu.cn/repogen/",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"Archlinux",-1),M=n("code",null,"Debian",-1),P=n("code",null,"Ubuntu",-1),V=n("p",null,[s("其他"),n("code",null,"Ubuntu"),s("国内镜像源请在头部连接中查找")],-1);function L(B,C){const e=t("ExternalLinkIcon");return l(),o("div",null,[p,c(" more "),m,n("ul",null,[n("li",null,[n("a",u,[s("中科大镜像源"),a(e)])]),n("li",null,[n("a",v,[s("阿里巴巴开源镜像站"),a(e)])]),n("li",null,[n("a",b,[s("华为开源镜像站"),a(e)])])]),h,n("p",null,[s("官网:"),n("a",g,[s("中文"),a(e)]),s("|"),n("a",k,[s("英文"),a(e)])]),f,n("blockquote",null,[n("p",null,[s("for windows: "),n("a",_,[s("nvm-windows"),a(e)]),s(" for mac/linux: "),n("a",y,[s("nvm-sh/nvm"),a(e)])])]),x,n("p",null,[n("a",N,[s("国内NPM镜像"),a(e)])]),j,n("p",null,[s("本人一般使用中科大源,这是一个中科大源镜像生成工具"),n("a",w,[s("https://mirrors.ustc.edu.cn/repogen/"),a(e)]),s(",包括"),S,s("、"),M,s("、"),P]),V])}const I=r(d,[["render",L],["__file","mirror_source.html.vue"]]);export{I as default};
