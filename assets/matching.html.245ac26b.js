import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,e as t}from"./app.bd6a4d16.js";const e={},l=t(`<h1 id="\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#\u5339\u914D" aria-hidden="true">#</a> \u5339\u914D</h1><h2 id="_1-\u6A21\u7CCA\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#_1-\u6A21\u7CCA\u5339\u914D" aria-hidden="true">#</a> 1. \u6A21\u7CCA\u5339\u914D</h2><p>\u5339\u914D\u957F\u5EA6\u4E0D\u56FA\u5B9A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> reg1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">ab{2,5}c</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;abc abbc abbbc abbbbc abbbbbc abbbbbbc&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;abbc&#39;, &#39;abbbc&#39;, &#39;abbbbc&#39;, &#39;abbbbbc&#39; ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5339\u914D\u56FA\u5B9A\u957F\u5EA6,\u53EF\u4EE5\u662F\u4E0D\u56FA\u5B9A\u5B57\u7B26</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> reg2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a[123]b</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">&quot;a0b a1b a2b a3b a4b&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> str2<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg2<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;a1b&#39;, &#39;a2b&#39;, &#39;a3b&#39; ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u5B57\u7B26\u7C7B" tabindex="-1"><a class="header-anchor" href="#_2-\u5B57\u7B26\u7C7B" aria-hidden="true">#</a> 2. \u5B57\u7B26\u7C7B</h2><p><code>[]</code>\u5305\u88F9\u7684\u5185\u5BB9\u53EB\u5B57\u7B26\u7C7B,\u4F46\u662F\u53EA\u5339\u914D\u5176\u4E2D\u4E00\u4E2A</p><p><code>[abc]</code>,\u8868\u793A\u5339\u914D\u4E00\u4E2A\u5B57\u7B26,\u53EF\u4EE5\u662F&#39;a&#39;,&#39;b&#39;,&#39;c&#39;\u4E4B\u4E00</p><h3 id="_2-1-\u8303\u56F4\u8868\u793A\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-1-\u8303\u56F4\u8868\u793A\u6CD5" aria-hidden="true">#</a> 2.1. \u8303\u56F4\u8868\u793A\u6CD5</h3><p>\u6BD4\u5982[123456abcdXYZ],\u53EF\u4EE5\u4F7F\u7528<code>-</code>\u7B80\u5199\u6210[1-6a-dX-Z]</p><p>\u5982\u679C\u8981\u5339\u914D&#39;-&#39;\u5B57\u7B26,\u53EF\u4EE5\u4F7F\u7528&#39;&#39;\u8F6C\u4E49</p><h3 id="_2-2-\u6392\u9664\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6392\u9664\u5B57\u7B26" aria-hidden="true">#</a> 2.2. \u6392\u9664\u5B57\u7B26</h3><p>\u5982\u4E0B\u793A\u4F8B[^123],\u8868\u793A\u6392\u96641,2,3\u4E4B\u5916\u7684\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> reg2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a[^123]b</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">&quot;a0b a1b a2b a3b a4b&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> str2<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg2<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;a0b&#39;, &#39;a4b&#39; ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u5E38\u89C1\u7B80\u5199" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5E38\u89C1\u7B80\u5199" aria-hidden="true">#</a> 2.3. \u5E38\u89C1\u7B80\u5199</h3><table><thead><tr><th style="text-align:left;">\u5B57\u7B26\u7EC4</th><th style="text-align:left;">\u5177\u4F53\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:left;">\\d</td><td style="text-align:left;">\u8868\u793A [0-9]\u3002\u8868\u793A\u662F\u4E00\u4F4D\u6570\u5B57\u3002\u8BB0\u5FC6\u65B9\u5F0F\uFF1A\u5176\u82F1\u6587\u662F digit\uFF08\u6570\u5B57\uFF09\u3002</td></tr><tr><td style="text-align:left;">\\D</td><td style="text-align:left;">\u8868\u793A [^0-9]\u3002\u8868\u793A\u9664\u6570\u5B57\u5916\u7684\u4EFB\u610F\u5B57\u7B26\u3002</td></tr><tr><td style="text-align:left;">\\w</td><td style="text-align:left;">\u8868\u793A [0-9a-zA-Z_]\u3002\u8868\u793A\u6570\u5B57\u3001\u5927\u5C0F\u5199\u5B57\u6BCD\u548C\u4E0B\u5212\u7EBF\u3002\u8BB0\u5FC6\u65B9\u5F0F\uFF1Aw \u662F word \u7684\u7B80\u5199\uFF0C\u4E5F\u79F0\u5355\u8BCD\u5B57\u7B26\u3002</td></tr><tr><td style="text-align:left;">\\W</td><td style="text-align:left;">\u8868\u793A [^0-9a-zA-Z_]\u3002\u975E\u5355\u8BCD\u5B57\u7B26\u3002</td></tr><tr><td style="text-align:left;">\\s</td><td style="text-align:left;">\u8868\u793A [ \\t\\v\\n\\r\\f]\u3002\u8868\u793A\u7A7A\u767D\u7B26\uFF0C\u5305\u62EC\u7A7A\u683C\u3001\u6C34\u5E73\u5236\u8868\u7B26\u3001\u5782\u76F4\u5236\u8868\u7B26\u3001\u6362\u884C\u7B26\u3001\u56DE\u8F66\u7B26\u3001\u6362\u9875\u7B26\u3002\u8BB0\u5FC6\u65B9\u5F0F\uFF1As \u662F space \u7684\u9996\u5B57\u6BCD\uFF0C\u7A7A\u767D\u7B26\u7684\u5355\u8BCD\u662F white space\u3002</td></tr><tr><td style="text-align:left;">\\S</td><td style="text-align:left;">\u8868\u793A [^ \\t\\v\\n\\r\\f]\u3002 \u975E\u7A7A\u767D\u7B26\u3002</td></tr><tr><td style="text-align:left;">.</td><td style="text-align:left;">\u8868\u793A [^\\n\\r\\u2028\\u2029]\u3002\u901A\u914D\u7B26\uFF0C\u8868\u793A\u51E0\u4E4E\u4EFB\u610F\u5B57\u7B26\u3002\u6362\u884C\u7B26\u3001\u56DE\u8F66\u7B26\u3001\u884C\u5206\u9694\u7B26\u548C\u6BB5\u5206\u9694\u7B26\u9664\u5916\u3002\u8BB0\u5FC6\u65B9\u5F0F\uFF1A\u60F3\u60F3\u7701\u7565\u53F7 \u2026 \u4E2D\u7684\u6BCF\u4E2A\u70B9\uFF0C\u90FD\u53EF\u4EE5\u7406\u89E3\u6210\u5360\u4F4D\u7B26\uFF0C\u8868\u793A\u4EFB\u4F55\u7C7B\u4F3C\u7684\u4E1C\u897F\u3002</td></tr></tbody></table><p>\u5982\u679C\u8981\u5339\u914D\u4EFB\u610F\u5B57\u7B26\u600E\u4E48\u529E\uFF1F\u53EF\u4EE5\u4F7F\u7528 [\\d\\D]\u3001[\\w\\W]\u3001[\\s\\S] \u548C [^] \u4E2D\u4EFB\u4F55\u7684\u4E00\u4E2A\u3002</p><h2 id="_3-\u91CF\u8BCD" tabindex="-1"><a class="header-anchor" href="#_3-\u91CF\u8BCD" aria-hidden="true">#</a> 3. \u91CF\u8BCD</h2><h3 id="_3-1-\u7B80\u5199" tabindex="-1"><a class="header-anchor" href="#_3-1-\u7B80\u5199" aria-hidden="true">#</a> 3.1 \u7B80\u5199</h3><table><thead><tr><th style="text-align:left;">\u5B57\u7B26\u7EC4</th><th style="text-align:left;">\u5177\u4F53\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:left;">{m,}</td><td style="text-align:left;">\u8868\u793A\u81F3\u5C11\u51FA\u73B0 m \u6B21\u3002</td></tr><tr><td style="text-align:left;">{m}</td><td style="text-align:left;">\u7B49\u4EF7\u4E8E {m,m}\uFF0C\u8868\u793A\u51FA\u73B0 m \u6B21\u3002</td></tr><tr><td style="text-align:left;">?</td><td style="text-align:left;">\u7B49\u4EF7\u4E8E {0,1}\uFF0C\u8868\u793A\u51FA\u73B0\u6216\u8005\u4E0D\u51FA\u73B0\u3002\u8BB0\u5FC6\u65B9\u5F0F\uFF1A\u95EE\u53F7\u7684\u610F\u601D\u8868\u793A\uFF0C\u6709\u5417\uFF1F</td></tr><tr><td style="text-align:left;">+</td><td style="text-align:left;">\u7B49\u4EF7\u4E8E {1,}\uFF0C\u8868\u793A\u51FA\u73B0\u81F3\u5C11\u4E00\u6B21\u3002\u8BB0\u5FC6\u65B9\u5F0F\uFF1A\u52A0\u53F7\u662F\u8FFD\u52A0\u7684\u610F\u601D\uFF0C\u5F97\u5148\u6709\u4E00\u4E2A\uFF0C\u7136\u540E\u624D\u8003\u8651\u8FFD\u52A0\u3002</td></tr><tr><td style="text-align:left;">*</td><td style="text-align:left;">\u7B49\u4EF7\u4E8E {0,}\uFF0C\u8868\u793A\u51FA\u73B0\u4EFB\u610F\u6B21\uFF0C\u6709\u53EF\u80FD\u4E0D\u51FA\u73B0\u3002\u8BB0\u5FC6\u65B9\u5F0F\uFF1A\u770B\u770B\u5929\u4E0A\u7684\u661F\u661F\uFF0C\u53EF\u80FD\u4E00\u9897\u6CA1\u6709\uFF0C\u53EF\u80FD\u96F6\u6563\u6709\u51E0\u9897\uFF0C\u53EF\u80FD\u6570\u4E5F\u6570\u4E0D\u8FC7\u6765\u3002</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">\u60F0\u6027\u91CF\u8BCD</th><th style="text-align:left;">\u8D2A\u5A6A\u91CF\u8BCD</th></tr></thead><tbody><tr><td style="text-align:left;">{m,n}?</td><td style="text-align:left;">{m,n}</td></tr><tr><td style="text-align:left;">{m,n}?</td><td style="text-align:left;">{m,n}</td></tr><tr><td style="text-align:left;">??</td><td style="text-align:left;">?</td></tr><tr><td style="text-align:left;">+?</td><td style="text-align:left;">+</td></tr><tr><td style="text-align:left;">*?</td><td style="text-align:left;">*</td></tr></tbody></table><p>\u8D2A\u5A6A\u5339\u914D:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> reg3 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d{2,5}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str3 <span class="token operator">=</span> <span class="token string">&quot;123 1234 12345 123456&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> str3<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg3<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;123&#39;, &#39;1234&#39;, &#39;12345&#39;, &#39;12345&#39; ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u60F0\u6027\u5339\u914D:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> reg3 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d{2,5}?</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str3 <span class="token operator">=</span> <span class="token string">&quot;123 1234 12345 123456&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> str3<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg3<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;12&#39;, &#39;12&#39;, &#39;34&#39;, &#39;12&#39;, &#39;34&#39;, &#39;12&#39;, &#39;34&#39;, &#39;56&#39; ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_4-\u5206\u652F" aria-hidden="true">#</a> 4. \u5206\u652F</h2><p>\u4E00\u4E2A\u6A21\u5F0F\u53EF\u4EE5\u5B9E\u73B0\u6A2A\u5411\u548C\u7EB5\u5411\u6A21\u7CCA\u5339\u914D\u3002\u800C\u591A\u9009\u5206\u652F\u53EF\u4EE5\u652F\u6301\u591A\u4E2A\u5B50\u6A21\u5F0F\u4EFB\u9009\u5176\u4E00\u3002</p><p>\u4F7F\u7528\u7BA1\u9053\u7B26<code>|</code>\u8868\u793A\u3002\u5982\uFF1A(p1|p2|p3)\uFF0C\u5176\u4E2D p1\u3001p2 \u548C p3 \u662F\u5B50\u6A21\u5F0F\uFF0C\u4F8B\u5982\u8981\u5339\u914D\u5B57\u7B26\u4E32 &quot;good&quot; \u548C &quot;nice&quot; \u53EF\u4EE5\u4F7F\u7528 /good|nice/\u3002</p>`,29),p=[l];function c(o,i){return n(),s("div",null,p)}var u=a(e,[["render",c],["__file","matching.html.vue"]]);export{u as default};