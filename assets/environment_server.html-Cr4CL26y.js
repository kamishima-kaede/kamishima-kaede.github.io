import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,c,e as o,f as n,a as e,w as t,b as s,o as r}from"./app-DeZCnSkw.js";const p={},u=s(`<h1 id="环境服务配置" tabindex="-1"><a class="header-anchor" href="#环境服务配置"><span>环境服务配置</span></a></h1><p>一台安装有<code>node</code>和<code>nginx</code>的<code>linux</code>服务器,这里用的<code>linux</code>发行版是<code>ubuntu</code></p><h2 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span><code>git</code></span></a></h2><p>可以通过<code>git version</code>命令查看版本号,如果没有则没有安装</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;用户名&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;邮箱地址&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成ssh密钥" tabindex="-1"><a class="header-anchor" href="#生成ssh密钥"><span>生成ssh密钥</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-C</span> <span class="token string">&#39;you email address@gmail.com&#39;</span> <span class="token parameter variable">-t</span> rsa
<span class="token comment"># 会在用户目录~/.ssh/下建立相应的密钥文件。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>进入<code>~/.ssh</code>文件夹，输入</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 打开id_rsa.pub文件，复制其中所有内容。</span>
<span class="token function">cat</span> id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>复制公钥并在github中配置SSH公钥</p><h3 id="测试连接" tabindex="-1"><a class="header-anchor" href="#测试连接"><span>测试连接</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装node-js" tabindex="-1"><a class="header-anchor" href="#安装node-js"><span>安装<code>Node.js</code></span></a></h2><p><s>推荐使<a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">nvm</a>版本管理工具管理<code>node</code>版本</s></p><p><s>安装<code>nvm</code></s><br><s>curl -o- <a href="https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh" target="_blank" rel="noopener noreferrer">https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh</a> | bash</s><br><s>或者</s><br><s>wget -qO- <a href="https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh" target="_blank" rel="noopener noreferrer">https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh</a> | bash</s></p><p>推荐使用<a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm</a>安装和管理<code>Node.js</code></p>`,19),v=s(`<h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span><code>Nginx</code></span></a></h2><h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1"><span>安装</span></a></h3><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>常用命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 启动服务</span>
nginx

<span class="token comment"># 查看版本</span>
nginx <span class="token parameter variable">-v</span>

<span class="token comment"># 关闭服务</span>
nginx <span class="token parameter variable">-s</span> stop
<span class="token comment"># 或者</span>
nginx <span class="token parameter variable">-s</span> quit

<span class="token comment"># 更新nginx配置后,测试配置</span>
nginx <span class="token parameter variable">-t</span>

<span class="token comment"># 更新配置后重新载入</span>
nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加虚拟机配置" tabindex="-1"><a class="header-anchor" href="#添加虚拟机配置"><span>添加虚拟机配置</span></a></h3><p>切到<code>nginx</code>配置目录</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/nginx/conf.d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新建虚拟机配置文件,推荐使用网站域名作为文件名新建文件.</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>例如该配置是为域名为<code>fuckqq.com</code>服务的,那么文件名为<code>fuckqq.com.conf</code>,如果有多个域名配置这么命名方便以后维护</p></div><p>配置参考,根据自身实际情况修改</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server {
    listen       80;
    # 域名，多个以空格分开
    server_name  fuckqq.com blog.fuckqq.com www.fuckqq.com;

    # Gzip Compression
    gzip on;  #是否开启gzip模块 on表示开启 off表示关闭
    gzip_comp_level 6;  #压缩级别1-9，数字越大压缩的越好，也越占用CPU时间
    gzip_min_length 10k;  #设置允许压缩的最小字节
    gzip_types text/plain text/css application/json application/javascript text/javascript;  #设置压缩的文件类型
    gzip_vary on;  #加上http头信息Vary: Accept-Encoding给后端代理服务器识别是否启用 gzip 压缩

    location / {
        root   /home/dist; #静态网站根目录
        index  index.html;
        gzip_static on;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存配置后,执行检查配置命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> nginx <span class="token parameter variable">-t</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果提起错误信息,请善用搜索引擎解决</p><p>最后重启<code>nginx</code>服务</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nginx反向代理配置" tabindex="-1"><a class="header-anchor" href="#nginx反向代理配置"><span><code>nginx</code>反向代理配置</span></a></h3><p>原理:</p><p>首先当端口是80的时候， 域名访问的时候 是可以省略端口的，直接域名访问，<code>nginx</code>会监听80端口，同时根据不同的域名，把流量分配给<code>Node</code>相应的端口服务。</p><p>补充知识点：<a href="https://www.cnblogs.com/taostaryu/p/10547132.html" target="_blank" rel="noopener noreferrer">正向代理反向代理的区别</a></p><p>配置:</p><p>在<code>/etc/nginx/conf.d</code>文件夹下面新增一个配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/nginx/conf.d/fuckqq-5000.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>文件命名可以用上面的命名方式，看一下配置文件，便知道是哪个域名对应到哪个端口。</p><p>因为将来可能会有多个项目对应服务器后端的多个服务，所以要考虑这种负载均衡的这种场景。这时候通过以下配置来实现：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 通过 upstream 我们可以设定一个简单的负载均衡策略，以应对将来可能的升级
# 首先定义一个 server 集群 gougou，里面可以加多个 server，每个 server 对应的值可以用域名，也可以直接用 IP，# 但我们通常不会用 IP 来访问，而是通过域名:
upstream nodeStatic {
    server 127.0.0.1:5000;
}
server {
    listen 80;
    server_name xxx.com; // xxx.com 是你的域名
    # Gzip Compression
    gzip on;
    gzip_comp_level 6;
    gzip_vary on;
    gzip_min_length  1000;
    gzip_proxied any;
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_buffers 16 8k;
    
    location / {
        # remote_addr 代表客户端的 IP
        proxy_set_header X-Real-IP $remote_addr;
        # proxy_add_x_forwarded_for 获取真实的 IP
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        # http_host 表示请求的 host 头
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
      
        # proxy_pass 指令实现代理。把域名代理到集群名上面
        proxy_pass http://nodeStatic;
        proxy_redirect off;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关闭nginx版本号露出" tabindex="-1"><a class="header-anchor" href="#关闭nginx版本号露出"><span>关闭<code>nginx</code>版本号露出</span></a></h3><p>安装完毕后，检查下<code>Nginx</code>的版本：<code>nginx -v</code></p><p>这个版本号通常可以在 Web 端的 header 里看到。安全起见，可以通过配置隐藏掉，如下打开<code>nginx.conf</code>文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/nginx/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把<code>nginx.conf</code>文件中的<code>server_tokens on</code>改成<code>server_tokens off</code>就可以了</p><p>有的配置里没有<code>server_tokens on</code>的 直接添加<code>server_tokens off</code>即可</p><h2 id="免费ssl证书启用" tabindex="-1"><a class="header-anchor" href="#免费ssl证书启用"><span>免费<code>SSL</code>证书启用</span></a></h2>`,35),m=s(`<p>这里使用<code>Certbot</code>获取证书,以下操作适用于<code>ubuntu + nginx</code>,其他环境可以参考<a href="https://certbot.eff.org/" target="_blank" rel="noopener noreferrer">Certbot官网</a></p><p>1.安装<code>snapd</code>,通过<code>snapd</code>安装<code>certbot</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 安装snapd</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> snapd

<span class="token comment"># 安装certbot</span>
<span class="token comment"># 在安装 Certbot 之前，最好先移除历史快照。</span>
<span class="token function">sudo</span> <span class="token function">apt</span> remove certbot
<span class="token comment"># 安装</span>
<span class="token function">sudo</span> snap <span class="token function">install</span> <span class="token parameter variable">--classic</span> certbot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.生成证书</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 自动配置</span>
<span class="token function">sudo</span> certbot <span class="token parameter variable">--nginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>安装完成<code>cerbot</code>后,执行<code>apt update</code>可能会遇到以下问题:</p><p><code>E: The repository &#39;http://ppa.launchpad.net/certbot/certbot/ubuntu focal Release&#39; does not have a Release file</code></p><p>执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> apt-add-repository <span class="token parameter variable">-r</span> ppa:certbot/certbot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后再更新</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="安装-2" tabindex="-1"><a class="header-anchor" href="#安装-2"><span>安装</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> certbot <span class="token parameter variable">--nginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行上面的命令后会提示你输入你的邮箱，会检测到你nginx配置的域名，选择你要生成证书的域名序号即可；还会提示你是否在用户使用http访问的时候自动跳转到https访问，序号1是不跳转，序号2是自动跳转，建议选2</p><p>其他操作根据提示进行.</p><p>每次生成的证书有效期是90天，到期后需要重新申请，如果你想在证书到期前自动续订可以执行</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> certbot renew --dry-run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样certbot会在证书到期时自动帮你续订证书，这就相当于你有了永久的免费SSL证书了</p><h2 id="ufw防火墙" tabindex="-1"><a class="header-anchor" href="#ufw防火墙"><span><code>UFW</code>防火墙</span></a></h2><p><code>Ubuntu</code>随附了一个称为<code>UFW</code>的防火墙配置工具。</p><p>防火墙是用于监控和过滤传入和传出网络流量的工具。 它通过定义一组确定是允许还是阻止特定流量的安全规则来工作</p><p>常用操作</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ufw

<span class="token comment"># 检查 UFW 状态</span>
<span class="token function">sudo</span> ufw status verbose
<span class="token comment"># 您可以通过键入以下命令列出服务器上所有可用的应用程序配置文件</span>
<span class="token function">sudo</span> ufw app list
<span class="token comment"># 要查找指定配置文件包含的防火墙规则详细信息，请使用以下命令：</span>
<span class="token function">sudo</span> ufw app info <span class="token string">&#39;Nginx Full&#39;</span>

<span class="token comment"># 启用UFW</span>
<span class="token comment"># 如果要从远程位置连接到Ubuntu，在启用UFW防火墙之前，必须明确允许SSH的连接。 否则，您将无法连接到计算机。要将您的UFW防火墙配置为允许SSH的连接，请键入以下命令：</span>
<span class="token function">sudo</span> ufw allow <span class="token function">ssh</span>

<span class="token comment"># 禁用</span>
<span class="token function">sudo</span> ufw disable
<span class="token comment"># 启用</span>
<span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li>[1] <a href="https://segmentfault.com/a/1190000016555800" target="_blank" rel="noopener noreferrer">10分钟搭建ubuntu+nodejs+pm2自动部署+nginx+永久免费SSL证书+mongodb自动部署环境</a></li><li>[2] <a href="https://segmentfault.com/a/1190000024552266" target="_blank" rel="noopener noreferrer">如何自动申请免费的SSL 证书</a></li><li>[3] <a href="http://blog.cngal.org/index.php?controller=post&amp;action=view&amp;id_post=10" target="_blank" rel="noopener noreferrer">Let’s Encrypt免费SSL证书获取以及自动续签</a></li><li>[4] <a href="https://www.myfreax.com/how-to-setup-a-firewall-with-ufw-on-ubuntu-20-04/" target="_blank" rel="noopener noreferrer">如何在Ubuntu 20.04上使用UFW配置防火墙</a></li></ul>`,20);function h(b,g){const a=i("RouteLink"),l=i("Badge");return r(),c("div",null,[u,o("p",null,[n("可以参考之前的"),e(a,{to:"/dev-tools/mirror_source.html#pnpm"},{default:t(()=>[n("教程")]),_:1})]),v,e(l,{text:"tip",type:"tip"}),n("如有需求泛域名证书申请安装及配置的可以参考这篇"),e(a,{to:"/website_build/domainNameSSL.html"},{default:t(()=>[n("教程")]),_:1}),m])}const k=d(p,[["render",h],["__file","environment_server.html.vue"]]),_=JSON.parse('{"path":"/website_build/environment_server.html","title":"环境服务配置","lang":"zh-CN","frontmatter":{"article":false,"description":"环境服务配置 一台安装有node和nginx的linux服务器,这里用的linux发行版是ubuntu git 可以通过git version命令查看版本号,如果没有则没有安装 安装 配置 生成ssh密钥 进入~/.ssh文件夹，输入 复制公钥并在github中配置SSH公钥 测试连接 安装Node.js 推荐使用pnpm安装和管理Node.js 可以...","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/website_build/environment_server.html"}],["meta",{"property":"og:site_name","content":"Kamishima-kaede"}],["meta",{"property":"og:title","content":"环境服务配置"}],["meta",{"property":"og:description","content":"环境服务配置 一台安装有node和nginx的linux服务器,这里用的linux发行版是ubuntu git 可以通过git version命令查看版本号,如果没有则没有安装 安装 配置 生成ssh密钥 进入~/.ssh文件夹，输入 复制公钥并在github中配置SSH公钥 测试连接 安装Node.js 推荐使用pnpm安装和管理Node.js 可以..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-18T09:36:17.000Z"}],["meta",{"property":"article:author","content":"kamishima-kaede"}],["meta",{"property":"article:modified_time","content":"2022-11-18T09:36:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"环境服务配置\\",\\"description\\":\\"环境服务配置 一台安装有node和nginx的linux服务器,这里用的linux发行版是ubuntu git 可以通过git version命令查看版本号,如果没有则没有安装 安装 配置 生成ssh密钥 进入~/.ssh文件夹，输入 复制公钥并在github中配置SSH公钥 测试连接 安装Node.js 推荐使用pnpm安装和管理Node.js 可以...\\"}"]]},"headers":[{"level":2,"title":"git","slug":"git","link":"#git","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"生成ssh密钥","slug":"生成ssh密钥","link":"#生成ssh密钥","children":[]},{"level":3,"title":"测试连接","slug":"测试连接","link":"#测试连接","children":[]}]},{"level":2,"title":"安装Node.js","slug":"安装node-js","link":"#安装node-js","children":[]},{"level":2,"title":"Nginx","slug":"nginx","link":"#nginx","children":[{"level":3,"title":"安装","slug":"安装-1","link":"#安装-1","children":[]},{"level":3,"title":"添加虚拟机配置","slug":"添加虚拟机配置","link":"#添加虚拟机配置","children":[]},{"level":3,"title":"nginx反向代理配置","slug":"nginx反向代理配置","link":"#nginx反向代理配置","children":[]},{"level":3,"title":"关闭nginx版本号露出","slug":"关闭nginx版本号露出","link":"#关闭nginx版本号露出","children":[]}]},{"level":2,"title":"免费SSL证书启用","slug":"免费ssl证书启用","link":"#免费ssl证书启用","children":[{"level":3,"title":"安装","slug":"安装-2","link":"#安装-2","children":[]}]},{"level":2,"title":"UFW防火墙","slug":"ufw防火墙","link":"#ufw防火墙","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1655200609000,"updatedTime":1668764177000,"contributors":[{"name":"shiki","email":"kamiacgxu@gmail.com","commits":3}]},"readingTime":{"minutes":5.93,"words":1779},"filePathRelative":"website_build/environment_server.md","localizedDate":"2022年6月14日","excerpt":"\\n<p>一台安装有<code>node</code>和<code>nginx</code>的<code>linux</code>服务器,这里用的<code>linux</code>发行版是<code>ubuntu</code></p>\\n<h2><code>git</code></h2>\\n<p>可以通过<code>git version</code>命令查看版本号,如果没有则没有安装</p>\\n<h3>安装</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">sudo</span> <span class=\\"token function\\">apt</span> update\\n<span class=\\"token function\\">sudo</span> <span class=\\"token function\\">apt</span> <span class=\\"token function\\">install</span> <span class=\\"token function\\">git</span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,_ as data};
