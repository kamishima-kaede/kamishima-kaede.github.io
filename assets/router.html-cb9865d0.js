const t=JSON.parse(`{"key":"v-0b7c95c0","path":"/framework_front/react/router.html","title":"Router","lang":"zh-CN","frontmatter":{"article":false,"description":"Router react-router是跨平台的。 react-router-dom是在react-router基础上提供了Link和NavLink，而且依赖history库提供了两个浏览器端适用的BrowserRouter和HashRouter组件。 项目中一般使用react-router-dom 路由的基本使用 1.明确好界面中的导航区、展示区 2.导航区的a标签改为Link标签 &lt;Link to=\\"/xxxxx\\"&gt;Demo&lt;/Link&gt; 3.展示区写Route标签进行路径的匹配 &lt;Route path='/xxxx' component={Demo}/&gt; 4.&lt;App&gt;的最外侧包裹了一个&lt;BrowserRouter&gt;或&lt;HashRouter&gt;","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/framework_front/react/router.html"}],["meta",{"property":"og:site_name","content":"Kamishima-kaede"}],["meta",{"property":"og:title","content":"Router"}],["meta",{"property":"og:description","content":"Router react-router是跨平台的。 react-router-dom是在react-router基础上提供了Link和NavLink，而且依赖history库提供了两个浏览器端适用的BrowserRouter和HashRouter组件。 项目中一般使用react-router-dom 路由的基本使用 1.明确好界面中的导航区、展示区 2.导航区的a标签改为Link标签 &lt;Link to=\\"/xxxxx\\"&gt;Demo&lt;/Link&gt; 3.展示区写Route标签进行路径的匹配 &lt;Route path='/xxxx' component={Demo}/&gt; 4.&lt;App&gt;的最外侧包裹了一个&lt;BrowserRouter&gt;或&lt;HashRouter&gt;"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-15T09:53:30.000Z"}],["meta",{"property":"article:author","content":"kamishima-kaede"}],["meta",{"property":"article:modified_time","content":"2022-06-15T09:53:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Router\\",\\"description\\":\\"Router react-router是跨平台的。 react-router-dom是在react-router基础上提供了Link和NavLink，而且依赖history库提供了两个浏览器端适用的BrowserRouter和HashRouter组件。 项目中一般使用react-router-dom 路由的基本使用 1.明确好界面中的导航区、展示区 2.导航区的a标签改为Link标签 &lt;Link to=\\\\\\"/xxxxx\\\\\\"&gt;Demo&lt;/Link&gt; 3.展示区写Route标签进行路径的匹配 &lt;Route path='/xxxx' component={Demo}/&gt; 4.&lt;App&gt;的最外侧包裹了一个&lt;BrowserRouter&gt;或&lt;HashRouter&gt;\\"}"]]},"headers":[{"level":2,"title":"路由的基本使用","slug":"路由的基本使用","link":"#路由的基本使用","children":[]},{"level":2,"title":"路由组件与一般组件","slug":"路由组件与一般组件","link":"#路由组件与一般组件","children":[]},{"level":2,"title":"NavLink与封装NavLink","slug":"navlink与封装navlink","link":"#navlink与封装navlink","children":[]},{"level":2,"title":"Switch的使用","slug":"switch的使用","link":"#switch的使用","children":[]},{"level":2,"title":"解决多级路径刷新页面样式丢失的问题","slug":"解决多级路径刷新页面样式丢失的问题","link":"#解决多级路径刷新页面样式丢失的问题","children":[]},{"level":2,"title":"路由的严格匹配与模糊匹配","slug":"路由的严格匹配与模糊匹配","link":"#路由的严格匹配与模糊匹配","children":[]},{"level":2,"title":"Redirect的使用","slug":"redirect的使用","link":"#redirect的使用","children":[]},{"level":2,"title":"嵌套路由","slug":"嵌套路由","link":"#嵌套路由","children":[]},{"level":2,"title":"向路由组件传递参数","slug":"向路由组件传递参数","link":"#向路由组件传递参数","children":[]},{"level":2,"title":"编程式路由导航","slug":"编程式路由导航","link":"#编程式路由导航","children":[]},{"level":2,"title":"BrowserRouter与HashRouter的区别","slug":"browserrouter与hashrouter的区别","link":"#browserrouter与hashrouter的区别","children":[]}],"git":{"createdTime":1655200609000,"updatedTime":1655286810000,"contributors":[{"name":"shiki","email":"kamiacgxu@gmail.com","commits":2}]},"readingTime":{"minutes":3.04,"words":913},"filePathRelative":"framework_front/react/router.md","localizedDate":"2022年6月14日","excerpt":"<h1> Router</h1>\\n<p>react-router是跨平台的。<br>\\nreact-router-dom是在react-router基础上提供了Link和NavLink，而且依赖history库提供了两个浏览器端适用的BrowserRouter和HashRouter组件。<br>\\n项目中一般使用react-router-dom</p>\\n<h2> 路由的基本使用</h2>\\n<div class=\\"language-markdown line-numbers-mode\\" data-ext=\\"md\\"><pre class=\\"language-markdown\\"><code>1.明确好界面中的导航区、展示区\\n2.导航区的a标签改为Link标签\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>Link</span> <span class=\\"token attr-name\\">to</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>/xxxxx<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>Demo<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>Link</span><span class=\\"token punctuation\\">&gt;</span></span>\\n3.展示区写Route标签进行路径的匹配\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>Route</span> <span class=\\"token attr-name\\">path</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">'</span>/xxxx<span class=\\"token punctuation\\">'</span></span> <span class=\\"token attr-name\\">component</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span>{Demo}/</span><span class=\\"token punctuation\\">&gt;</span></span>\\n4.<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>App</span><span class=\\"token punctuation\\">&gt;</span></span>的最外侧包裹了一个<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>BrowserRouter</span><span class=\\"token punctuation\\">&gt;</span></span>或<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>HashRouter</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
