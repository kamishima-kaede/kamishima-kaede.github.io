import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as p,b as n,a as c,d as s,e as i,r as l}from"./app.098793b1.js";const o={},u=n("h1",{id:"github-actions\u662F\u4EC0\u4E48",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#github-actions\u662F\u4EC0\u4E48","aria-hidden":"true"},"#"),s(),n("code",null,"github actions"),s("\u662F\u4EC0\u4E48")],-1),d={href:"https://docs.github.com/en/actions",target:"_blank",rel:"noopener noreferrer"},r=s("\u5B98\u7F51\u6587\u6863"),k=i(`<div class="custom-container info"><p class="custom-container-title">\u5B98\u7F51\u4ECB\u7ECD</p><p>GitHub Actions \u662F\u4E00\u4E2A\u6301\u7EED\u96C6\u6210\u548C\u6301\u7EED\u4EA4\u4ED8 (CI/CD) \u5E73\u53F0\uFF0C\u53EF\u7528\u4E8E\u81EA\u52A8\u6267\u884C\u6784\u5EFA\u3001\u6D4B\u8BD5\u548C\u90E8\u7F72\u7BA1\u9053\u3002 \u60A8\u53EF\u4EE5\u521B\u5EFA\u5DE5\u4F5C\u6D41\u7A0B\u6765\u6784\u5EFA\u548C\u6D4B\u8BD5\u5B58\u50A8\u5E93\u7684\u6BCF\u4E2A\u62C9\u53D6\u8BF7\u6C42\uFF0C\u6216\u5C06\u5408\u5E76\u7684\u62C9\u53D6\u8BF7\u6C42\u90E8\u7F72\u5230\u751F\u4EA7\u73AF\u5883\u3002</p><p>GitHub Actions \u4E0D\u4EC5\u4EC5\u662F DevOps\uFF0C\u8FD8\u5141\u8BB8\u60A8\u5728\u5B58\u50A8\u5E93\u4E2D\u53D1\u751F\u5176\u4ED6\u4E8B\u4EF6\u65F6\u8FD0\u884C\u5DE5\u4F5C\u6D41\u7A0B\u3002 \u4F8B\u5982\uFF0C\u60A8\u53EF\u4EE5\u8FD0\u884C\u5DE5\u4F5C\u6D41\u7A0B\uFF0C\u4EE5\u4FBF\u5728\u6709\u4EBA\u5728\u60A8\u7684\u5B58\u50A8\u5E93\u4E2D\u521B\u5EFA\u65B0\u95EE\u9898\u65F6\u81EA\u52A8\u6DFB\u52A0\u76F8\u5E94\u7684\u6807\u7B7E\u3002</p><p>GitHub \u63D0\u4F9B Linux\u3001Windows \u548C macOS \u865A\u62DF\u673A\u6765\u8FD0\u884C\u5DE5\u4F5C\u6D41\u7A0B\uFF0C\u6216\u8005\u60A8\u53EF\u4EE5\u5728\u81EA\u5DF1\u7684\u6570\u636E\u4E2D\u5FC3\u6216\u4E91\u57FA\u7840\u67B6\u6784\u4E2D\u6258\u7BA1\u81EA\u5DF1\u7684\u81EA\u6258\u7BA1\u8FD0\u884C\u5668\u3002</p></div><p>\u53EF\u4EE5\u7B80\u5355\u7406\u89E3:\u5BF9\u4E8E\u6211\u4EEC\u6B64\u6B21\u7528\u4E8E\u81EA\u52A8\u5316\u90E8\u7F72\u6765\u8BF4,<code>github actions</code>\u5C31\u662F\u4E00\u53F0\u914D\u7F6E\u5F3A\u5927\u7684<code>Liunx</code>\u670D\u52A1\u5668!</p><h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> \u7B80\u5355\u4F7F\u7528</h2><p>\u5728<code>git</code>\u9879\u76EE\u76EE\u5F55\u4E0B\u65B0\u5EFA<code>.github/workflows</code>\u6587\u4EF6,\u65B0\u5EFA<code>deploy-docs.yml</code>\u914D\u7F6E\u6587\u4EF6</p><p>\u5177\u4F53\u914D\u7F6E\u53EF\u4EE5\u6839\u636E\u4EE5\u4E0B\u6587\u4EF6\u8FDB\u884C\u4FEE\u6539</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> \u90E8\u7F72\u6587\u6863

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token comment"># \u786E\u4FDD\u8FD9\u662F\u4F60\u6B63\u5728\u4F7F\u7528\u7684\u5206\u652F\u540D\u79F0</span>
      <span class="token punctuation">-</span> master

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy Gh Pages
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
          <span class="token comment"># \u5982\u679C\u4F60\u6587\u6863\u9700\u8981 Git \u5B50\u6A21\u5757\uFF0C\u53D6\u6D88\u6CE8\u91CA\u4E0B\u4E00\u884C</span>
          <span class="token comment"># submodules: true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2.2.2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">7</span>


      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> 16.x
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token string">&#39;pnpm&#39;</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies
        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm install

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=4096
        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm run build

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy Dist
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u8FD9\u662F\u6587\u6863\u90E8\u7F72\u5230\u7684\u5206\u652F\u540D\u79F0</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(m,b){const a=l("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",d,[r,c(a)])]),k])}var _=e(o,[["render",v],["__file","giuhub_actions.html.vue"]]);export{_ as default};
