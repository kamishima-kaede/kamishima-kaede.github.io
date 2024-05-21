import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as i,c as s,b as e,d as t,a as d,f as o}from"./app-DAP5m6vZ.js";const l={},c=e("h1",{id:"第三方ui库",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第三方ui库"},[e("span",null,"第三方UI库")])],-1),m=e("h2",{id:"antd",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#antd"},[e("span",null,"antd")])],-1),p={href:"https://ant-design.gitee.io/index-cn",target:"_blank",rel:"noopener noreferrer"},u=o(`<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>1.安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader
2.修改package.json
    ....
      &quot;scripts&quot;: {
        &quot;start&quot;: &quot;react-app-rewired start&quot;,
        &quot;build&quot;: &quot;react-app-rewired build&quot;,
        &quot;test&quot;: &quot;react-app-rewired test&quot;,
        &quot;eject&quot;: &quot;react-scripts eject&quot;
      },
    ....
3.根目录下创建config-overrides.js
    //配置具体的修改规则
    const { override, fixBabelImports,addLessLoader} = require(&#39;customize-cra&#39;);
    module.exports = override(
      fixBabelImports(&#39;import&#39;, {
        libraryName: &#39;antd&#39;,
        libraryDirectory: &#39;es&#39;,
        style: true,
      }),
      addLessLoader({
        lessOptions:{
          javascriptEnabled: true,
          modifyVars: { &#39;@primary-color&#39;: &#39;green&#39; },
        }
      }),
    );
4.备注：不用在组件里亲自引入样式了，即：import &#39;antd/dist/antd.css&#39;应该删掉
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function v(b,h){const n=r("ExternalLinkIcon");return i(),s("div",null,[c,m,e("p",null,[t("这里只介绍下"),e("a",p,[t("antd"),d(n)]),t("的安装使用")]),u])}const f=a(l,[["render",v],["__file","ui_library.html.vue"]]),y=JSON.parse(`{"path":"/framework_front/react/ui_library.html","title":"第三方UI库","lang":"zh-CN","frontmatter":{"article":false,"description":"第三方UI库 antd 这里只介绍下antd的安装使用 ","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/framework_front/react/ui_library.html"}],["meta",{"property":"og:site_name","content":"Kamishima-kaede"}],["meta",{"property":"og:title","content":"第三方UI库"}],["meta",{"property":"og:description","content":"第三方UI库 antd 这里只介绍下antd的安装使用 "}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-15T09:53:30.000Z"}],["meta",{"property":"article:author","content":"kamishima-kaede"}],["meta",{"property":"article:modified_time","content":"2022-06-15T09:53:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"第三方UI库\\",\\"description\\":\\"第三方UI库 antd 这里只介绍下antd的安装使用 \\"}"]]},"headers":[{"level":2,"title":"antd","slug":"antd","link":"#antd","children":[]}],"git":{"createdTime":1655200609000,"updatedTime":1655286810000,"contributors":[{"name":"shiki","email":"kamiacgxu@gmail.com","commits":2}]},"readingTime":{"minutes":0.45,"words":136},"filePathRelative":"framework_front/react/ui_library.md","localizedDate":"2022年6月14日","excerpt":"\\n<h2>antd</h2>\\n<p>这里只介绍下<a href=\\"https://ant-design.gitee.io/index-cn\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">antd</a>的安装使用</p>\\n<div class=\\"language-markdown\\" data-ext=\\"md\\" data-title=\\"md\\"><pre class=\\"language-markdown\\"><code>1.安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader\\n2.修改package.json\\n    ....\\n      \\"scripts\\": {\\n        \\"start\\": \\"react-app-rewired start\\",\\n        \\"build\\": \\"react-app-rewired build\\",\\n        \\"test\\": \\"react-app-rewired test\\",\\n        \\"eject\\": \\"react-scripts eject\\"\\n      },\\n    ....\\n3.根目录下创建config-overrides.js\\n    //配置具体的修改规则\\n    const { override, fixBabelImports,addLessLoader} = require('customize-cra');\\n    module.exports = override(\\n      fixBabelImports('import', {\\n        libraryName: 'antd',\\n        libraryDirectory: 'es',\\n        style: true,\\n      }),\\n      addLessLoader({\\n        lessOptions:{\\n          javascriptEnabled: true,\\n          modifyVars: { '@primary-color': 'green' },\\n        }\\n      }),\\n    );\\n4.备注：不用在组件里亲自引入样式了，即：import 'antd/dist/antd.css'应该删掉\\n</code></pre></div>","autoDesc":true}`);export{f as comp,y as data};
