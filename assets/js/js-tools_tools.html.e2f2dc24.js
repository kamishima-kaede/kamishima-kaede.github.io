"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[1885],{8887:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>k,data:()=>e});var h=a(6352);const n=(0,h.Lk)("p",null,[(0,h.eW)("日常开发学习过程中积累的"),(0,h.Lk)("code",null,"javascript")],-1),t=(0,h.Fv)('<h2 id="工具函数" tabindex="-1"><a class="header-anchor" href="#工具函数"><span>工具函数</span></a></h2><h3 id="获取对象类型" tabindex="-1"><a class="header-anchor" href="#获取对象类型"><span>获取对象类型</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> classof</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">o</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">o</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="质数" tabindex="-1"><a class="header-anchor" href="#质数"><span>质数</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 返回一个小于 `max` 的质数列表</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> getPrimes</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">max</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> isPrime</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({ </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">max</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  isPrime</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> isPrime</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  isPrime</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> max</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">isPrime</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">      for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> **</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> max</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        isPrime</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">isPrime</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">entries</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(([, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">isPrime</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> isPrime</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(([</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取cookie" tabindex="-1"><a class="header-anchor" href="#获取cookie"><span>获取<code>cookie</code></span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 得到名为 test2 的 cookie</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> myCookie</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">cookie</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">  /(?:(?:</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">^</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#D19A66;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">\\s</span><span style="--shiki-light:#D73A49;--shiki-dark:#D19A66;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">)test2</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">\\s</span><span style="--shiki-light:#D73A49;--shiki-dark:#D19A66;">*</span><span style="--shiki-light:#22863A;--shiki-dark:#56B6C2;--shiki-light-font-weight:bold;--shiki-dark-font-weight:inherit;">\\=</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">\\s</span><span style="--shiki-light:#D73A49;--shiki-dark:#D19A66;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">;]</span><span style="--shiki-light:#D73A49;--shiki-dark:#D19A66;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#D19A66;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#D19A66;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  &quot;$1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用api对比" tabindex="-1"><a class="header-anchor" href="#常用api对比"><span>常用<code>api</code>对比</span></a></h2><h3 id="array" tabindex="-1"><a class="header-anchor" href="#array"><span><code>Array</code></span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Array构造函数无法创建只包含一个数值元素的数组</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Array.of()可以解决如上问题</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Array.from()将可迭代对象或类数组转为数组</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Array.fromAsync()</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//  1.依次等待对象中产生的每个值兑现；</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//  2.惰性迭代可迭代对象，并且不会获取下一个值，直到当前值被兑现。</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Promise.all()</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//  1.并行等待所有值兑现；</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//  2.预先获取所有值并等待它们全部兑现。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="与object-js" tabindex="-1"><a class="header-anchor" href="#与object-js"><span><code>===</code>与<code>Object.js()</code></span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Object.is() 和 === 之间的唯一区别在于它们处理带符号的 0 和 NaN 值的时候</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">NaN</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> NaN</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // false</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // true</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">is</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">NaN</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">NaN</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// true</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">is</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',12),l={},k=(0,a(756).A)(l,[["render",function(i,s){return(0,h.uX)(),(0,h.CE)("div",null,[n,(0,h.Q3)(" more "),t])}]]),e=JSON.parse('{"path":"/js-tools/tools.html","title":"日常js积累","lang":"zh-CN","frontmatter":{"title":"日常js积累","icon":"javascript","category":"前端","tag":["javascript"],"isOriginal":true,"article":true,"date":"2024-06-27T00:00:00.000Z","description":"日常开发学习过程中积累的javascript","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/js-tools/tools.html"}],["meta",{"property":"og:site_name","content":"hanekawa-shiki"}],["meta",{"property":"og:title","content":"日常js积累"}],["meta",{"property":"og:description","content":"日常开发学习过程中积累的javascript"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T09:39:07.000Z"}],["meta",{"property":"article:author","content":"hanekawa-shiki"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:published_time","content":"2024-06-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T09:39:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"日常js积累\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-27T09:39:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"hanekawa-shiki\\",\\"url\\":\\"https://hanekawa.top\\"}]}"]]},"headers":[{"level":2,"title":"工具函数","slug":"工具函数","link":"#工具函数","children":[{"level":3,"title":"获取对象类型","slug":"获取对象类型","link":"#获取对象类型","children":[]},{"level":3,"title":"质数","slug":"质数","link":"#质数","children":[]},{"level":3,"title":"获取cookie","slug":"获取cookie","link":"#获取cookie","children":[]}]},{"level":2,"title":"常用api对比","slug":"常用api对比","link":"#常用api对比","children":[{"level":3,"title":"Array","slug":"array","link":"#array","children":[]},{"level":3,"title":"===与Object.js()","slug":"与object-js","link":"#与object-js","children":[]}]}],"git":{"createdTime":1719476116000,"updatedTime":1719481147000,"contributors":[{"name":"kamishima-kaede","email":"kamiacgxu@gmail.com","commits":2}]},"readingTime":{"minutes":1.09,"words":326},"filePathRelative":"js-tools/tools.md","localizedDate":"2024年6月27日","excerpt":"<p>日常开发学习过程中积累的<code>javascript</code></p>\\n","autoDesc":true}')},756:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,h]of s)a[i]=h;return a}}}]);