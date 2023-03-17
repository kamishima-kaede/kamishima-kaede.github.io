import{_ as n,W as s,X as a,$ as e}from"./framework-18b71f17.js";const i={},l=e(`<h2 id="文件相关操作" tabindex="-1"><a class="header-anchor" href="#文件相关操作" aria-hidden="true">#</a> 文件相关操作</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">pwd</span> <span class="token comment"># print working directory（打印工作目录）</span>

<span class="token function">ls</span> <span class="token comment"># 当前位置文件和目录 list 的简写</span>

<span class="token function">ls</span> <span class="token parameter variable">-a</span> <span class="token comment"># 命令的参数-a 是--all 的简写，意思是列出所有文件，包括不加任何参数的ls 能够列出的文件和以. 开头的文件，即隐藏（hidden）文件</span>

<span class="token builtin class-name">cd</span> <span class="token comment"># change directory 切换目录</span>

<span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token comment"># 参数-l，意思是输出文件的详细内容（long listing format）</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /etc/sudoers <span class="token comment"># 可查看该文件的所有者</span>

<span class="token function">cat</span> /etc/sudoers <span class="token comment"># 查看文件内容</span>
                 <span class="token comment"># sudo 免密时间长度由 /etc/sudoers 文件中的 timestamp_timeout 参数确定</span>
<span class="token function">less</span> <span class="token comment"># j键向下 k键向上</span>
<span class="token function">head</span> <span class="token comment"># 打印文本前10行</span>
<span class="token function">tail</span> <span class="token comment"># 打印文本最后10行</span>
<span class="token function">wc</span> <span class="token parameter variable">-l</span> <span class="token comment"># 统计文本行数</span>
<span class="token function">file</span> <span class="token comment"># 常看文件类型</span>

<span class="token comment"># 重定向：将命令行的结果输出保存到文件</span>
<span class="token function">ls</span> /bin <span class="token operator">&gt;</span> ~/file_list.txt
<span class="token comment"># 管道（pipe）：将前面命令的输出变成后面命令的输入</span>
<span class="token function">ls</span> /bin <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>

<span class="token function">mkdir</span> <span class="token comment"># 创建目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-v</span> <span class="token comment"># 返回执行成功的信息</span>

<span class="token comment"># vim文本编辑器</span>
<span class="token comment"># - 标准模式 </span>
<span class="token comment"># - 插入模式：在标准模式下按 i 进入</span>
<span class="token comment"># - 命令模式：在标准模式下按 ESC 进入</span>

<span class="token function">cp</span> a b <span class="token comment"># 复制文件</span>
<span class="token function">cp</span> <span class="token parameter variable">-r</span> a b <span class="token comment"># 复制文件夹 -r =&gt; recursive 从顶层到下面，递归复制</span>
<span class="token comment"># mv 命令不会区别对待文件和目录</span>

<span class="token comment"># 技巧：使用 vi 编辑一个没有权限的文件后如何保存？</span>
<span class="token comment"># :wq /tem/a 将文件保存至 tem 文件夹中，因为任何人都有 tmp 文件夹的权限</span>
<span class="token comment"># 最后使用 sudo cp 命令复制替换</span>

<span class="token function">rm</span> a <span class="token comment"># 删除文件</span>
<span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token comment"># 递归删除文件</span>
<span class="token function">rm</span> <span class="token parameter variable">-i</span> <span class="token comment"># 谨慎删除</span>
<span class="token function">rm</span> <span class="token parameter variable">-ri</span> <span class="token comment"># -r -i 简写</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token comment"># 强制删除</span>

<span class="token function">touch</span> a.txt <span class="token comment"># 创建新文件，也可以用来更新新文件时间戳</span>

<span class="token comment"># linux 每个命令都会返回一个证书，叫做返回值（exit status），每次执行完一个命令后紧接着运行 echo $? 就可以查看上个命令的返回值</span>
<span class="token comment"># - 0 表示命令正常结束</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[l];function t(p,o){return s(),a("div",null,c)}const d=n(i,[["render",t],["__file","fileCcommand.html.vue"]]);export{d as default};
