import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as d,b as e,a,d as i,e as t,r as l}from"./app.d54928ab.js";const o={},c=e("h1",{id:"\u7B2C\u4E09\u65B9ui\u5E93",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7B2C\u4E09\u65B9ui\u5E93","aria-hidden":"true"},"#"),i(" \u7B2C\u4E09\u65B9UI\u5E93")],-1),u=e("h2",{id:"antd",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#antd","aria-hidden":"true"},"#"),i(" antd")],-1),v=i("\u8FD9\u91CC\u53EA\u4ECB\u7ECD\u4E0B"),m={href:"https://ant-design.gitee.io/index-cn",target:"_blank",rel:"noopener noreferrer"},b=i("antd"),p=i("\u7684\u5B89\u88C5\u4F7F\u7528"),_=t(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>1.\u5B89\u88C5\u4F9D\u8D56\uFF1Ayarn add react-app-rewired customize-cra babel-plugin-import less less-loader
2.\u4FEE\u6539package.json
    ....
      &quot;scripts&quot;: {
        &quot;start&quot;: &quot;react-app-rewired start&quot;,
        &quot;build&quot;: &quot;react-app-rewired build&quot;,
        &quot;test&quot;: &quot;react-app-rewired test&quot;,
        &quot;eject&quot;: &quot;react-scripts eject&quot;
      },
    ....
3.\u6839\u76EE\u5F55\u4E0B\u521B\u5EFAconfig-overrides.js
    //\u914D\u7F6E\u5177\u4F53\u7684\u4FEE\u6539\u89C4\u5219
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
4.\u5907\u6CE8\uFF1A\u4E0D\u7528\u5728\u7EC4\u4EF6\u91CC\u4EB2\u81EA\u5F15\u5165\u6837\u5F0F\u4E86\uFF0C\u5373\uFF1Aimport &#39;antd/dist/antd.css&#39;\u5E94\u8BE5\u5220\u6389
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function h(q,f){const n=l("ExternalLinkIcon");return r(),d("div",null,[c,u,e("p",null,[v,e("a",m,[b,a(n)]),p]),_])}var y=s(o,[["render",h],["__file","ui_library.html.vue"]]);export{y as default};
