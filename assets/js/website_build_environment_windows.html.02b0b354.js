"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[7440],{5809:(s,e,n)=>{n.r(e),n.d(e,{comp:()=>t,data:()=>c});var a=n(9034);const l=[(0,a.Fv)('<h1 id="windows启动ssh-agent" tabindex="-1"><a class="header-anchor" href="#windows启动ssh-agent"><span><code>windows</code>启动<code>ssh-agent</code></span></a></h1><p><code>Windows10</code>自带了一个非常方便的<code>ssh-agent</code>服务，我们只需要在<code>Windows</code>的服务列表里面启用该服务就能在<code>CMD</code>或<code>PowerShell</code>里直接使用<code>ssh-add</code>添加密钥，实现<code>ssh</code>免密登录。</p><p>以<strong>管理员</strong>打开<code>PowerShell</code>，通过<code>Set-Service -StartupType Automatic ssh-agent</code>将<code>ssh-agent</code>服务的启动类型设为自启，随后键入<code>Start-Service ssh-agent</code>启动当前会话下的<code>ssh-agent</code>服务。</p><div class="language-dos line-numbers-mode" data-highlighter="shiki" data-ext="dos" data-title="dos" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>PS C:\\windows\\system32&gt; Set-Service -StartupType Automatic ssh-agent</span></span>\n<span class="line"><span>PS C:\\windows\\system32&gt; Start-Service ssh-agent</span></span>\n<span class="line"><span>PS C:\\windows\\system32&gt; Get-Service ssh-agent</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>Status   Name               DisplayName</span></span>\n<span class="line"><span>------   ----               -----------</span></span>\n<span class="line"><span>Running  ssh-agent          OpenSSH Authentication Agent</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>PS C:\\windows\\system32&gt; (Get-Service ssh-agent).startType</span></span>\n<span class="line"><span>Automatic</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将私钥添加到ssh-agent" tabindex="-1"><a class="header-anchor" href="#将私钥添加到ssh-agent"><span>将私钥添加到<code>ssh-agent</code></span></a></h2><p><code>ssh-agent</code>是<code>OpenSSH</code>身份认证代理，存储用于公钥身份验证的私钥。每当从客户端进行身份验证需要使用私钥时，<code>ssh-agent</code>都会自动检索代理存储的本地私钥，并将其传递到你的 <code>SSH</code>客户端。</p><p><code>ssh-add</code>将私钥加载进<code>ssh-agent</code>。</p><p><strong>使用管理员身份打开终端</strong></p><p>注意区分不同的<code>SSH</code>，不同<code>SSH</code>的<code>ssh-agent</code>是相互独立的，这意味着如果你在<code>Windows SSH</code>的<code>ssh-agent</code>中添加了你登录<code>GitHub</code>的私钥，在<code>Git Bash</code>中登录<code>GitHub</code>时仍然可能无法免密登录.</p><p>但不同<code>SSH</code>共用客户端配置文件:</p><ul><li><code>Windows</code>上是 <code>~/.ssh/config</code></li><li><code>Linux</code>上是 <code>/etc/ssh/ssh_config</code></li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;"># 查看 ssh-agent 服务状态，这里输出：Stopped</span></span>\n<span class="line"><span style="color:#88C0D0;">Get-Service</span><span style="color:#A3BE8C;"> ssh-agent</span></span>\n<span class="line"><span style="color:#616E88;"># 查看 ssh-agent 服务的启动类型，这里输出：Disabled</span></span>\n<span class="line"><span style="color:#88C0D0;">Get-Service</span><span style="color:#A3BE8C;"> ssh-agent</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> Select</span><span style="color:#A3BE8C;"> StartType</span></span>\n<span class="line"><span style="color:#616E88;"># 将 ssh-agent 服务的启动类型修改为Automatic（自动启动）。</span></span>\n<span class="line"><span style="color:#88C0D0;">Get-Service</span><span style="color:#A3BE8C;"> -Name</span><span style="color:#A3BE8C;"> ssh-agent</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> Set-Service</span><span style="color:#A3BE8C;"> -StartupType</span><span style="color:#A3BE8C;"> Automatic</span></span>\n<span class="line"><span style="color:#616E88;"># 将私钥加载进 ssh-agent</span></span>\n<span class="line"><span style="color:#88C0D0;">ssh-add</span><span style="color:#A3BE8C;"> C:</span><span style="color:#EBCB8B;">\\U</span><span style="color:#A3BE8C;">sers</span><span style="color:#EBCB8B;">\\x</span><span style="color:#A3BE8C;">xx</span><span style="color:#EBCB8B;">\\.</span><span style="color:#A3BE8C;">ssh</span><span style="color:#EBCB8B;">\\y</span><span style="color:#A3BE8C;">our_rsa</span></span>\n<span class="line"><span style="color:#616E88;"># 显示 ssh-agent 中的公钥，验证私钥是否添加成功</span></span>\n<span class="line"><span style="color:#88C0D0;">ssh-add</span><span style="color:#A3BE8C;"> -L</span></span>\n<span class="line"><span style="color:#616E88;"># 服务重启后，添加的密钥仍在 agent 中</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssh代理设置" tabindex="-1"><a class="header-anchor" href="#ssh代理设置"><span><code>ssh</code>代理设置</span></a></h2><p>切换到<code>ssh</code>目录:<code>~/.ssh/config</code>,存在<code>config</code>文件的直接编辑,不存在的新建</p><p>复制以下内容到<code>config</code>文件,修改对应配置</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">Host</span><span style="color:#A3BE8C;"> github.com</span></span>\n<span class="line"><span style="color:#88C0D0;">  User</span><span style="color:#A3BE8C;"> git</span></span>\n<span class="line"><span style="color:#88C0D0;">  Port</span><span style="color:#B48EAD;"> 22</span></span>\n<span class="line"><span style="color:#88C0D0;">  Hostname</span><span style="color:#A3BE8C;"> github.com</span></span>\n<span class="line"><span style="color:#616E88;">  # 注意修改路径为你的路径</span></span>\n<span class="line"><span style="color:#88C0D0;">  IdentityFile</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">C:\\Users\\xxx\\.ssh\\id_rsa</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#88C0D0;">  TCPKeepAlive</span><span style="color:#A3BE8C;"> yes</span></span>\n<span class="line"><span style="color:#616E88;">  # host:port修改为你的代理地址</span></span>\n<span class="line"><span style="color:#88C0D0;">  ProxyCommand</span><span style="color:#A3BE8C;"> connect</span><span style="color:#A3BE8C;"> -S</span><span style="color:#A3BE8C;"> host:port</span><span style="color:#A3BE8C;"> -a</span><span style="color:#A3BE8C;"> none</span><span style="color:#A3BE8C;"> %h</span><span style="color:#A3BE8C;"> %p</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#88C0D0;">Host</span><span style="color:#A3BE8C;"> ssh.github.com</span></span>\n<span class="line"><span style="color:#88C0D0;">  User</span><span style="color:#A3BE8C;"> git</span></span>\n<span class="line"><span style="color:#88C0D0;">  Port</span><span style="color:#B48EAD;"> 443</span></span>\n<span class="line"><span style="color:#88C0D0;">  Hostname</span><span style="color:#A3BE8C;"> ssh.github.com</span></span>\n<span class="line"><span style="color:#616E88;">  # 注意修改路径为你的路径</span></span>\n<span class="line"><span style="color:#88C0D0;">  IdentityFile</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">C:\\Users\\xxx\\.ssh\\id_rsa</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#88C0D0;">  TCPKeepAlive</span><span style="color:#A3BE8C;"> yes</span></span>\n<span class="line"><span style="color:#616E88;">  # host:port修改为你的代理地址</span></span>\n<span class="line"><span style="color:#88C0D0;">  ProxyCommand</span><span style="color:#A3BE8C;"> connect</span><span style="color:#A3BE8C;"> -S</span><span style="color:#A3BE8C;"> host:port</span><span style="color:#A3BE8C;"> -a</span><span style="color:#A3BE8C;"> none</span><span style="color:#A3BE8C;"> %h</span><span style="color:#A3BE8C;"> %p</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li>[1] <a href="https://segmentfault.com/a/1190000023054090" target="_blank" rel="noopener noreferrer">Windows SSH 免密登录详解</a></li><li>[2] <a href="https://developer.aliyun.com/article/784983" target="_blank" rel="noopener noreferrer">Windows 10 启动 ssh-agent</a></li></ul>',18)],o={},t=(0,n(8538).A)(o,[["render",function(s,e){return(0,a.uX)(),(0,a.CE)("div",null,l)}]]),c=JSON.parse('{"path":"/website_build/environment_windows.html","title":"windows启动ssh-agent","lang":"zh-CN","frontmatter":{"article":false,"description":"windows启动ssh-agent Windows10自带了一个非常方便的ssh-agent服务，我们只需要在Windows的服务列表里面启用该服务就能在CMD或PowerShell里直接使用ssh-add添加密钥，实现ssh免密登录。 以管理员打开PowerShell，通过Set-Service -StartupType Automatic ssh...","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/website_build/environment_windows.html"}],["meta",{"property":"og:site_name","content":"hanekawa-shiki"}],["meta",{"property":"og:title","content":"windows启动ssh-agent"}],["meta",{"property":"og:description","content":"windows启动ssh-agent Windows10自带了一个非常方便的ssh-agent服务，我们只需要在Windows的服务列表里面启用该服务就能在CMD或PowerShell里直接使用ssh-add添加密钥，实现ssh免密登录。 以管理员打开PowerShell，通过Set-Service -StartupType Automatic ssh..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-18T09:36:17.000Z"}],["meta",{"property":"article:author","content":"hanekawa-shiki"}],["meta",{"property":"article:modified_time","content":"2022-11-18T09:36:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"windows启动ssh-agent\\",\\"description\\":\\"windows启动ssh-agent Windows10自带了一个非常方便的ssh-agent服务，我们只需要在Windows的服务列表里面启用该服务就能在CMD或PowerShell里直接使用ssh-add添加密钥，实现ssh免密登录。 以管理员打开PowerShell，通过Set-Service -StartupType Automatic ssh...\\"}"]]},"headers":[{"level":2,"title":"将私钥添加到ssh-agent","slug":"将私钥添加到ssh-agent","link":"#将私钥添加到ssh-agent","children":[]},{"level":2,"title":"ssh代理设置","slug":"ssh代理设置","link":"#ssh代理设置","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1655200609000,"updatedTime":1668764177000,"contributors":[{"name":"shiki","email":"kamiacgxu@gmail.com","commits":3}]},"readingTime":{"minutes":2.07,"words":622},"filePathRelative":"website_build/environment_windows.md","localizedDate":"2022年6月14日","excerpt":"\\n<p><code>Windows10</code>自带了一个非常方便的<code>ssh-agent</code>服务，我们只需要在<code>Windows</code>的服务列表里面启用该服务就能在<code>CMD</code>或<code>PowerShell</code>里直接使用<code>ssh-add</code>添加密钥，实现<code>ssh</code>免密登录。</p>\\n<p>以<strong>管理员</strong>打开<code>PowerShell</code>，通过<code>Set-Service -StartupType Automatic ssh-agent</code>将<code>ssh-agent</code>服务的启动类型设为自启，随后键入<code>Start-Service ssh-agent</code>启动当前会话下的<code>ssh-agent</code>服务。</p>","autoDesc":true}')},8538:(s,e)=>{e.A=(s,e)=>{const n=s.__vccOpts||s;for(const[s,a]of e)n[s]=a;return n}}}]);