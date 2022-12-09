import{ab as s,A as r,B as a,z as e,M as i,H as d,ac as t,O as l}from"./framework.9a0a33a3.js";const c={},o=e("h1",{id:"第三方ui库",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第三方ui库","aria-hidden":"true"},"#"),i(" 第三方UI库")],-1),u=e("h2",{id:"antd",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#antd","aria-hidden":"true"},"#"),i(" antd")],-1),v={href:"https://ant-design.gitee.io/index-cn",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>1.安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function b(p,_){const n=l("ExternalLinkIcon");return r(),a("div",null,[o,u,e("p",null,[i("这里只介绍下"),e("a",v,[i("antd"),d(n)]),i("的安装使用")]),m])}const q=s(c,[["render",b],["__file","ui_library.html.vue"]]);export{q as default};