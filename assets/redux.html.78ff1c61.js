import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,e as d}from"./app.098793b1.js";const i={},s=d(`<h1 id="redux" tabindex="-1"><a class="header-anchor" href="#redux" aria-hidden="true">#</a> Redux</h1><h2 id="_1-\u6C42\u548C\u6848\u4F8B-redux\u7CBE\u7B80\u7248" tabindex="-1"><a class="header-anchor" href="#_1-\u6C42\u548C\u6848\u4F8B-redux\u7CBE\u7B80\u7248" aria-hidden="true">#</a> 1.\u6C42\u548C\u6848\u4F8B_redux\u7CBE\u7B80\u7248</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>(1).\u53BB\u9664Count\u7EC4\u4EF6\u81EA\u8EAB\u7684\u72B6\u6001
(2).src\u4E0B\u5EFA\u7ACB:
        -redux
          -store.js
          -count_reducer.js

(3).store.js\uFF1A
      1).\u5F15\u5165redux\u4E2D\u7684createStore\u51FD\u6570\uFF0C\u521B\u5EFA\u4E00\u4E2Astore
      2).createStore\u8C03\u7528\u65F6\u8981\u4F20\u5165\u4E00\u4E2A\u4E3A\u5176\u670D\u52A1\u7684reducer
      3).\u8BB0\u5F97\u66B4\u9732store\u5BF9\u8C61

(4).count_reducer.js\uFF1A
      1).reducer\u7684\u672C\u8D28\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u63A5\u6536\uFF1ApreState,action\uFF0C\u8FD4\u56DE\u52A0\u5DE5\u540E\u7684\u72B6\u6001
      2).reducer\u6709\u4E24\u4E2A\u4F5C\u7528\uFF1A\u521D\u59CB\u5316\u72B6\u6001\uFF0C\u52A0\u5DE5\u72B6\u6001
      3).reducer\u88AB\u7B2C\u4E00\u6B21\u8C03\u7528\u65F6\uFF0C\u662Fstore\u81EA\u52A8\u89E6\u53D1\u7684\uFF0C
              \u4F20\u9012\u7684preState\u662Fundefined,
              \u4F20\u9012\u7684action\u662F:{type:&#39;@@REDUX/INIT_a.2.b.4}

(5).\u5728index.js\u4E2D\u76D1\u6D4Bstore\u4E2D\u72B6\u6001\u7684\u6539\u53D8\uFF0C\u4E00\u65E6\u53D1\u751F\u6539\u53D8\u91CD\u65B0\u6E32\u67D3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span><span class="token punctuation">/&gt;</span></span>
    \u5907\u6CE8\uFF1Aredux\u53EA\u8D1F\u8D23\u7BA1\u7406\u72B6\u6001\uFF0C\u81F3\u4E8E\u72B6\u6001\u7684\u6539\u53D8\u9A71\u52A8\u7740\u9875\u9762\u7684\u5C55\u793A\uFF0C\u8981\u9760\u6211\u4EEC\u81EA\u5DF1\u5199\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u6C42\u548C\u6848\u4F8B-redux\u5B8C\u6574\u7248" tabindex="-1"><a class="header-anchor" href="#_2-\u6C42\u548C\u6848\u4F8B-redux\u5B8C\u6574\u7248" aria-hidden="true">#</a> 2.\u6C42\u548C\u6848\u4F8B_redux\u5B8C\u6574\u7248</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>\u65B0\u589E\u6587\u4EF6\uFF1A
    1.count_action.js \u4E13\u95E8\u7528\u4E8E\u521B\u5EFAaction\u5BF9\u8C61
    2.constant.js \u653E\u7F6E\u5BB9\u6613\u5199\u9519\u7684type\u503C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u6C42\u548C\u6848\u4F8B-redux\u5F02\u6B65action\u7248" tabindex="-1"><a class="header-anchor" href="#_3-\u6C42\u548C\u6848\u4F8B-redux\u5F02\u6B65action\u7248" aria-hidden="true">#</a> 3.\u6C42\u548C\u6848\u4F8B_redux\u5F02\u6B65action\u7248</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>(1).\u660E\u786E\uFF1A\u5EF6\u8FDF\u7684\u52A8\u4F5C\u4E0D\u60F3\u4EA4\u7ED9\u7EC4\u4EF6\u81EA\u8EAB\uFF0C\u60F3\u4EA4\u7ED9action
(2).\u4F55\u65F6\u9700\u8981\u5F02\u6B65action\uFF1A\u60F3\u8981\u5BF9\u72B6\u6001\u8FDB\u884C\u64CD\u4F5C\uFF0C\u4F46\u662F\u5177\u4F53\u7684\u6570\u636E\u9760\u5F02\u6B65\u4EFB\u52A1\u8FD4\u56DE\u3002
(3).\u5177\u4F53\u7F16\u7801\uFF1A
    1).yarn add redux-thunk\uFF0C\u5E76\u914D\u7F6E\u5728store\u4E2D
    2).\u521B\u5EFAaction\u7684\u51FD\u6570\u4E0D\u518D\u8FD4\u56DE\u4E00\u822C\u5BF9\u8C61\uFF0C\u800C\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u4E2D\u5199\u5F02\u6B65\u4EFB\u52A1\u3002
    3).\u5F02\u6B65\u4EFB\u52A1\u6709\u7ED3\u679C\u540E\uFF0C\u5206\u53D1\u4E00\u4E2A\u540C\u6B65\u7684action\u53BB\u771F\u6B63\u64CD\u4F5C\u6570\u636E\u3002
(4).\u5907\u6CE8\uFF1A\u5F02\u6B65action\u4E0D\u662F\u5FC5\u987B\u8981\u5199\u7684\uFF0C\u5B8C\u5168\u53EF\u4EE5\u81EA\u5DF1\u7B49\u5F85\u5F02\u6B65\u4EFB\u52A1\u7684\u7ED3\u679C\u4E86\u518D\u53BB\u5206\u53D1\u540C\u6B65action\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u6C42\u548C\u6848\u4F8B-react-redux\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_4-\u6C42\u548C\u6848\u4F8B-react-redux\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> 4.\u6C42\u548C\u6848\u4F8B_react-redux\u57FA\u672C\u4F7F\u7528</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>(1).\u660E\u786E\u4E24\u4E2A\u6982\u5FF5\uFF1A
      1).UI\u7EC4\u4EF6:\u4E0D\u80FD\u4F7F\u7528\u4EFB\u4F55redux\u7684api\uFF0C\u53EA\u8D1F\u8D23\u9875\u9762\u7684\u5448\u73B0\u3001\u4EA4\u4E92\u7B49\u3002
      2).\u5BB9\u5668\u7EC4\u4EF6\uFF1A\u8D1F\u8D23\u548Credux\u901A\u4FE1\uFF0C\u5C06\u7ED3\u679C\u4EA4\u7ED9UI\u7EC4\u4EF6\u3002
(2).\u5982\u4F55\u521B\u5EFA\u4E00\u4E2A\u5BB9\u5668\u7EC4\u4EF6\u2014\u2014\u2014\u2014\u9760react-redux \u7684 connect\u51FD\u6570
        connect(mapStateToProps,mapDispatchToProps)(UI\u7EC4\u4EF6)
          -mapStateToProps:\u6620\u5C04\u72B6\u6001\uFF0C\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61
          -mapDispatchToProps:\u6620\u5C04\u64CD\u4F5C\u72B6\u6001\u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61
(3).\u5907\u6CE81\uFF1A\u5BB9\u5668\u7EC4\u4EF6\u4E2D\u7684store\u662F\u9760props\u4F20\u8FDB\u53BB\u7684\uFF0C\u800C\u4E0D\u662F\u5728\u5BB9\u5668\u7EC4\u4EF6\u4E2D\u76F4\u63A5\u5F15\u5165
(4).\u5907\u6CE82\uFF1AmapDispatchToProps\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u6C42\u548C\u6848\u4F8B-react-redux\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_5-\u6C42\u548C\u6848\u4F8B-react-redux\u4F18\u5316" aria-hidden="true">#</a> 5.\u6C42\u548C\u6848\u4F8B_react-redux\u4F18\u5316</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>(1).\u5BB9\u5668\u7EC4\u4EF6\u548CUI\u7EC4\u4EF6\u6574\u5408\u4E00\u4E2A\u6587\u4EF6
(2).\u65E0\u9700\u81EA\u5DF1\u7ED9\u5BB9\u5668\u7EC4\u4EF6\u4F20\u9012store\uFF0C\u7ED9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span><span class="token punctuation">/&gt;</span></span>\u5305\u88F9\u4E00\u4E2A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Provider</span> <span class="token attr-name">store</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{store}</span><span class="token punctuation">&gt;</span></span>\u5373\u53EF\u3002
(3).\u4F7F\u7528\u4E86react-redux\u540E\u4E5F\u4E0D\u7528\u518D\u81EA\u5DF1\u68C0\u6D4Bredux\u4E2D\u72B6\u6001\u7684\u6539\u53D8\u4E86\uFF0C\u5BB9\u5668\u7EC4\u4EF6\u53EF\u4EE5\u81EA\u52A8\u5B8C\u6210\u8FD9\u4E2A\u5DE5\u4F5C\u3002
(4).mapDispatchToProps\u4E5F\u53EF\u4EE5\u7B80\u5355\u7684\u5199\u6210\u4E00\u4E2A\u5BF9\u8C61
(5).\u4E00\u4E2A\u7EC4\u4EF6\u8981\u548Credux\u201C\u6253\u4EA4\u9053\u201D\u8981\u7ECF\u8FC7\u54EA\u51E0\u6B65\uFF1F
        (1).\u5B9A\u4E49\u597DUI\u7EC4\u4EF6---\u4E0D\u66B4\u9732
        (2).\u5F15\u5165connect\u751F\u6210\u4E00\u4E2A\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u5E76\u66B4\u9732\uFF0C\u5199\u6CD5\u5982\u4E0B\uFF1A
            connect(
              state =&gt; ({key:value}), //\u6620\u5C04\u72B6\u6001
              {key:xxxxxAction} //\u6620\u5C04\u64CD\u4F5C\u72B6\u6001\u7684\u65B9\u6CD5
            )(UI\u7EC4\u4EF6)
        (4).\u5728UI\u7EC4\u4EF6\u4E2D\u901A\u8FC7this.props.xxxxxxx\u8BFB\u53D6\u548C\u64CD\u4F5C\u72B6\u6001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u6C42\u548C\u6848\u4F8B-react-redux\u6570\u636E\u5171\u4EAB\u7248" tabindex="-1"><a class="header-anchor" href="#_6-\u6C42\u548C\u6848\u4F8B-react-redux\u6570\u636E\u5171\u4EAB\u7248" aria-hidden="true">#</a> 6.\u6C42\u548C\u6848\u4F8B_react-redux\u6570\u636E\u5171\u4EAB\u7248</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>(1).\u5B9A\u4E49\u4E00\u4E2APserson\u7EC4\u4EF6\uFF0C\u548CCount\u7EC4\u4EF6\u901A\u8FC7redux\u5171\u4EAB\u6570\u636E\u3002
(2).\u4E3APerson\u7EC4\u4EF6\u7F16\u5199\uFF1Areducer\u3001action\uFF0C\u914D\u7F6Econstant\u5E38\u91CF\u3002
(3).\u91CD\u70B9\uFF1APerson\u7684reducer\u548CCount\u7684Reducer\u8981\u4F7F\u7528combineReducers\u8FDB\u884C\u5408\u5E76\uFF0C
    \u5408\u5E76\u540E\u7684\u603B\u72B6\u6001\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF01\uFF01\uFF01
(4).\u4EA4\u7ED9store\u7684\u662F\u603Breducer\uFF0C\u6700\u540E\u6CE8\u610F\u5728\u7EC4\u4EF6\u4E2D\u53D6\u51FA\u72B6\u6001\u7684\u65F6\u5019\uFF0C\u8BB0\u5F97\u201C\u53D6\u5230\u4F4D\u201D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-\u6C42\u548C\u6848\u4F8B-react-redux\u5F00\u53D1\u8005\u5DE5\u5177\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_7-\u6C42\u548C\u6848\u4F8B-react-redux\u5F00\u53D1\u8005\u5DE5\u5177\u7684\u4F7F\u7528" aria-hidden="true">#</a> 7.\u6C42\u548C\u6848\u4F8B_react-redux\u5F00\u53D1\u8005\u5DE5\u5177\u7684\u4F7F\u7528</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>(1).yarn add redux-devtools-extension
(2).store\u4E2D\u8FDB\u884C\u914D\u7F6E
    import {composeWithDevTools} from &#39;redux-devtools-extension&#39;
    const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-\u6C42\u548C\u6848\u4F8B-react-redux\u6700\u7EC8\u7248" tabindex="-1"><a class="header-anchor" href="#_8-\u6C42\u548C\u6848\u4F8B-react-redux\u6700\u7EC8\u7248" aria-hidden="true">#</a> 8.\u6C42\u548C\u6848\u4F8B_react-redux\u6700\u7EC8\u7248</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>(1).\u6240\u6709\u53D8\u91CF\u540D\u5B57\u8981\u89C4\u8303\uFF0C\u5C3D\u91CF\u89E6\u53D1\u5BF9\u8C61\u7684\u7B80\u5199\u5F62\u5F0F\u3002
(2).reducers\u6587\u4EF6\u5939\u4E2D\uFF0C\u7F16\u5199index.js\u4E13\u95E8\u7528\u4E8E\u6C47\u603B\u5E76\u66B4\u9732\u6240\u6709\u7684reducer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,17),r=[s];function c(l,u){return n(),a("div",null,r)}var v=e(i,[["render",c],["__file","redux.html.vue"]]);export{v as default};
