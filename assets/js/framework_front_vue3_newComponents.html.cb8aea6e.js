"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[633],{4386:(s,e,n)=>{n.r(e),n.d(e,{comp:()=>p,data:()=>o});var l=n(9034);const a=[(0,l.Fv)('<h1 id="五、新的组件" tabindex="-1"><a class="header-anchor" href="#五、新的组件"><span>五、新的组件</span></a></h1><h2 id="_1-fragment" tabindex="-1"><a class="header-anchor" href="#_1-fragment"><span>1.Fragment</span></a></h2><ul><li>在Vue2中: 组件必须有一个根标签</li><li>在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中</li><li>好处: 减少标签层级, 减小内存占用</li></ul><h2 id="_2-teleport" tabindex="-1"><a class="header-anchor" href="#_2-teleport"><span>2.Teleport</span></a></h2><ul><li><p>什么是Teleport？—— <code>Teleport</code> 是一种能够将我们的<strong style="color:#DD5145;">组件html结构</strong>移动到指定位置的技术。</p><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;teleport</span><span style="color:#8FBCBB;"> to</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">移动位置</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  &lt;div v-if=&quot;isShow&quot; class=&quot;mask&quot;&gt;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    &lt;div class=&quot;dialog&quot;&gt;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">      &lt;h3&gt;我是一个弹窗&lt;/h3&gt;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">      &lt;button @click=&quot;isShow = false&quot;&gt;关闭弹窗&lt;/button&gt;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    &lt;/div&gt;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  &lt;/div&gt;</span></span>\n<span class="line"><span style="color:#81A1C1;">&lt;/teleport&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_3-suspense" tabindex="-1"><a class="header-anchor" href="#_3-suspense"><span>3.Suspense</span></a></h2><ul><li><p>等待异步组件时渲染一些额外内容，让应用有更好的用户体验</p></li><li><p>使用步骤：</p><ul><li><p>异步引入组件</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#ECEFF4;"> {</span><span style="color:#8FBCBB;">defineAsyncComponent</span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;"> from</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">vue</span><span style="color:#ECEFF4;">&#39;</span></span>\n<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> Child</span><span style="color:#81A1C1;"> =</span><span style="color:#88C0D0;"> defineAsyncComponent</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">()</span><span style="color:#81A1C1;">=&gt;import</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">./components/Child.vue</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用<code>Suspense</code>包裹组件，并配置好<code>default</code> 与 <code>fallback</code></p><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;template&gt;</span></span>\n<span class="line"><span style="color:#81A1C1;">  &lt;div</span><span style="color:#8FBCBB;"> class</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">app</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>\n<span class="line"><span style="color:#81A1C1;">    &lt;h3&gt;</span><span style="color:#D8DEE9FF;">我是App组件</span><span style="color:#81A1C1;">&lt;/h3&gt;</span></span>\n<span class="line"><span style="color:#81A1C1;">    &lt;Suspense&gt;</span></span>\n<span class="line"><span style="color:#81A1C1;">      &lt;template</span><span style="color:#8FBCBB;"> v-slot</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">default</span><span style="color:#81A1C1;">&gt;</span></span>\n<span class="line"><span style="color:#81A1C1;">        &lt;Child/&gt;</span></span>\n<span class="line"><span style="color:#81A1C1;">      &lt;/template&gt;</span></span>\n<span class="line"><span style="color:#81A1C1;">      &lt;template</span><span style="color:#8FBCBB;"> v-slot</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">fallback</span><span style="color:#81A1C1;">&gt;</span></span>\n<span class="line"><span style="color:#81A1C1;">        &lt;h3&gt;</span><span style="color:#D8DEE9FF;">加载中.....</span><span style="color:#81A1C1;">&lt;/h3&gt;</span></span>\n<span class="line"><span style="color:#81A1C1;">      &lt;/template&gt;</span></span>\n<span class="line"><span style="color:#81A1C1;">    &lt;/Suspense&gt;</span></span>\n<span class="line"><span style="color:#81A1C1;">  &lt;/div&gt;</span></span>\n<span class="line"><span style="color:#81A1C1;">&lt;/template&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul>',7)],t={},p=(0,n(8538).A)(t,[["render",function(s,e){return(0,l.uX)(),(0,l.CE)("div",null,a)}]]),o=JSON.parse('{"path":"/framework_front/vue3/newComponents.html","title":"五、新的组件","lang":"zh-CN","frontmatter":{"article":false,"description":"五、新的组件 1.Fragment 在Vue2中: 组件必须有一个根标签 在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中 好处: 减少标签层级, 减小内存占用 2.Teleport 什么是Teleport？—— Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。 3.Suspense ...","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/framework_front/vue3/newComponents.html"}],["meta",{"property":"og:site_name","content":"hanekawa-shiki"}],["meta",{"property":"og:title","content":"五、新的组件"}],["meta",{"property":"og:description","content":"五、新的组件 1.Fragment 在Vue2中: 组件必须有一个根标签 在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中 好处: 减少标签层级, 减小内存占用 2.Teleport 什么是Teleport？—— Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。 3.Suspense ..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-15T09:53:30.000Z"}],["meta",{"property":"article:author","content":"hanekawa-shiki"}],["meta",{"property":"article:modified_time","content":"2022-06-15T09:53:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"五、新的组件\\",\\"description\\":\\"五、新的组件 1.Fragment 在Vue2中: 组件必须有一个根标签 在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中 好处: 减少标签层级, 减小内存占用 2.Teleport 什么是Teleport？—— Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。 3.Suspense ...\\"}"]]},"headers":[{"level":2,"title":"1.Fragment","slug":"_1-fragment","link":"#_1-fragment","children":[]},{"level":2,"title":"2.Teleport","slug":"_2-teleport","link":"#_2-teleport","children":[]},{"level":2,"title":"3.Suspense","slug":"_3-suspense","link":"#_3-suspense","children":[]}],"git":{"createdTime":1655200609000,"updatedTime":1655286810000,"contributors":[{"name":"shiki","email":"kamiacgxu@gmail.com","commits":2}]},"readingTime":{"minutes":0.77,"words":231},"filePathRelative":"framework_front/vue3/newComponents.md","localizedDate":"2022年6月14日","excerpt":"\\n<h2>1.Fragment</h2>\\n<ul>\\n<li>在Vue2中: 组件必须有一个根标签</li>\\n<li>在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中</li>\\n<li>好处: 减少标签层级, 减小内存占用</li>\\n</ul>\\n<h2>2.Teleport</h2>\\n<ul>\\n<li>\\n<p>什么是Teleport？—— <code>Teleport</code> 是一种能够将我们的<strong style=\\"color:#DD5145\\">组件html结构</strong>移动到指定位置的技术。</p>\\n<div class=\\"language-vue line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"vue\\" data-title=\\"vue\\" style=\\"background-color:#2e3440ff;color:#d8dee9ff\\"><pre class=\\"shiki nord vp-code\\"><code><span class=\\"line\\"><span style=\\"color:#81A1C1\\">&lt;teleport</span><span style=\\"color:#8FBCBB\\"> to</span><span style=\\"color:#ECEFF4\\">=</span><span style=\\"color:#ECEFF4\\">\\"</span><span style=\\"color:#A3BE8C\\">移动位置</span><span style=\\"color:#ECEFF4\\">\\"</span><span style=\\"color:#81A1C1\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">  &lt;div v-if=\\"isShow\\" class=\\"mask\\"&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">    &lt;div class=\\"dialog\\"&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">      &lt;h3&gt;我是一个弹窗&lt;/h3&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">      &lt;button @click=\\"isShow = false\\"&gt;关闭弹窗&lt;/button&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">    &lt;/div&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">  &lt;/div&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#81A1C1\\">&lt;/teleport&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>","autoDesc":true}')},8538:(s,e)=>{e.A=(s,e)=>{const n=s.__vccOpts||s;for(const[s,l]of e)n[s]=l;return n}}}]);