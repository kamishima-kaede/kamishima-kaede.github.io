const t=JSON.parse('{"key":"v-409a5e25","path":"/framework_front/vue3/newComponents.html","title":"五、新的组件","lang":"zh-CN","frontmatter":{"article":false,"description":"五、新的组件 1.Fragment 在Vue2中: 组件必须有一个根标签 在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中 好处: 减少标签层级, 减小内存占用 2.Teleport 什么是Teleport？—— Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。 &lt;teleport to=\\"移动位置\\"&gt; &lt;div v-if=\\"isShow\\" class=\\"mask\\"&gt; &lt;div class=\\"dialog\\"&gt; &lt;h3&gt;我是一个弹窗&lt;/h3&gt; &lt;button @click=\\"isShow = false\\"&gt;关闭弹窗&lt;/button&gt; &lt;/div&gt; &lt;/div&gt; &lt;/teleport&gt;","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/framework_front/vue3/newComponents.html"}],["meta",{"property":"og:site_name","content":"Kamishima-kaede"}],["meta",{"property":"og:title","content":"五、新的组件"}],["meta",{"property":"og:description","content":"五、新的组件 1.Fragment 在Vue2中: 组件必须有一个根标签 在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中 好处: 减少标签层级, 减小内存占用 2.Teleport 什么是Teleport？—— Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。 &lt;teleport to=\\"移动位置\\"&gt; &lt;div v-if=\\"isShow\\" class=\\"mask\\"&gt; &lt;div class=\\"dialog\\"&gt; &lt;h3&gt;我是一个弹窗&lt;/h3&gt; &lt;button @click=\\"isShow = false\\"&gt;关闭弹窗&lt;/button&gt; &lt;/div&gt; &lt;/div&gt; &lt;/teleport&gt;"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-15T09:53:30.000Z"}],["meta",{"property":"article:author","content":"kamishima-kaede"}],["meta",{"property":"article:modified_time","content":"2022-06-15T09:53:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"五、新的组件\\",\\"description\\":\\"五、新的组件 1.Fragment 在Vue2中: 组件必须有一个根标签 在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中 好处: 减少标签层级, 减小内存占用 2.Teleport 什么是Teleport？—— Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。 &lt;teleport to=\\\\\\"移动位置\\\\\\"&gt; &lt;div v-if=\\\\\\"isShow\\\\\\" class=\\\\\\"mask\\\\\\"&gt; &lt;div class=\\\\\\"dialog\\\\\\"&gt; &lt;h3&gt;我是一个弹窗&lt;/h3&gt; &lt;button @click=\\\\\\"isShow = false\\\\\\"&gt;关闭弹窗&lt;/button&gt; &lt;/div&gt; &lt;/div&gt; &lt;/teleport&gt;\\"}"]]},"headers":[{"level":2,"title":"1.Fragment","slug":"_1-fragment","link":"#_1-fragment","children":[]},{"level":2,"title":"2.Teleport","slug":"_2-teleport","link":"#_2-teleport","children":[]},{"level":2,"title":"3.Suspense","slug":"_3-suspense","link":"#_3-suspense","children":[]}],"git":{"createdTime":1655200609000,"updatedTime":1655286810000,"contributors":[{"name":"shiki","email":"kamiacgxu@gmail.com","commits":2}]},"readingTime":{"minutes":0.77,"words":231},"filePathRelative":"framework_front/vue3/newComponents.md","localizedDate":"2022年6月14日","excerpt":"<h1> 五、新的组件</h1>\\n<h2> 1.Fragment</h2>\\n<ul>\\n<li>在Vue2中: 组件必须有一个根标签</li>\\n<li>在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中</li>\\n<li>好处: 减少标签层级, 减小内存占用</li>\\n</ul>\\n<h2> 2.Teleport</h2>\\n<ul>\\n<li>\\n<p>什么是Teleport？—— <code>Teleport</code> 是一种能够将我们的<strong style=\\"color:#DD5145\\">组件html结构</strong>移动到指定位置的技术。</p>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>teleport</span> <span class=\\"token attr-name\\">to</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>移动位置<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">v-if</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>isShow<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>mask<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>dialog<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>h3</span><span class=\\"token punctuation\\">&gt;</span></span>我是一个弹窗<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>h3</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>button</span> <span class=\\"token attr-name\\">@click</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>isShow = false<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>关闭弹窗<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>button</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>teleport</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>","autoDesc":true}');export{t as data};