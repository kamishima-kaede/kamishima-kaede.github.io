import{_ as o,X as r,Y as p,$ as n,a0 as e,Z as s,a3 as t,a2 as i,E as d}from"./framework-bc3ecc8f.js";const u={},v=i(`<h1 id="环境服务配置" tabindex="-1"><a class="header-anchor" href="#环境服务配置" aria-hidden="true">#</a> 环境服务配置</h1><p>一台安装有<code>node</code>和<code>nginx</code>的<code>linux</code>服务器,这里用的<code>linux</code>发行版是<code>ubuntu</code></p><h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> <code>git</code></h2><p>可以通过<code>git version</code>命令查看版本号,如果没有则没有安装</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;用户名&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;邮箱地址&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成ssh密钥" tabindex="-1"><a class="header-anchor" href="#生成ssh密钥" aria-hidden="true">#</a> 生成ssh密钥</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-C</span> <span class="token string">&#39;you email address@gmail.com&#39;</span> <span class="token parameter variable">-t</span> rsa
<span class="token comment"># 会在用户目录~/.ssh/下建立相应的密钥文件。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>进入<code>~/.ssh</code>文件夹，输入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打开id_rsa.pub文件，复制其中所有内容。</span>
<span class="token function">cat</span> id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>复制公钥并在github中配置SSH公钥</p><h3 id="测试连接" tabindex="-1"><a class="header-anchor" href="#测试连接" aria-hidden="true">#</a> 测试连接</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装node-js" tabindex="-1"><a class="header-anchor" href="#安装node-js" aria-hidden="true">#</a> 安装<code>Node.js</code></h2>`,16),m={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"node",-1),h=n("s",null,[e("安装"),n("code",null,"nvm")],-1),g=n("br",null,null,-1),f={href:"https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh",target:"_blank",rel:"noopener noreferrer"},_=n("br",null,null,-1),x=n("s",null,"或者",-1),k=n("br",null,null,-1),w={href:"https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh",target:"_blank",rel:"noopener noreferrer"},y={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"Node.js",-1),q=i(`<h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> <code>Nginx</code></h2><h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h3><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>常用命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动服务</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加虚拟机配置" tabindex="-1"><a class="header-anchor" href="#添加虚拟机配置" aria-hidden="true">#</a> 添加虚拟机配置</h3><p>切到<code>nginx</code>配置目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/nginx/conf.d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新建虚拟机配置文件,推荐使用网站域名作为文件名新建文件.</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>例如该配置是为域名为<code>fuckqq.com</code>服务的,那么文件名为<code>fuckqq.com.conf</code>,如果有多个域名配置这么命名方便以后维护</p></div><p>配置参考,根据自身实际情况修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存配置后,执行检查配置命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> nginx <span class="token parameter variable">-t</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果提起错误信息,请善用搜索引擎解决</p><p>最后重启<code>nginx</code>服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nginx反向代理配置" tabindex="-1"><a class="header-anchor" href="#nginx反向代理配置" aria-hidden="true">#</a> <code>nginx</code>反向代理配置</h3><p>原理:</p><p>首先当端口是80的时候， 域名访问的时候 是可以省略端口的，直接域名访问，<code>nginx</code>会监听80端口，同时根据不同的域名，把流量分配给<code>Node</code>相应的端口服务。</p>`,21),z={href:"https://www.cnblogs.com/taostaryu/p/10547132.html",target:"_blank",rel:"noopener noreferrer"},N=i(`<p>配置:</p><p>在<code>/etc/nginx/conf.d</code>文件夹下面新增一个配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/nginx/conf.d/fuckqq-5000.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>文件命名可以用上面的命名方式，看一下配置文件，便知道是哪个域名对应到哪个端口。</p><p>因为将来可能会有多个项目对应服务器后端的多个服务，所以要考虑这种负载均衡的这种场景。这时候通过以下配置来实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 通过 upstream 我们可以设定一个简单的负载均衡策略，以应对将来可能的升级
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关闭nginx版本号露出" tabindex="-1"><a class="header-anchor" href="#关闭nginx版本号露出" aria-hidden="true">#</a> 关闭<code>nginx</code>版本号露出</h3><p>安装完毕后，检查下<code>Nginx</code>的版本：<code>nginx -v</code></p><p>这个版本号通常可以在 Web 端的 header 里看到。安全起见，可以通过配置隐藏掉，如下打开<code>nginx.conf</code>文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/nginx/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把<code>nginx.conf</code>文件中的<code>server_tokens on</code>改成<code>server_tokens off</code>就可以了</p><p>有的配置里没有<code>server_tokens on</code>的 直接添加<code>server_tokens off</code>即可</p><h2 id="免费ssl证书启用" tabindex="-1"><a class="header-anchor" href="#免费ssl证书启用" aria-hidden="true">#</a> 免费<code>SSL</code>证书启用</h2>`,13),j=n("code",null,"Certbot",-1),L=n("code",null,"ubuntu + nginx",-1),U={href:"https://certbot.eff.org/",target:"_blank",rel:"noopener noreferrer"},F=i(`<p>1.安装<code>snapd</code>,通过<code>snapd</code>安装<code>certbot</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装snapd</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> snapd

<span class="token comment"># 安装certbot</span>
<span class="token comment"># 在安装 Certbot 之前，最好先移除历史快照。</span>
<span class="token function">sudo</span> <span class="token function">apt</span> remove certbot
<span class="token comment"># 安装</span>
<span class="token function">sudo</span> snap <span class="token function">install</span> <span class="token parameter variable">--classic</span> certbot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.生成证书</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 自动配置</span>
<span class="token function">sudo</span> certbot <span class="token parameter variable">--nginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>安装完成<code>cerbot</code>后,执行<code>apt update</code>可能会遇到以下问题:</p><p><code>E: The repository &#39;http://ppa.launchpad.net/certbot/certbot/ubuntu focal Release&#39; does not have a Release file</code></p><p>执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> apt-add-repository <span class="token parameter variable">-r</span> ppa:certbot/certbot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后再更新</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="安装-2" tabindex="-1"><a class="header-anchor" href="#安装-2" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> certbot <span class="token parameter variable">--nginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行上面的命令后会提示你输入你的邮箱，会检测到你nginx配置的域名，选择你要生成证书的域名序号即可；还会提示你是否在用户使用http访问的时候自动跳转到https访问，序号1是不跳转，序号2是自动跳转，建议选2</p><p>其他操作根据提示进行.</p><p>每次生成的证书有效期是90天，到期后需要重新申请，如果你想在证书到期前自动续订可以执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> certbot renew --dry-run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样certbot会在证书到期时自动帮你续订证书，这就相当于你有了永久的免费SSL证书了</p><h2 id="ufw防火墙" tabindex="-1"><a class="header-anchor" href="#ufw防火墙" aria-hidden="true">#</a> <code>UFW</code>防火墙</h2><p><code>Ubuntu</code>随附了一个称为<code>UFW</code>的防火墙配置工具。</p><p>防火墙是用于监控和过滤传入和传出网络流量的工具。 它通过定义一组确定是允许还是阻止特定流量的安全规则来工作</p><p>常用操作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,18),C={href:"https://segmentfault.com/a/1190000016555800",target:"_blank",rel:"noopener noreferrer"},W={href:"https://segmentfault.com/a/1190000024552266",target:"_blank",rel:"noopener noreferrer"},E={href:"http://blog.cngal.org/index.php?controller=post&action=view&id_post=10",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.myfreax.com/how-to-setup-a-firewall-with-ufw-on-ubuntu-20-04/",target:"_blank",rel:"noopener noreferrer"};function P(B,R){const a=d("ExternalLinkIcon"),l=d("RouterLink"),c=d("Badge");return r(),p("div",null,[v,n("p",null,[n("s",null,[e("推荐使"),n("a",m,[e("nvm"),s(a)]),e("版本管理工具管理"),b,e("版本")])]),n("p",null,[h,g,n("s",null,[e("curl -o- "),n("a",f,[e("https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh"),s(a)]),e(" | bash")]),_,x,k,n("s",null,[e("wget -qO- "),n("a",w,[e("https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh"),s(a)]),e(" | bash")])]),n("p",null,[e("推荐使用"),n("a",y,[e("pnpm"),s(a)]),e("安装和管理"),S]),n("p",null,[e("可以参考之前的"),s(l,{to:"/dev-tools/mirror_source.html#pnpm"},{default:t(()=>[e("教程")]),_:1})]),q,n("p",null,[e("补充知识点："),n("a",z,[e("正向代理反向代理的区别"),s(a)])]),N,s(c,{text:"tip",type:"tip"}),e("如有需求泛域名证书申请安装及配置的可以参考这篇"),s(l,{to:"/website_build/domainNameSSL.html"},{default:t(()=>[e("教程")]),_:1}),n("p",null,[e("这里使用"),j,e("获取证书,以下操作适用于"),L,e(",其他环境可以参考"),n("a",U,[e("Certbot官网"),s(a)])]),F,n("ul",null,[n("li",null,[e("[1] "),n("a",C,[e("10分钟搭建ubuntu+nodejs+pm2自动部署+nginx+永久免费SSL证书+mongodb自动部署环境"),s(a)])]),n("li",null,[e("[2] "),n("a",W,[e("如何自动申请免费的SSL 证书"),s(a)])]),n("li",null,[e("[3] "),n("a",E,[e("Let’s Encrypt免费SSL证书获取以及自动续签"),s(a)])]),n("li",null,[e("[4] "),n("a",I,[e("如何在Ubuntu 20.04上使用UFW配置防火墙"),s(a)])])])])}const X=o(u,[["render",P],["__file","environment_server.html.vue"]]);export{X as default};
