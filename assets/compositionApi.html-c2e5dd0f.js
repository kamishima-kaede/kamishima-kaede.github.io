import{_ as o,W as c,X as l,Z as a,$ as n,Y as p,a1 as t,C as v,a3 as i,a4 as u}from"./framework-f9ba3f0e.js";const r="/assets/lifecycle_old-e0fdf4d9.png",k="/assets/lifecycle_new-f44c1d1a.svg";const m={},s=e=>(i("data-v-1470e36d"),e=e(),u(),e),h=r+"#vueLeft",b=k+"#vueRight",f=s(()=>a("h1",{id:"二、常用-composition-api",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#二、常用-composition-api","aria-hidden":"true"},"#"),n(" 二、常用 Composition API")],-1)),g={href:"https://v3.cn.vuejs.org/guide/composition-api-introduction.html",target:"_blank",rel:"noopener noreferrer"},_=t(`<h2 id="_1-拉开序幕的setup" tabindex="-1" data-v-1470e36d><a class="header-anchor" href="#_1-拉开序幕的setup" aria-hidden="true" data-v-1470e36d>#</a> 1.拉开序幕的setup</h2><ol data-v-1470e36d><li data-v-1470e36d>理解：Vue3.0中一个新的配置项，值为一个函数。</li><li data-v-1470e36d>setup是所有<strong style="color:#DD5145;" data-v-1470e36d>Composition API（组合API）</strong><i style="color:gray;font-weight:bold;" data-v-1470e36d>“ 表演的舞台 ”</i>。</li><li data-v-1470e36d>组件中所用到的：数据、方法等等，均要配置在setup中。</li><li data-v-1470e36d>setup函数的两种返回值： <ol data-v-1470e36d><li data-v-1470e36d>若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）</li><li data-v-1470e36d><span style="color:#aad;" data-v-1470e36d>若返回一个渲染函数：则可以自定义渲染内容。（了解）</span></li></ol></li><li data-v-1470e36d>注意点： <ol data-v-1470e36d><li data-v-1470e36d>尽量不要与Vue2.x配置混用 <ul data-v-1470e36d><li data-v-1470e36d>Vue2.x配置（data、methos、computed...）中<strong style="color:#DD5145;" data-v-1470e36d>可以访问到</strong>setup中的属性、方法。</li><li data-v-1470e36d>但在setup中<strong style="color:#DD5145;" data-v-1470e36d>不能访问到</strong>Vue2.x配置（data、methos、computed...）。</li><li data-v-1470e36d>如果有重名, setup优先。</li></ul></li><li data-v-1470e36d>setup不能是一个async函数，因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性。（后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）</li></ol></li></ol><h2 id="_2-ref函数" tabindex="-1" data-v-1470e36d><a class="header-anchor" href="#_2-ref函数" aria-hidden="true" data-v-1470e36d>#</a> 2.ref函数</h2><ul data-v-1470e36d><li data-v-1470e36d><p data-v-1470e36d>作用: 定义一个响应式的数据</p></li><li data-v-1470e36d><p data-v-1470e36d>语法: <code data-v-1470e36d>const xxx = ref(initValue)</code></p><ul data-v-1470e36d><li data-v-1470e36d>创建一个包含响应式数据的<strong style="color:#DD5145;" data-v-1470e36d>引用对象（reference对象，简称ref对象）</strong>。</li><li data-v-1470e36d>JS中操作数据： <code data-v-1470e36d>xxx.value</code></li><li data-v-1470e36d>模板中读取数据: 不需要.value，直接：</li></ul><div class="language-vue line-numbers-mode" data-ext="vue" data-v-1470e36d><pre class="language-vue" data-v-1470e36d><code data-v-1470e36d>  <span class="token tag" data-v-1470e36d><span class="token tag" data-v-1470e36d><span class="token punctuation" data-v-1470e36d>&lt;</span>div</span><span class="token punctuation" data-v-1470e36d>&gt;</span></span>{{xxx}}<span class="token tag" data-v-1470e36d><span class="token tag" data-v-1470e36d><span class="token punctuation" data-v-1470e36d>&lt;/</span>div</span><span class="token punctuation" data-v-1470e36d>&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true" data-v-1470e36d><div class="line-number" data-v-1470e36d></div></div></div></li><li data-v-1470e36d><p data-v-1470e36d>备注：</p><ul data-v-1470e36d><li data-v-1470e36d>接收的数据可以是：基本类型、也可以是对象类型。</li><li data-v-1470e36d>基本类型的数据：响应式依然是靠<code data-v-1470e36d>Object.defineProperty()</code>的<code data-v-1470e36d>get</code>与<code data-v-1470e36d>set</code>完成的。</li><li data-v-1470e36d>对象类型的数据：内部 <i style="color:gray;font-weight:bold;" data-v-1470e36d>“ 求助 ”</i> 了Vue3.0中的一个新函数—— <code data-v-1470e36d>reactive</code>函数。</li></ul></li></ul><h2 id="_3-reactive函数" tabindex="-1" data-v-1470e36d><a class="header-anchor" href="#_3-reactive函数" aria-hidden="true" data-v-1470e36d>#</a> 3.reactive函数</h2><ul data-v-1470e36d><li data-v-1470e36d>作用: 定义一个<strong style="color:#DD5145;" data-v-1470e36d>对象类型</strong>的响应式数据（基本类型不要用它，要用<code data-v-1470e36d>ref</code>函数）</li><li data-v-1470e36d>语法：<code data-v-1470e36d>const 代理对象= reactive(源对象)</code>接收一个对象（或数组），返回一个<strong style="color:#DD5145;" data-v-1470e36d>代理对象（Proxy的实例对象，简称proxy对象）</strong></li><li data-v-1470e36d>reactive定义的响应式数据是“深层次的”。</li><li data-v-1470e36d>内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。</li></ul><h2 id="_4-vue3-0中的响应式原理" tabindex="-1" data-v-1470e36d><a class="header-anchor" href="#_4-vue3-0中的响应式原理" aria-hidden="true" data-v-1470e36d>#</a> 4.Vue3.0中的响应式原理</h2><h3 id="vue2-x的响应式" tabindex="-1" data-v-1470e36d><a class="header-anchor" href="#vue2-x的响应式" aria-hidden="true" data-v-1470e36d>#</a> vue2.x的响应式</h3><ul data-v-1470e36d><li data-v-1470e36d><p data-v-1470e36d>实现原理：</p><ul data-v-1470e36d><li data-v-1470e36d><p data-v-1470e36d>对象类型：通过<code data-v-1470e36d>Object.defineProperty()</code>对属性的读取、修改进行拦截（数据劫持）。</p></li><li data-v-1470e36d><p data-v-1470e36d>数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-v-1470e36d><pre class="language-javascript" data-v-1470e36d><code data-v-1470e36d>Object<span class="token punctuation" data-v-1470e36d>.</span><span class="token function" data-v-1470e36d>defineProperty</span><span class="token punctuation" data-v-1470e36d>(</span>data<span class="token punctuation" data-v-1470e36d>,</span> <span class="token string" data-v-1470e36d>&#39;count&#39;</span><span class="token punctuation" data-v-1470e36d>,</span> <span class="token punctuation" data-v-1470e36d>{</span>
    <span class="token function" data-v-1470e36d>get</span> <span class="token punctuation" data-v-1470e36d>(</span><span class="token punctuation" data-v-1470e36d>)</span> <span class="token punctuation" data-v-1470e36d>{</span><span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>,</span> 
    <span class="token function" data-v-1470e36d>set</span> <span class="token punctuation" data-v-1470e36d>(</span><span class="token punctuation" data-v-1470e36d>)</span> <span class="token punctuation" data-v-1470e36d>{</span><span class="token punctuation" data-v-1470e36d>}</span>
<span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>)</span>
</code></pre><div class="line-numbers" aria-hidden="true" data-v-1470e36d><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div></div></div></li></ul></li><li data-v-1470e36d><p data-v-1470e36d>存在问题：</p><ul data-v-1470e36d><li data-v-1470e36d>新增属性、删除属性, 界面不会更新。</li><li data-v-1470e36d>直接通过下标修改数组, 界面不会自动更新。</li></ul></li></ul><h3 id="vue3-0的响应式" tabindex="-1" data-v-1470e36d><a class="header-anchor" href="#vue3-0的响应式" aria-hidden="true" data-v-1470e36d>#</a> Vue3.0的响应式</h3>`,10),y=s(()=>a("li",null,"通过Proxy（代理）: 拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。",-1)),x=s(()=>a("li",null,"通过Reflect（反射）: 对源对象的属性进行操作。",-1)),w={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy",target:"_blank",rel:"noopener noreferrer"},V={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect",target:"_blank",rel:"noopener noreferrer"},D=t(`<div class="language-javascript line-numbers-mode" data-ext="js" data-v-1470e36d><pre class="language-javascript" data-v-1470e36d><code data-v-1470e36d><span class="token keyword" data-v-1470e36d>new</span> <span class="token class-name" data-v-1470e36d>Proxy</span><span class="token punctuation" data-v-1470e36d>(</span>data<span class="token punctuation" data-v-1470e36d>,</span> <span class="token punctuation" data-v-1470e36d>{</span>
    <span class="token comment" data-v-1470e36d>//拦截读取属性值</span>
    <span class="token function" data-v-1470e36d>get</span> <span class="token punctuation" data-v-1470e36d>(</span>target<span class="token punctuation" data-v-1470e36d>,</span> prop<span class="token punctuation" data-v-1470e36d>)</span> <span class="token punctuation" data-v-1470e36d>{</span>
      <span class="token keyword" data-v-1470e36d>return</span> Reflect<span class="token punctuation" data-v-1470e36d>.</span><span class="token function" data-v-1470e36d>get</span><span class="token punctuation" data-v-1470e36d>(</span>target<span class="token punctuation" data-v-1470e36d>,</span> prop<span class="token punctuation" data-v-1470e36d>)</span>
    <span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>,</span>
    <span class="token comment" data-v-1470e36d>// 拦截设置属性值或添加新属性</span>
    <span class="token function" data-v-1470e36d>set</span> <span class="token punctuation" data-v-1470e36d>(</span>target<span class="token punctuation" data-v-1470e36d>,</span> prop<span class="token punctuation" data-v-1470e36d>,</span> value<span class="token punctuation" data-v-1470e36d>)</span> <span class="token punctuation" data-v-1470e36d>{</span>
      <span class="token keyword" data-v-1470e36d>return</span> Reflect<span class="token punctuation" data-v-1470e36d>.</span><span class="token function" data-v-1470e36d>set</span><span class="token punctuation" data-v-1470e36d>(</span>target<span class="token punctuation" data-v-1470e36d>,</span> prop<span class="token punctuation" data-v-1470e36d>,</span> value<span class="token punctuation" data-v-1470e36d>)</span>
    <span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>,</span>
    <span class="token comment" data-v-1470e36d>// 拦截删除属性</span>
    <span class="token function" data-v-1470e36d>deleteProperty</span> <span class="token punctuation" data-v-1470e36d>(</span><span class="token parameter" data-v-1470e36d>target<span class="token punctuation" data-v-1470e36d>,</span> prop</span><span class="token punctuation" data-v-1470e36d>)</span> <span class="token punctuation" data-v-1470e36d>{</span>
      <span class="token keyword" data-v-1470e36d>return</span> Reflect<span class="token punctuation" data-v-1470e36d>.</span><span class="token function" data-v-1470e36d>deleteProperty</span><span class="token punctuation" data-v-1470e36d>(</span>target<span class="token punctuation" data-v-1470e36d>,</span> prop<span class="token punctuation" data-v-1470e36d>)</span>
    <span class="token punctuation" data-v-1470e36d>}</span>
<span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>)</span>

proxy<span class="token punctuation" data-v-1470e36d>.</span>name <span class="token operator" data-v-1470e36d>=</span> <span class="token string" data-v-1470e36d>&#39;tom&#39;</span>   
</code></pre><div class="line-numbers" aria-hidden="true" data-v-1470e36d><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div></div></div>`,1),j=t(`<h2 id="_5-reactive对比ref" tabindex="-1" data-v-1470e36d><a class="header-anchor" href="#_5-reactive对比ref" aria-hidden="true" data-v-1470e36d>#</a> 5.reactive对比ref</h2><ul data-v-1470e36d><li data-v-1470e36d>从定义数据角度对比： <ul data-v-1470e36d><li data-v-1470e36d>ref用来定义：<strong style="color:#DD5145;" data-v-1470e36d>基本类型数据</strong>。</li><li data-v-1470e36d>reactive用来定义：<strong style="color:#DD5145;" data-v-1470e36d>对象（或数组）类型数据</strong>。</li><li data-v-1470e36d>备注：ref也可以用来定义<strong style="color:#DD5145;" data-v-1470e36d>对象（或数组）类型数据</strong>, 它内部会自动通过<code data-v-1470e36d>reactive</code>转为<strong style="color:#DD5145;" data-v-1470e36d>代理对象</strong>。</li></ul></li><li data-v-1470e36d>从原理角度对比： <ul data-v-1470e36d><li data-v-1470e36d>ref通过<code data-v-1470e36d>Object.defineProperty()</code>的<code data-v-1470e36d>get</code>与<code data-v-1470e36d>set</code>来实现响应式（数据劫持）。</li><li data-v-1470e36d>reactive通过使用<strong style="color:#DD5145;" data-v-1470e36d>Proxy</strong>来实现响应式（数据劫持）, 并通过<strong style="color:#DD5145;" data-v-1470e36d>Reflect</strong>操作<strong style="color:orange;" data-v-1470e36d>源对象</strong>内部的数据。</li></ul></li><li data-v-1470e36d>从使用角度对比： <ul data-v-1470e36d><li data-v-1470e36d>ref定义的数据：操作数据<strong style="color:#DD5145;" data-v-1470e36d>需要</strong><code data-v-1470e36d>.value</code>，读取数据时模板中直接读取<strong style="color:#DD5145;" data-v-1470e36d>不需要</strong><code data-v-1470e36d>.value</code>。</li><li data-v-1470e36d>reactive定义的数据：操作数据与读取数据：<strong style="color:#DD5145;" data-v-1470e36d>均不需要</strong><code data-v-1470e36d>.value</code>。</li></ul></li></ul><h2 id="_6-setup的两个注意点" tabindex="-1" data-v-1470e36d><a class="header-anchor" href="#_6-setup的两个注意点" aria-hidden="true" data-v-1470e36d>#</a> 6.setup的两个注意点</h2><ul data-v-1470e36d><li data-v-1470e36d><p data-v-1470e36d>setup执行的时机</p><ul data-v-1470e36d><li data-v-1470e36d>在beforeCreate之前执行一次，this是undefined。</li></ul></li><li data-v-1470e36d><p data-v-1470e36d>setup的参数</p><ul data-v-1470e36d><li data-v-1470e36d>props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。</li><li data-v-1470e36d>context：上下文对象 <ul data-v-1470e36d><li data-v-1470e36d>attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 <code data-v-1470e36d>this.$attrs</code>。</li><li data-v-1470e36d>slots: 收到的插槽内容, 相当于 <code data-v-1470e36d>this.$slots</code>。</li><li data-v-1470e36d>emit: 分发自定义事件的函数, 相当于 <code data-v-1470e36d>this.$emit</code>。</li></ul></li></ul></li></ul><h2 id="_7-计算属性与监视" tabindex="-1" data-v-1470e36d><a class="header-anchor" href="#_7-计算属性与监视" aria-hidden="true" data-v-1470e36d>#</a> 7.计算属性与监视</h2><h3 id="_1-computed函数" tabindex="-1" data-v-1470e36d><a class="header-anchor" href="#_1-computed函数" aria-hidden="true" data-v-1470e36d>#</a> 1.computed函数</h3><ul data-v-1470e36d><li data-v-1470e36d><p data-v-1470e36d>与Vue2.x中computed配置功能一致</p></li><li data-v-1470e36d><p data-v-1470e36d>写法</p><div class="language-javascript line-numbers-mode" data-ext="js" data-v-1470e36d><pre class="language-javascript" data-v-1470e36d><code data-v-1470e36d><span class="token keyword" data-v-1470e36d>import</span> <span class="token punctuation" data-v-1470e36d>{</span>computed<span class="token punctuation" data-v-1470e36d>}</span> <span class="token keyword" data-v-1470e36d>from</span> <span class="token string" data-v-1470e36d>&#39;vue&#39;</span>

<span class="token function" data-v-1470e36d>setup</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token punctuation" data-v-1470e36d>)</span><span class="token punctuation" data-v-1470e36d>{</span>
    <span class="token operator" data-v-1470e36d>...</span>
  <span class="token comment" data-v-1470e36d>//计算属性——简写</span>
    <span class="token keyword" data-v-1470e36d>let</span> fullName <span class="token operator" data-v-1470e36d>=</span> <span class="token function" data-v-1470e36d>computed</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token punctuation" data-v-1470e36d>)</span><span class="token operator" data-v-1470e36d>=&gt;</span><span class="token punctuation" data-v-1470e36d>{</span>
        <span class="token keyword" data-v-1470e36d>return</span> person<span class="token punctuation" data-v-1470e36d>.</span>firstName <span class="token operator" data-v-1470e36d>+</span> <span class="token string" data-v-1470e36d>&#39;-&#39;</span> <span class="token operator" data-v-1470e36d>+</span> person<span class="token punctuation" data-v-1470e36d>.</span>lastName
    <span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>)</span>
    <span class="token comment" data-v-1470e36d>//计算属性——完整</span>
    <span class="token keyword" data-v-1470e36d>let</span> fullName <span class="token operator" data-v-1470e36d>=</span> <span class="token function" data-v-1470e36d>computed</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token punctuation" data-v-1470e36d>{</span>
        <span class="token function" data-v-1470e36d>get</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token punctuation" data-v-1470e36d>)</span><span class="token punctuation" data-v-1470e36d>{</span>
            <span class="token keyword" data-v-1470e36d>return</span> person<span class="token punctuation" data-v-1470e36d>.</span>firstName <span class="token operator" data-v-1470e36d>+</span> <span class="token string" data-v-1470e36d>&#39;-&#39;</span> <span class="token operator" data-v-1470e36d>+</span> person<span class="token punctuation" data-v-1470e36d>.</span>lastName
        <span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>,</span>
        <span class="token function" data-v-1470e36d>set</span><span class="token punctuation" data-v-1470e36d>(</span>value<span class="token punctuation" data-v-1470e36d>)</span><span class="token punctuation" data-v-1470e36d>{</span>
            <span class="token keyword" data-v-1470e36d>const</span> nameArr <span class="token operator" data-v-1470e36d>=</span> value<span class="token punctuation" data-v-1470e36d>.</span><span class="token function" data-v-1470e36d>split</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token string" data-v-1470e36d>&#39;-&#39;</span><span class="token punctuation" data-v-1470e36d>)</span>
            person<span class="token punctuation" data-v-1470e36d>.</span>firstName <span class="token operator" data-v-1470e36d>=</span> nameArr<span class="token punctuation" data-v-1470e36d>[</span><span class="token number" data-v-1470e36d>0</span><span class="token punctuation" data-v-1470e36d>]</span>
            person<span class="token punctuation" data-v-1470e36d>.</span>lastName <span class="token operator" data-v-1470e36d>=</span> nameArr<span class="token punctuation" data-v-1470e36d>[</span><span class="token number" data-v-1470e36d>1</span><span class="token punctuation" data-v-1470e36d>]</span>
        <span class="token punctuation" data-v-1470e36d>}</span>
    <span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>)</span>
<span class="token punctuation" data-v-1470e36d>}</span>
</code></pre><div class="line-numbers" aria-hidden="true" data-v-1470e36d><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div></div></div></li></ul><h3 id="_2-watch函数" tabindex="-1" data-v-1470e36d><a class="header-anchor" href="#_2-watch函数" aria-hidden="true" data-v-1470e36d>#</a> 2.watch函数</h3><ul data-v-1470e36d><li data-v-1470e36d><p data-v-1470e36d>与Vue2.x中watch配置功能一致</p></li><li data-v-1470e36d><p data-v-1470e36d>两个小“坑”：</p><ul data-v-1470e36d><li data-v-1470e36d>监视reactive定义的响应式数据时：oldValue无法正确获取、强制开启了深度监视（deep配置失效）。</li><li data-v-1470e36d>监视reactive定义的响应式数据中某个属性时：deep配置有效。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-v-1470e36d><pre class="language-javascript" data-v-1470e36d><code data-v-1470e36d><span class="token comment" data-v-1470e36d>//情况一：监视ref定义的响应式数据</span>
<span class="token function" data-v-1470e36d>watch</span><span class="token punctuation" data-v-1470e36d>(</span>sum<span class="token punctuation" data-v-1470e36d>,</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token parameter" data-v-1470e36d>newValue<span class="token punctuation" data-v-1470e36d>,</span>oldValue</span><span class="token punctuation" data-v-1470e36d>)</span><span class="token operator" data-v-1470e36d>=&gt;</span><span class="token punctuation" data-v-1470e36d>{</span>
  console<span class="token punctuation" data-v-1470e36d>.</span><span class="token function" data-v-1470e36d>log</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token string" data-v-1470e36d>&#39;sum变化了&#39;</span><span class="token punctuation" data-v-1470e36d>,</span>newValue<span class="token punctuation" data-v-1470e36d>,</span>oldValue<span class="token punctuation" data-v-1470e36d>)</span>
<span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>,</span><span class="token punctuation" data-v-1470e36d>{</span><span class="token literal-property property" data-v-1470e36d>immediate</span><span class="token operator" data-v-1470e36d>:</span><span class="token boolean" data-v-1470e36d>true</span><span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>)</span>

<span class="token comment" data-v-1470e36d>//情况二：监视多个ref定义的响应式数据</span>
<span class="token function" data-v-1470e36d>watch</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token punctuation" data-v-1470e36d>[</span>sum<span class="token punctuation" data-v-1470e36d>,</span>msg<span class="token punctuation" data-v-1470e36d>]</span><span class="token punctuation" data-v-1470e36d>,</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token parameter" data-v-1470e36d>newValue<span class="token punctuation" data-v-1470e36d>,</span>oldValue</span><span class="token punctuation" data-v-1470e36d>)</span><span class="token operator" data-v-1470e36d>=&gt;</span><span class="token punctuation" data-v-1470e36d>{</span>
  console<span class="token punctuation" data-v-1470e36d>.</span><span class="token function" data-v-1470e36d>log</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token string" data-v-1470e36d>&#39;sum或msg变化了&#39;</span><span class="token punctuation" data-v-1470e36d>,</span>newValue<span class="token punctuation" data-v-1470e36d>,</span>oldValue<span class="token punctuation" data-v-1470e36d>)</span>
<span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>)</span> 

<span class="token comment" data-v-1470e36d>/* 情况三：监视reactive定义的响应式数据
      若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
      若watch监视的是reactive定义的响应式数据，则强制开启了深度监视 
*/</span>
<span class="token function" data-v-1470e36d>watch</span><span class="token punctuation" data-v-1470e36d>(</span>person<span class="token punctuation" data-v-1470e36d>,</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token parameter" data-v-1470e36d>newValue<span class="token punctuation" data-v-1470e36d>,</span>oldValue</span><span class="token punctuation" data-v-1470e36d>)</span><span class="token operator" data-v-1470e36d>=&gt;</span><span class="token punctuation" data-v-1470e36d>{</span>
  console<span class="token punctuation" data-v-1470e36d>.</span><span class="token function" data-v-1470e36d>log</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token string" data-v-1470e36d>&#39;person变化了&#39;</span><span class="token punctuation" data-v-1470e36d>,</span>newValue<span class="token punctuation" data-v-1470e36d>,</span>oldValue<span class="token punctuation" data-v-1470e36d>)</span>
<span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>,</span><span class="token punctuation" data-v-1470e36d>{</span><span class="token literal-property property" data-v-1470e36d>immediate</span><span class="token operator" data-v-1470e36d>:</span><span class="token boolean" data-v-1470e36d>true</span><span class="token punctuation" data-v-1470e36d>,</span><span class="token literal-property property" data-v-1470e36d>deep</span><span class="token operator" data-v-1470e36d>:</span><span class="token boolean" data-v-1470e36d>false</span><span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>)</span> <span class="token comment" data-v-1470e36d>//此处的deep配置不再奏效</span>

<span class="token comment" data-v-1470e36d>//情况四：监视reactive定义的响应式数据中的某个属性</span>
<span class="token function" data-v-1470e36d>watch</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token punctuation" data-v-1470e36d>)</span><span class="token operator" data-v-1470e36d>=&gt;</span>person<span class="token punctuation" data-v-1470e36d>.</span>job<span class="token punctuation" data-v-1470e36d>,</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token parameter" data-v-1470e36d>newValue<span class="token punctuation" data-v-1470e36d>,</span>oldValue</span><span class="token punctuation" data-v-1470e36d>)</span><span class="token operator" data-v-1470e36d>=&gt;</span><span class="token punctuation" data-v-1470e36d>{</span>
  console<span class="token punctuation" data-v-1470e36d>.</span><span class="token function" data-v-1470e36d>log</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token string" data-v-1470e36d>&#39;person的job变化了&#39;</span><span class="token punctuation" data-v-1470e36d>,</span>newValue<span class="token punctuation" data-v-1470e36d>,</span>oldValue<span class="token punctuation" data-v-1470e36d>)</span>
<span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>,</span><span class="token punctuation" data-v-1470e36d>{</span><span class="token literal-property property" data-v-1470e36d>immediate</span><span class="token operator" data-v-1470e36d>:</span><span class="token boolean" data-v-1470e36d>true</span><span class="token punctuation" data-v-1470e36d>,</span><span class="token literal-property property" data-v-1470e36d>deep</span><span class="token operator" data-v-1470e36d>:</span><span class="token boolean" data-v-1470e36d>true</span><span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>)</span> 

<span class="token comment" data-v-1470e36d>//情况五：监视reactive定义的响应式数据中的某些属性</span>
<span class="token function" data-v-1470e36d>watch</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token punctuation" data-v-1470e36d>[</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token punctuation" data-v-1470e36d>)</span><span class="token operator" data-v-1470e36d>=&gt;</span>person<span class="token punctuation" data-v-1470e36d>.</span>job<span class="token punctuation" data-v-1470e36d>,</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token punctuation" data-v-1470e36d>)</span><span class="token operator" data-v-1470e36d>=&gt;</span>person<span class="token punctuation" data-v-1470e36d>.</span>name<span class="token punctuation" data-v-1470e36d>]</span><span class="token punctuation" data-v-1470e36d>,</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token parameter" data-v-1470e36d>newValue<span class="token punctuation" data-v-1470e36d>,</span>oldValue</span><span class="token punctuation" data-v-1470e36d>)</span><span class="token operator" data-v-1470e36d>=&gt;</span><span class="token punctuation" data-v-1470e36d>{</span>
  console<span class="token punctuation" data-v-1470e36d>.</span><span class="token function" data-v-1470e36d>log</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token string" data-v-1470e36d>&#39;person的job变化了&#39;</span><span class="token punctuation" data-v-1470e36d>,</span>newValue<span class="token punctuation" data-v-1470e36d>,</span>oldValue<span class="token punctuation" data-v-1470e36d>)</span>
<span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>,</span><span class="token punctuation" data-v-1470e36d>{</span><span class="token literal-property property" data-v-1470e36d>immediate</span><span class="token operator" data-v-1470e36d>:</span><span class="token boolean" data-v-1470e36d>true</span><span class="token punctuation" data-v-1470e36d>,</span><span class="token literal-property property" data-v-1470e36d>deep</span><span class="token operator" data-v-1470e36d>:</span><span class="token boolean" data-v-1470e36d>true</span><span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>)</span>

<span class="token comment" data-v-1470e36d>//特殊情况</span>
<span class="token function" data-v-1470e36d>watch</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token punctuation" data-v-1470e36d>)</span><span class="token operator" data-v-1470e36d>=&gt;</span>person<span class="token punctuation" data-v-1470e36d>.</span>job<span class="token punctuation" data-v-1470e36d>,</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token parameter" data-v-1470e36d>newValue<span class="token punctuation" data-v-1470e36d>,</span>oldValue</span><span class="token punctuation" data-v-1470e36d>)</span><span class="token operator" data-v-1470e36d>=&gt;</span><span class="token punctuation" data-v-1470e36d>{</span>
    console<span class="token punctuation" data-v-1470e36d>.</span><span class="token function" data-v-1470e36d>log</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token string" data-v-1470e36d>&#39;person的job变化了&#39;</span><span class="token punctuation" data-v-1470e36d>,</span>newValue<span class="token punctuation" data-v-1470e36d>,</span>oldValue<span class="token punctuation" data-v-1470e36d>)</span>
<span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>,</span><span class="token punctuation" data-v-1470e36d>{</span><span class="token literal-property property" data-v-1470e36d>deep</span><span class="token operator" data-v-1470e36d>:</span><span class="token boolean" data-v-1470e36d>true</span><span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>)</span> <span class="token comment" data-v-1470e36d>//此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效</span>
</code></pre><div class="line-numbers" aria-hidden="true" data-v-1470e36d><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div></div></div></li></ul><h3 id="_3-watcheffect函数" tabindex="-1" data-v-1470e36d><a class="header-anchor" href="#_3-watcheffect函数" aria-hidden="true" data-v-1470e36d>#</a> 3.watchEffect函数</h3><ul data-v-1470e36d><li data-v-1470e36d><p data-v-1470e36d>watch的套路是：既要指明监视的属性，也要指明监视的回调。</p></li><li data-v-1470e36d><p data-v-1470e36d>watchEffect的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。</p></li><li data-v-1470e36d><p data-v-1470e36d>watchEffect有点像computed：</p><ul data-v-1470e36d><li data-v-1470e36d>但computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值。</li><li data-v-1470e36d>而watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-v-1470e36d><pre class="language-javascript" data-v-1470e36d><code data-v-1470e36d><span class="token comment" data-v-1470e36d>//watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。</span>
<span class="token function" data-v-1470e36d>watchEffect</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token punctuation" data-v-1470e36d>)</span><span class="token operator" data-v-1470e36d>=&gt;</span><span class="token punctuation" data-v-1470e36d>{</span>
    <span class="token keyword" data-v-1470e36d>const</span> x1 <span class="token operator" data-v-1470e36d>=</span> sum<span class="token punctuation" data-v-1470e36d>.</span>value
    <span class="token keyword" data-v-1470e36d>const</span> x2 <span class="token operator" data-v-1470e36d>=</span> person<span class="token punctuation" data-v-1470e36d>.</span>age
    console<span class="token punctuation" data-v-1470e36d>.</span><span class="token function" data-v-1470e36d>log</span><span class="token punctuation" data-v-1470e36d>(</span><span class="token string" data-v-1470e36d>&#39;watchEffect配置的回调执行了&#39;</span><span class="token punctuation" data-v-1470e36d>)</span>
<span class="token punctuation" data-v-1470e36d>}</span><span class="token punctuation" data-v-1470e36d>)</span>
</code></pre><div class="line-numbers" aria-hidden="true" data-v-1470e36d><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div><div class="line-number" data-v-1470e36d></div></div></div></li></ul><h2 id="_8-生命周期" tabindex="-1" data-v-1470e36d><a class="header-anchor" href="#_8-生命周期" aria-hidden="true" data-v-1470e36d>#</a> 8.生命周期</h2>`,12),P=s(()=>a("p",null,[a("img",{src:h,alt:"vue2.x的生命周期",title:"vue2.x的生命周期",loading:"lazy"}),a("img",{src:b,alt:"vue3.0的生命周期",title:"vue3.0的生命周期",loading:"lazy"})],-1)),R=t('<ul data-v-1470e36d><li data-v-1470e36d>Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有有两个被更名： <ul data-v-1470e36d><li data-v-1470e36d><code data-v-1470e36d>beforeDestroy</code>改名为 <code data-v-1470e36d>beforeUnmount</code></li><li data-v-1470e36d><code data-v-1470e36d>destroyed</code>改名为 <code data-v-1470e36d>unmounted</code></li></ul></li><li data-v-1470e36d>Vue3.0也提供了 Composition API 形式的生命周期钩子，与Vue2.x中钩子对应关系如下： <ul data-v-1470e36d><li data-v-1470e36d><code data-v-1470e36d>beforeCreate</code>===&gt;<code data-v-1470e36d>setup()</code></li><li data-v-1470e36d><code data-v-1470e36d>created</code>=======&gt;<code data-v-1470e36d>setup()</code></li><li data-v-1470e36d><code data-v-1470e36d>beforeMount</code> ===&gt;<code data-v-1470e36d>onBeforeMount</code></li><li data-v-1470e36d><code data-v-1470e36d>mounted</code>=======&gt;<code data-v-1470e36d>onMounted</code></li><li data-v-1470e36d><code data-v-1470e36d>beforeUpdate</code>===&gt;<code data-v-1470e36d>onBeforeUpdate</code></li><li data-v-1470e36d><code data-v-1470e36d>updated</code> =======&gt;<code data-v-1470e36d>onUpdated</code></li><li data-v-1470e36d><code data-v-1470e36d>beforeUnmount</code> ==&gt;<code data-v-1470e36d>onBeforeUnmount</code></li><li data-v-1470e36d><code data-v-1470e36d>unmounted</code> =====&gt;<code data-v-1470e36d>onUnmounted</code></li></ul></li></ul><h2 id="_9-自定义hook函数" tabindex="-1" data-v-1470e36d><a class="header-anchor" href="#_9-自定义hook函数" aria-hidden="true" data-v-1470e36d>#</a> 9.自定义hook函数</h2><ul data-v-1470e36d><li data-v-1470e36d><p data-v-1470e36d>什么是hook？—— 本质是一个函数，把setup函数中使用的Composition API进行了封装。</p></li><li data-v-1470e36d><p data-v-1470e36d>类似于vue2.x中的mixin。</p></li><li data-v-1470e36d><p data-v-1470e36d>自定义hook的优势: 复用代码, 让setup中的逻辑更清楚易懂。</p></li></ul><h2 id="_10-toref" tabindex="-1" data-v-1470e36d><a class="header-anchor" href="#_10-toref" aria-hidden="true" data-v-1470e36d>#</a> 10.toRef</h2><ul data-v-1470e36d><li data-v-1470e36d><p data-v-1470e36d>作用：创建一个 ref 对象，其value值指向另一个对象中的某个属性。</p></li><li data-v-1470e36d><p data-v-1470e36d>语法：<code data-v-1470e36d>const name = toRef(person,&#39;name&#39;)</code></p></li><li data-v-1470e36d><p data-v-1470e36d>应用: 要将响应式对象中的某个属性单独提供给外部使用时。</p></li><li data-v-1470e36d><p data-v-1470e36d>扩展：<code data-v-1470e36d>toRefs</code> 与<code data-v-1470e36d>toRef</code>功能一致，但可以批量创建多个 ref 对象，语法：<code data-v-1470e36d>toRefs(person)</code></p></li></ul>',5);function N(e,A){const d=v("ExternalLinkIcon");return c(),l("div",null,[f,a("p",null,[n("官方文档: "),a("a",g,[n("https://v3.cn.vuejs.org/guide/composition-api-introduction.html"),p(d)])]),_,a("ul",null,[a("li",null,[n("实现原理: "),a("ul",null,[y,x,a("li",null,[n("MDN文档中描述的Proxy与Reflect： "),a("ul",null,[a("li",null,[a("p",null,[a("a",w,[n("Proxy"),p(d)])])]),a("li",null,[a("p",null,[a("a",V,[n("Reflect"),p(d)])]),D])])])])])]),j,P,R])}const I=o(m,[["render",N],["__scopeId","data-v-1470e36d"],["__file","compositionApi.html.vue"]]);export{I as default};
