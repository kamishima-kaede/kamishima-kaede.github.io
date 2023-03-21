import{_ as n,W as s,X as e,$ as i}from"./framework-18b71f17.js";const a="/assets/001-490c6958.png",l={},c=i('<p><img src="'+a+`" alt="docker常用命令"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>




<span class="token comment"># 当前 shell 下 attach 连接指定运行镜像</span>
attach
<span class="token comment"># 通过 Dockerfile 定制镜像 </span>
build
<span class="token comment"># 提交当前容器为新的镜像 </span>
commit
<span class="token comment"># 从容器中拷贝指定文件或者目录到宿主机中</span>
<span class="token function">cp</span>
<span class="token comment"># 创建一个新的容器，同 run，但不启动容器 </span>
create
<span class="token comment"># 查看 docker 容器变化           </span>
<span class="token function">diff</span>
<span class="token comment"># 从 docker 服务获取容器实时事件</span>
events
<span class="token comment"># 在已存在的容器上运行命令</span>
<span class="token builtin class-name">exec</span>
<span class="token comment"># 导出容器的内容流作为一个 tar 归档文件[对应 import ]</span>
<span class="token builtin class-name">export</span>
<span class="token comment"># 展示一个镜像形成历史</span>
<span class="token function">history</span>
<span class="token comment"># 列出系统当前镜像</span>
images
<span class="token comment"># 从tar包中的内容创建一个新的文件系统映像[对应export]</span>
<span class="token function">import</span>
<span class="token comment"># 显示系统相关信息</span>
info
<span class="token comment"># 查看容器详细信息</span>
inspect
<span class="token comment"># kill 指定 docker 容器</span>
<span class="token function">kill</span>
<span class="token comment"># 从一个 tar 包中加载一个镜像[对应 save]</span>
load
<span class="token comment"># 注册或者登陆一个 docker 源服务器</span>
login
<span class="token comment"># 从当前 Docker registry 退出</span>
<span class="token builtin class-name">logout</span>
<span class="token comment"># 输出当前容器日志信息</span>
logs
<span class="token comment"># 查看映射端口对应的容器内部源端口</span>
port
<span class="token comment"># 暂停容器</span>
pause
<span class="token comment"># 列出容器列表</span>
<span class="token function">ps</span>
<span class="token comment"># 从docker镜像源服务器拉取指定镜像或者库镜像</span>
pull
<span class="token comment"># 推送指定镜像或者库镜像至docker源服务器</span>
push
<span class="token comment"># 重启运行的容器</span>
restart
<span class="token comment"># 移除一个或者多个容器</span>
<span class="token function">rm</span>
<span class="token comment"># 移除一个或多个镜像[无容器使用该镜像才可删除，否则需删除相关容器才可继续或 -f 强制删除]</span>
rmi
<span class="token comment"># 创建一个新的容器并运行一个命令</span>
run
<span class="token comment"># 保存一个镜像为一个 tar 包[对应 load]</span>
save
<span class="token comment"># 在 docker hub 中搜索镜像</span>
search
<span class="token comment"># 启动容器</span>
start
<span class="token comment"># 停止容器</span>
stop
<span class="token comment"># 给源中镜像打标签</span>
tag
<span class="token comment"># 查看容器中运行的进程信息</span>
<span class="token function">top</span>
<span class="token comment"># 取消暂停容器</span>
unpause
<span class="token comment"># 查看 docker 版本号</span>
version
<span class="token comment"># 截取容器停止时的退出状态值</span>
<span class="token function">wait</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[c];function m(v,t){return s(),e("div",null,d)}const r=n(l,[["render",m],["__file","commomCmds.html.vue"]]);export{r as default};
