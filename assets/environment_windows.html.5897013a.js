import{ab as i,A as d,B as c,z as e,M as s,H as a,ac as o,O as t}from"./framework.9a0a33a3.js";const l={},r=o(`<h1 id="windows启动ssh-agent" tabindex="-1"><a class="header-anchor" href="#windows启动ssh-agent" aria-hidden="true">#</a> <code>windows</code>启动<code>ssh-agent</code></h1><p><code>Windows10</code>自带了一个非常方便的<code>ssh-agent</code>服务，我们只需要在<code>Windows</code>的服务列表里面启用该服务就能在<code>CMD</code>或<code>PowerShell</code>里直接使用<code>ssh-add</code>添加密钥，实现<code>ssh</code>免密登录。</p><p>以<strong>管理员</strong>打开<code>PowerShell</code>，通过<code>Set-Service -StartupType Automatic ssh-agent</code>将<code>ssh-agent</code>服务的启动类型设为自启，随后键入<code>Start-Service ssh-agent</code>启动当前会话下的<code>ssh-agent</code>服务。</p><div class="language-dos line-numbers-mode" data-ext="dos"><pre class="language-dos"><code>PS C:\\windows\\system32&gt; Set-Service -StartupType Automatic ssh-agent
PS C:\\windows\\system32&gt; Start-Service ssh-agent
PS C:\\windows\\system32&gt; Get-Service ssh-agent

Status   Name               DisplayName
------   ----               -----------
Running  ssh-agent          OpenSSH Authentication Agent


PS C:\\windows\\system32&gt; (Get-Service ssh-agent).startType
Automatic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将私钥添加到ssh-agent" tabindex="-1"><a class="header-anchor" href="#将私钥添加到ssh-agent" aria-hidden="true">#</a> 将私钥添加到<code>ssh-agent</code></h2><p><code>ssh-agent</code>是<code>OpenSSH</code>身份认证代理，存储用于公钥身份验证的私钥。每当从客户端进行身份验证需要使用私钥时，<code>ssh-agent</code>都会自动检索代理存储的本地私钥，并将其传递到你的 <code>SSH</code>客户端。</p><p><code>ssh-add</code>将私钥加载进<code>ssh-agent</code>。</p><p><strong>使用管理员身份打开终端</strong></p><p>注意区分不同的<code>SSH</code>，不同<code>SSH</code>的<code>ssh-agent</code>是相互独立的，这意味着如果你在<code>Windows SSH</code>的<code>ssh-agent</code>中添加了你登录<code>GitHub</code>的私钥，在<code>Git Bash</code>中登录<code>GitHub</code>时仍然可能无法免密登录.</p><p>但不同<code>SSH</code>共用客户端配置文件:</p><ul><li><code>Windows</code>上是 <code>~/.ssh/config</code></li><li><code>Linux</code>上是 <code>/etc/ssh/ssh_config</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 ssh-agent 服务状态，这里输出：Stopped</span>
Get-Service ssh-agent
<span class="token comment"># 查看 ssh-agent 服务的启动类型，这里输出：Disabled</span>
Get-Service ssh-agent <span class="token operator">|</span> Select StartType
<span class="token comment"># 将 ssh-agent 服务的启动类型修改为Automatic（自动启动）。</span>
Get-Service <span class="token parameter variable">-Name</span> ssh-agent <span class="token operator">|</span> Set-Service <span class="token parameter variable">-StartupType</span> Automatic
<span class="token comment"># 将私钥加载进 ssh-agent</span>
ssh-add C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>xxx<span class="token punctuation">\\</span>.ssh<span class="token punctuation">\\</span>your_rsa
<span class="token comment"># 显示 ssh-agent 中的公钥，验证私钥是否添加成功</span>
ssh-add <span class="token parameter variable">-L</span>
<span class="token comment"># 服务重启后，添加的密钥仍在 agent 中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssh代理设置" tabindex="-1"><a class="header-anchor" href="#ssh代理设置" aria-hidden="true">#</a> <code>ssh</code>代理设置</h2><p>切换到<code>ssh</code>目录:<code>~/.ssh/config</code>,存在<code>config</code>文件的直接编辑,不存在的新建</p><p>复制以下内容到<code>config</code>文件,修改对应配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Host github.com
  User <span class="token function">git</span>
  Port <span class="token number">22</span>
  Hostname github.com
  <span class="token comment"># 注意修改路径为你的路径</span>
  IdentityFile <span class="token string">&quot;C:\\Users\\xxx\\.ssh\\id_rsa&quot;</span>
  TCPKeepAlive <span class="token function">yes</span>
  <span class="token comment"># host:port修改为你的代理地址</span>
  ProxyCommand connect <span class="token parameter variable">-S</span> host:port <span class="token parameter variable">-a</span> none %h %p

Host ssh.github.com
  User <span class="token function">git</span>
  Port <span class="token number">443</span>
  Hostname ssh.github.com
  <span class="token comment"># 注意修改路径为你的路径</span>
  IdentityFile <span class="token string">&quot;C:\\Users\\xxx\\.ssh\\id_rsa&quot;</span>
  TCPKeepAlive <span class="token function">yes</span>
  <span class="token comment"># host:port修改为你的代理地址</span>
  ProxyCommand connect <span class="token parameter variable">-S</span> host:port <span class="token parameter variable">-a</span> none %h %p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,17),p={href:"https://segmentfault.com/a/1190000023054090",target:"_blank",rel:"noopener noreferrer"},v={href:"https://developer.aliyun.com/article/784983",target:"_blank",rel:"noopener noreferrer"};function m(u,h){const n=t("ExternalLinkIcon");return d(),c("div",null,[r,e("ul",null,[e("li",null,[s("[1] "),e("a",p,[s("Windows SSH 免密登录详解"),a(n)])]),e("li",null,[s("[2] "),e("a",v,[s("Windows 10 启动 ssh-agent"),a(n)])])])])}const g=i(l,[["render",m],["__file","environment_windows.html.vue"]]);export{g as default};