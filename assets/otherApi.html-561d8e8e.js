const e=JSON.parse('{"key":"v-7809c6e6","path":"/framework_front/vue3/otherApi.html","title":"三、其它 Composition API","lang":"zh-CN","frontmatter":{"article":false,"description":"三、其它 Composition API 1.shallowReactive 与 shallowRef shallowReactive：只处理对象最外层属性的响应式（浅响应式）。 shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。 什么时候使用? 如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===&gt; shallowReactive。 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===&gt; shallowRef。","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/framework_front/vue3/otherApi.html"}],["meta",{"property":"og:site_name","content":"Kamishima-kaede"}],["meta",{"property":"og:title","content":"三、其它 Composition API"}],["meta",{"property":"og:description","content":"三、其它 Composition API 1.shallowReactive 与 shallowRef shallowReactive：只处理对象最外层属性的响应式（浅响应式）。 shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。 什么时候使用? 如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===&gt; shallowReactive。 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===&gt; shallowRef。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-15T09:53:30.000Z"}],["meta",{"property":"article:author","content":"kamishima-kaede"}],["meta",{"property":"article:modified_time","content":"2022-06-15T09:53:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"三、其它 Composition API\\",\\"description\\":\\"三、其它 Composition API 1.shallowReactive 与 shallowRef shallowReactive：只处理对象最外层属性的响应式（浅响应式）。 shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。 什么时候使用? 如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===&gt; shallowReactive。 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===&gt; shallowRef。\\"}"]]},"headers":[{"level":2,"title":"1.shallowReactive 与 shallowRef","slug":"_1-shallowreactive-与-shallowref","link":"#_1-shallowreactive-与-shallowref","children":[]},{"level":2,"title":"2.readonly 与 shallowReadonly","slug":"_2-readonly-与-shallowreadonly","link":"#_2-readonly-与-shallowreadonly","children":[]},{"level":2,"title":"3.toRaw 与 markRaw","slug":"_3-toraw-与-markraw","link":"#_3-toraw-与-markraw","children":[]},{"level":2,"title":"4.customRef","slug":"_4-customref","link":"#_4-customref","children":[]},{"level":2,"title":"5.provide 与 inject","slug":"_5-provide-与-inject","link":"#_5-provide-与-inject","children":[]},{"level":2,"title":"6.响应式数据的判断","slug":"_6-响应式数据的判断","link":"#_6-响应式数据的判断","children":[]}],"git":{"createdTime":1655200609000,"updatedTime":1655286810000,"contributors":[{"name":"shiki","email":"kamiacgxu@gmail.com","commits":2}]},"readingTime":{"minutes":2.25,"words":676},"filePathRelative":"framework_front/vue3/otherApi.md","localizedDate":"2022年6月14日","excerpt":"<h1> 三、其它 Composition API</h1>\\n<h2> 1.shallowReactive 与 shallowRef</h2>\\n<ul>\\n<li>\\n<p>shallowReactive：只处理对象最外层属性的响应式（浅响应式）。</p>\\n</li>\\n<li>\\n<p>shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。</p>\\n</li>\\n<li>\\n<p>什么时候使用?</p>\\n<ul>\\n<li>如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===&gt; shallowReactive。</li>\\n<li>如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===&gt; shallowRef。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
