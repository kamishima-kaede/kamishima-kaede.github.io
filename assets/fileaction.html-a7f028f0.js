import{_ as n,W as s,X as a,Y as t,Z as e,$ as p}from"./framework-47d528cb.js";const o={},c=e("p",null,"在项目中经常会遇到文件的上传下载需求，在这边总结归纳一下常用的方法。",-1),i=p(`<h2 id="纯前端下载模版文件" tabindex="-1"><a class="header-anchor" href="#纯前端下载模版文件" aria-hidden="true">#</a> 纯前端下载模版文件</h2><p>有时我们会遇到偷懒的后端同事，下载简单模板类的需求不愿意写接口，直接甩给前端同事做。对于这种需求也不是很复杂。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getTemplateFile</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> origin <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>origin
  <span class="token comment">// 假设下载的文件静态路径</span>
  <span class="token keyword">const</span> templateFile <span class="token operator">=</span> <span class="token string">&#39;/template/template.doc&#39;</span>
  <span class="token keyword">const</span> fileUrl <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>origin<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>templateFile<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token keyword">const</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
  link<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>
  link<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">,</span> fileUrl<span class="token punctuation">)</span>
  link<span class="token punctuation">.</span>download <span class="token operator">=</span> <span class="token string">&#39;下载的文件名&#39;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span>
  link<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过接口下载文件" tabindex="-1"><a class="header-anchor" href="#通过接口下载文件" aria-hidden="true">#</a> 通过接口下载文件</h2><p>对于<code>GET</code>请求的借口，最常用的是<code>window.open(url)</code></p>`,5);function l(u,r){return s(),a("div",null,[c,t(" more "),i])}const d=n(o,[["render",l],["__file","fileaction.html.vue"]]);export{d as default};
