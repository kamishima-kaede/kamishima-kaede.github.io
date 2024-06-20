"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[8711],{2691:(s,n,a)=>{a.r(n),a.d(n,{comp:()=>r,data:()=>p});var e=a(9034);const l=[(0,e.Fv)('<h1 id="第三方ui库" tabindex="-1"><a class="header-anchor" href="#第三方ui库"><span>第三方UI库</span></a></h1><h2 id="antd" tabindex="-1"><a class="header-anchor" href="#antd"><span>antd</span></a></h2><p>这里只介绍下<a href="https://ant-design.gitee.io/index-cn" target="_blank" rel="noopener noreferrer">antd</a>的安装使用</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">1.安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">2.修改package.json</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    ....</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">      &quot;scripts&quot;: {</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">        &quot;start&quot;: &quot;react-app-rewired start&quot;,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">        &quot;build&quot;: &quot;react-app-rewired build&quot;,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">        &quot;test&quot;: &quot;react-app-rewired test&quot;,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">        &quot;eject&quot;: &quot;react-scripts eject&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">      },</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    ....</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">3.根目录下创建config-overrides.js</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    //配置具体的修改规则</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    const { override, fixBabelImports,addLessLoader} = require(&#39;customize-cra&#39;);</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    module.exports = override(</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">      fixBabelImports(&#39;import&#39;, {</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">        libraryName: &#39;antd&#39;,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">        libraryDirectory: &#39;es&#39;,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">        style: true,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">      }),</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">      addLessLoader({</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">        lessOptions:{</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">          javascriptEnabled: true,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">          modifyVars: { &#39;@primary-color&#39;: &#39;green&#39; },</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">        }</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">      }),</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    );</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">4.备注：不用在组件里亲自引入样式了，即：import &#39;antd/dist/antd.css&#39;应该删掉</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4)],i={},r=(0,a(8538).A)(i,[["render",function(s,n){return(0,e.uX)(),(0,e.CE)("div",null,l)}]]),p=JSON.parse('{"path":"/framework_front/react/ui_library.html","title":"第三方UI库","lang":"zh-CN","frontmatter":{"article":false,"description":"第三方UI库 antd 这里只介绍下antd的安装使用","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/framework_front/react/ui_library.html"}],["meta",{"property":"og:site_name","content":"hanekawa-shiki"}],["meta",{"property":"og:title","content":"第三方UI库"}],["meta",{"property":"og:description","content":"第三方UI库 antd 这里只介绍下antd的安装使用"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-15T09:53:30.000Z"}],["meta",{"property":"article:author","content":"hanekawa-shiki"}],["meta",{"property":"article:modified_time","content":"2022-06-15T09:53:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"第三方UI库\\",\\"description\\":\\"第三方UI库 antd 这里只介绍下antd的安装使用\\"}"]]},"headers":[{"level":2,"title":"antd","slug":"antd","link":"#antd","children":[]}],"git":{"createdTime":1655200609000,"updatedTime":1655286810000,"contributors":[{"name":"shiki","email":"kamiacgxu@gmail.com","commits":2}]},"readingTime":{"minutes":0.45,"words":136},"filePathRelative":"framework_front/react/ui_library.md","localizedDate":"2022年6月14日","excerpt":"\\n<h2>antd</h2>\\n<p>这里只介绍下<a href=\\"https://ant-design.gitee.io/index-cn\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">antd</a>的安装使用</p>\\n<div class=\\"language-md line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"md\\" data-title=\\"md\\" style=\\"background-color:#2e3440ff;color:#d8dee9ff\\"><pre class=\\"shiki nord vp-code\\"><code><span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">1.安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">2.修改package.json</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">    ....</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">      \\"scripts\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">        \\"start\\": \\"react-app-rewired start\\",</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">        \\"build\\": \\"react-app-rewired build\\",</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">        \\"test\\": \\"react-app-rewired test\\",</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">        \\"eject\\": \\"react-scripts eject\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">      },</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">    ....</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">3.根目录下创建config-overrides.js</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">    //配置具体的修改规则</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">    const { override, fixBabelImports,addLessLoader} = require(\'customize-cra\');</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">    module.exports = override(</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">      fixBabelImports(\'import\', {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">        libraryName: \'antd\',</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">        libraryDirectory: \'es\',</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">        style: true,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">      }),</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">      addLessLoader({</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">        lessOptions:{</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">          javascriptEnabled: true,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">          modifyVars: { \'@primary-color\': \'green\' },</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">        }</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">      }),</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">    );</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D8DEE9FF\\">4.备注：不用在组件里亲自引入样式了，即：import \'antd/dist/antd.css\'应该删掉</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')},8538:(s,n)=>{n.A=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);