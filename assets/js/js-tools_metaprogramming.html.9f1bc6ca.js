"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[392],{3318:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>h,data:()=>r});var t=a(6352);const e=(0,t.Lk)("p",null,[(0,t.eW)("一些一般用不到的高级"),(0,t.Lk)("code",null,"javascript"),(0,t.eW)("知识")],-1),n=(0,t.Fv)('<h1 id="高级javascript特性" tabindex="-1"><a class="header-anchor" href="#高级javascript特性"><span>高级<code>JavaScript</code>特性</span></a></h1><h2 id="symbol-符号" tabindex="-1"><a class="header-anchor" href="#symbol-符号"><span><code>Symbol</code>(符号)</span></a></h2><h3 id="symbol-iterator-symbol-asynciterator" tabindex="-1"><a class="header-anchor" href="#symbol-iterator-symbol-asynciterator"><span><code>Symbol.iterator</code>&amp;<code>Symbol.asyncIterator</code></span></a></h3><p>只要实现<code>Symbol.iterator</code>或<code>Symbol.asyncIterator</code>符号的方法，这个类或者对象就是可迭代的。</p><h3 id="symbol-hasinstance" tabindex="-1"><a class="header-anchor" href="#symbol-hasinstance"><span><code>Symbol.hasInstance</code></span></a></h3><p>在ES6中，如果<code>instanceof</code>的右侧是一个有[Symbol.hasInstance]方法的对象，那么就会以左侧的值作为参数来调用这个方法并返回这个方法的值，返回值会被转换为布尔值，变成<code>intanceof</code>操作符的值。如果右侧的值没有[Symbol.hasInstance]方法且是一个函数，则<code>instanceof</code>操作符仍然照常行事。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> uint8</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  [</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">hasInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">](</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">isInteger</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> x</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> x</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 255</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">128</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> uint8</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // true</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">256</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> uint8</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // false</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Math</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">PI</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> uint8</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symbol-tostringtag" tabindex="-1"><a class="header-anchor" href="#symbol-tostringtag"><span><code>Symbol.toStringTag</code></span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Range</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Symbal</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">toStringTag</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]() {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;Range&#39;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Range</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// &quot;[Object Range]&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symbol-species" tabindex="-1"><a class="header-anchor" href="#symbol-species"><span><code>Symbol.species</code></span></a></h3>',10),l={},h=(0,a(756).A)(l,[["render",function(s,i){return(0,t.uX)(),(0,t.CE)("div",null,[e,(0,t.Q3)(" more "),n])}]]),r=JSON.parse('{"path":"/js-tools/metaprogramming.html","title":"高级JavaScript特性","lang":"zh-CN","frontmatter":{"title":"高级JavaScript特性","icon":"javascript","category":"前端","tag":["javascript"],"isOriginal":true,"article":true,"date":"2024-06-27T00:00:00.000Z","description":"一些一般用不到的高级javascript知识","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/js-tools/metaprogramming.html"}],["meta",{"property":"og:site_name","content":"hanekawa-shiki"}],["meta",{"property":"og:title","content":"高级JavaScript特性"}],["meta",{"property":"og:description","content":"一些一般用不到的高级javascript知识"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T09:39:07.000Z"}],["meta",{"property":"article:author","content":"hanekawa-shiki"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:published_time","content":"2024-06-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T09:39:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"高级JavaScript特性\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-27T09:39:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"hanekawa-shiki\\",\\"url\\":\\"https://hanekawa.top\\"}]}"]]},"headers":[{"level":2,"title":"Symbol(符号)","slug":"symbol-符号","link":"#symbol-符号","children":[{"level":3,"title":"Symbol.iterator&Symbol.asyncIterator","slug":"symbol-iterator-symbol-asynciterator","link":"#symbol-iterator-symbol-asynciterator","children":[]},{"level":3,"title":"Symbol.hasInstance","slug":"symbol-hasinstance","link":"#symbol-hasinstance","children":[]},{"level":3,"title":"Symbol.toStringTag","slug":"symbol-tostringtag","link":"#symbol-tostringtag","children":[]},{"level":3,"title":"Symbol.species","slug":"symbol-species","link":"#symbol-species","children":[]}]}],"git":{"createdTime":1719481147000,"updatedTime":1719481147000,"contributors":[{"name":"kamishima-kaede","email":"kamiacgxu@gmail.com","commits":1}]},"readingTime":{"minutes":0.69,"words":207},"filePathRelative":"js-tools/metaprogramming.md","localizedDate":"2024年6月27日","excerpt":"<p>一些一般用不到的高级<code>javascript</code>知识</p>\\n","autoDesc":true}')},756:(s,i)=>{i.A=(s,i)=>{const a=s.__vccOpts||s;for(const[s,t]of i)a[s]=t;return a}}}]);