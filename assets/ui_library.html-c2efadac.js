import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as a,c as d,b as e,d as i,a as t,f as l}from"./app-cdb3c05c.js";const o={},c=e("h1",{id:"第三方ui库",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第三方ui库","aria-hidden":"true"},"#"),i(" 第三方UI库")],-1),u=e("h2",{id:"antd",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#antd","aria-hidden":"true"},"#"),i(" antd")],-1),v={href:"https://ant-design.gitee.io/index-cn",target:"_blank",rel:"noopener noreferrer"},m=l(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>1.安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function b(p,_){const n=s("ExternalLinkIcon");return a(),d("div",null,[c,u,e("p",null,[i("这里只介绍下"),e("a",v,[i("antd"),t(n)]),i("的安装使用")]),m])}const f=r(o,[["render",b],["__file","ui_library.html.vue"]]);export{f as default};
