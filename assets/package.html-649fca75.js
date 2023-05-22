import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-6d1b567b.js";const i={},l=e(`<h2 id="应用和包管理" tabindex="-1"><a class="header-anchor" href="#应用和包管理" aria-hidden="true">#</a> 应用和包管理</h2><p>涉及复杂的实现逻辑和复杂多样的需求，一次性实现所有功能几乎是不可能的。为了解决这个问题，高级编程语言都提供一套模块化组织代码的方法，以便将复杂问题拆解成 多个相对简单的子问题，分别实现对应功能，再组合到一起。</p><p>库(library)：实现了某个功能，但又不直接体现在最终实现的功能里的代码模块。</p><p>档案文件(archive file)：将一个库或者应用包含的所有源代码文件以及元数据文件(元数据指描述对象一般特征的数据，例如名称、版本、作者、依赖等信息，保存这些数据的文件 就叫元数据文件)压缩放在一个文件中，这个文件叫档案文件。</p><p>包(package)：一个或者多个档案文件组合在一起，方便 人们分享、查找和维护称之为包。</p><p>软件源(software source/software repository)：提供这些包的服务器成为软件源。</p><p>包管理器(package manager)：方便不熟悉操作系统底层的用户提供查找、安装、卸载、升级软件等操作的管理器。</p><h3 id="使用apt管理应用" tabindex="-1"><a class="header-anchor" href="#使用apt管理应用" aria-hidden="true">#</a> 使用<code>apt</code>管理应用</h3><p>常用命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出系统已安装应用</span>
<span class="token function">apt</span> list <span class="token parameter variable">--installed</span>

<span class="token comment"># 使用分页器</span>
<span class="token function">apt</span> list <span class="token parameter variable">--installed</span> <span class="token operator">|</span> <span class="token function">less</span> <span class="token parameter variable">-N</span>
<span class="token comment"># 输入 /apt 并按回车键，然后按 n 键，就会将每一个匹配到的 apt 字符串放到分页器第一行</span>
<span class="token comment"># / 后可以加正则表达式</span>

<span class="token comment"># 过滤命令 grep</span>
<span class="token function">apt</span> list <span class="token parameter variable">--installed</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;^apt&#39;</span> <span class="token operator">&gt;</span> apt_related_pkgs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缓存策略：减轻软件源服务器检索压力提升用户体验，在本地保存一份软件源中的信息副本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安全软件前同步本地副本，防止本地缓存与服务器信息不一致导致安装软件失败</span>
<span class="token function">apt</span> update

<span class="token comment"># 使用 search 命令搜索名字包含 Git 的应用</span>
<span class="token comment"># 包名开头和结尾之间只有 git， 实现严格匹配</span>
<span class="token function">apt</span> search <span class="token string">&#39;^git$&#39;</span>

<span class="token comment"># 免交互参数 -y</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">git</span>

<span class="token comment"># 升级缓存</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token comment"># 列出可以升级的包</span>
<span class="token function">sudo</span> <span class="token function">apt</span> list <span class="token parameter variable">--upgradable</span>
<span class="token comment"># 完成升级</span>
<span class="token function">sudo</span> <span class="token function">apt</span> upgrade

<span class="token comment"># 移除可移除包</span>
<span class="token function">sudo</span> <span class="token function">apt</span> autoremove

<span class="token comment"># 卸载应用</span>
<span class="token function">sudo</span> <span class="token function">apt</span> remove <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用dpkg管理应用" tabindex="-1"><a class="header-anchor" href="#使用dpkg管理应用" aria-hidden="true">#</a> 使用<code>dpkg</code>管理应用</h3><p>1.安装</p><p>手动安装<code>deb</code>包的一个常见原因:发行版要维护大量包，这些包都是独立开发的，彼此之间不会互相协调进度，保证兼容。所以避免发行版出现内部版本冲突的重任就落到了发行版维护者身上，而发行版维护者资源有限，不可能随时跟进每个包的新版本，验证它与其他包之间的兼容性。这时包开发者就会将最新版本发布到自己的网站上，供用户下载和安装，而不必等待发行版更新。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用命令行工具 wget 下载 deb 文件</span>
<span class="token function">wget</span> https://github.com/jarun/googler/releases/download/v4.3.1/googler_4.3.1-1_ubuntu20.04.amd64.deb

<span class="token comment"># 查看一下这个安装包的元数据   -I 是 --info简写</span>
dpkg <span class="token parameter variable">-I</span> googler_4.3.1-1_ubuntu20.04.amd64.deb

<span class="token comment"># 查看这个安装包会在系统中添加哪些文件   -c 是 --contents 的简写</span>
dpkg <span class="token parameter variable">-c</span> googler_4.3.1-1_ubuntu20.04.amd64.deb

<span class="token comment"># 安装  -i 是 --install 的简写</span>
<span class="token function">sudo</span> dpkg <span class="token parameter variable">-i</span> googler_4.3.1-1_ubuntu20.04.amd64.deb

<span class="token comment"># 运行安装好的应用并检验文件是否存在  -L 是 --listfiles 的简写</span>
googler <span class="token parameter variable">-v</span>
dpkg <span class="token parameter variable">-L</span> googler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然在实际安装过程中只有<code>dpkg -i</code>命令是必需的，其他都可以忽略，但安装前后查看一下安装文件的内容是提高安全性的好习惯。</p><p><code>dpkg</code>也提供了列出系统中已安装应用的功能</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -l 是 --list 的简写</span>
dpkg <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">head</span>

<span class="token comment"># 列出某个具体应用的信息</span>
dpkg <span class="token parameter variable">-l</span> googler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.查询</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -S 是 --search 的简写</span>
dpkg <span class="token parameter variable">-S</span> /usr/bin/googler
<span class="token function">which</span> <span class="token function">ls</span>
dpkg <span class="token parameter variable">-S</span> /bin/ls
dpkg <span class="token parameter variable">-S</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> <span class="token function">ls</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.卸载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 卸载完成后查询</span>
<span class="token function">sudo</span> dpkg <span class="token parameter variable">-r</span> googler
dpkg <span class="token parameter variable">-l</span> googler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>gdebi</code>工具：自动解析要安装的<code>deb</code>包的依赖，以及依赖的依赖，然后自动完成下载和安装。</p><p>所以下次安装<code>deb</code>包的时候，用<code>sudo gdebi googler_4.3.1-1_ubuntu20.04. amd64.deb</code>代替<code>sudo dpkg -i googler_4.3.1-1_ubuntu20.04.amd64.deb</code>即可。</p><p>4.安全</p><p>关于<code>dpkg</code>工具的最后一个话题与它的安全性有关。前面说过在安装之前可以通过<code>-I</code>、<code>-c</code>等参数检查包的元数据和内容，但这些方法不能发现可执行文件内部隐藏的恶意代码。所以为了保证系统安全，要养成只在官网下载<code>deb</code>包的习惯。对于从第三方得到的包，除非来源完全可靠，否则尽量不要安装。</p><h2 id="跨平台包管理器" tabindex="-1"><a class="header-anchor" href="#跨平台包管理器" aria-hidden="true">#</a> 跨平台包管理器</h2>`,28),d=[l];function c(p,t){return s(),a("div",null,d)}const v=n(i,[["render",c],["__file","package.html.vue"]]);export{v as default};
