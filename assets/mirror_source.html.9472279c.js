import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c,b as n,e as s,f as a,d as i,r as o}from"./app.8c89f077.js";const t={},d=n("p",null,"本人常用的镜像站点:",-1),p={href:"https://mirrors.ustc.edu.cn/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://developer.aliyun.com/mirror/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://mirrors.huaweicloud.com/",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"常用开发工具镜像设置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#常用开发工具镜像设置","aria-hidden":"true"},"#"),s(" 常用开发工具镜像设置")],-1),b=n("h3",{id:"pnpm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pnpm","aria-hidden":"true"},"#"),s(),n("code",null,"pnpm")],-1),h={href:"https://www.pnpm.cn/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"},k=i(`<p><code>pnpm</code>不仅能作为<code>JavaScript</code>的包管理工具,而且可以作为<code>nodejs</code>的版本管理工具</p><p>在 POSIX 类系统上，即使尚未安装 Node.js，也可以使用以下脚本安装 pnpm：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.pnpm.io/install.sh <span class="token operator">|</span> <span class="token function">sh</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有安装 curl，可以使用 wget：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> -qO- https://get.pnpm.io/install.sh <span class="token operator">|</span> <span class="token function">sh</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 Windows 系统上（PowerShell）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iwr https://get.pnpm.io/install.ps1 <span class="token parameter variable">-useb</span> <span class="token operator">|</span> iex
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后就可以使用<code>pnpm env</code>命令来安装<code>Node.js</code>了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 LTS 版本的 Node.js</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置npm包镜像地址：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nvm-不推荐" tabindex="-1"><a class="header-anchor" href="#nvm-不推荐" aria-hidden="true">#</a> <code>nvm</code>(不推荐)</h3><p>nodejs版本管理工具</p>`,13),f={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},y=i(`<p>设置镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm node_mirror https://npmmirror.com/mirrors/node/
nvm npm_mirror  https://npmmirror.com/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npm-不推荐" tabindex="-1"><a class="header-anchor" href="#npm-不推荐" aria-hidden="true">#</a> <code>npm</code>(不推荐)</h3><p><code>node</code>包管理工具</p><p>1.查看当前源地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config get registry
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.中国<code>NPM</code>镜像</p>`,12),x={href:"http://www.npmmirror.com/",target:"_blank",rel:"noopener noreferrer"},j=i(`<h3 id="yarn-不推荐" tabindex="-1"><a class="header-anchor" href="#yarn-不推荐" aria-hidden="true">#</a> <code>yarn</code>(不推荐)</h3><p><code>node</code>包管理工具</p><p>1.查看当前源地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> config get registry
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="electron镜像设置" tabindex="-1"><a class="header-anchor" href="#electron镜像设置" aria-hidden="true">#</a> <code>electron</code>镜像设置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> electron_mirror https://npmmirror.com/mirrors/electron/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ubuntu镜像" tabindex="-1"><a class="header-anchor" href="#ubuntu镜像" aria-hidden="true">#</a> <code>Ubuntu</code>镜像</h3><p>手动更改<br> 用你熟悉的编辑器打开：<code>/etc/apt/sources.list</code></p><p>替换默认的连接</p><p><code>Ubuntu</code>各个版本国内镜像源请在头部连接中查找</p>`,14);function w(N,S){const e=o("ExternalLinkIcon");return l(),c("div",null,[d,n("ul",null,[n("li",null,[n("a",p,[s("中科大镜像源"),a(e)])]),n("li",null,[n("a",m,[s("阿里巴巴开源镜像站"),a(e)])]),n("li",null,[n("a",u,[s("华为开源镜像站"),a(e)])])]),v,b,n("p",null,[s("官网:"),n("a",h,[s("中文"),a(e)]),s("|"),n("a",g,[s("英文"),a(e)])]),k,n("blockquote",null,[n("p",null,[s("for windows: "),n("a",f,[s("nvm-windows"),a(e)]),s(" for mac/linux: "),n("a",_,[s("nvm-sh/nvm"),a(e)])])]),y,n("p",null,[n("a",x,[s("中国NPM镜像"),a(e)])]),j])}const L=r(t,[["render",w],["__file","mirror_source.html.vue"]]);export{L as default};
