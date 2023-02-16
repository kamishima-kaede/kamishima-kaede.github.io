const e=JSON.parse('{"key":"v-9dd2c44c","path":"/framework_front/react/other_options.html","title":"其他注意事项","lang":"zh-CN","frontmatter":{"article":false,"description":"其他注意事项 1. setState更新状态的2种写法 (1). setState(stateChange, [callback])------对象式的setState 1.stateChange为状态改变对象(该对象可以体现出状态的更改) 2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用 (2). setState(updater, [callback])------函数式的setState 1.updater为返回stateChange对象的函数。 2.updater可以接收到state和props。 4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。 总结: 1.对象式的setState是函数式的setState的简写方式(语法糖) 2.使用原则： (1).如果新状态不依赖于原状态 ===&gt; 使用对象方式 (2).如果新状态依赖于原状态 ===&gt; 使用函数方式 (3).如果需要在setState()执行后获取最新的状态数据, 要在第二个callback函数中读取","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/framework_front/react/other_options.html"}],["meta",{"property":"og:site_name","content":"Kamishima-kaede"}],["meta",{"property":"og:title","content":"其他注意事项"}],["meta",{"property":"og:description","content":"其他注意事项 1. setState更新状态的2种写法 (1). setState(stateChange, [callback])------对象式的setState 1.stateChange为状态改变对象(该对象可以体现出状态的更改) 2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用 (2). setState(updater, [callback])------函数式的setState 1.updater为返回stateChange对象的函数。 2.updater可以接收到state和props。 4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。 总结: 1.对象式的setState是函数式的setState的简写方式(语法糖) 2.使用原则： (1).如果新状态不依赖于原状态 ===&gt; 使用对象方式 (2).如果新状态依赖于原状态 ===&gt; 使用函数方式 (3).如果需要在setState()执行后获取最新的状态数据, 要在第二个callback函数中读取"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-15T09:53:30.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-15T09:53:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"其他注意事项\\",\\"description\\":\\"其他注意事项 1. setState更新状态的2种写法 (1). setState(stateChange, [callback])------对象式的setState 1.stateChange为状态改变对象(该对象可以体现出状态的更改) 2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用 (2). setState(updater, [callback])------函数式的setState 1.updater为返回stateChange对象的函数。 2.updater可以接收到state和props。 4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。 总结: 1.对象式的setState是函数式的setState的简写方式(语法糖) 2.使用原则： (1).如果新状态不依赖于原状态 ===&gt; 使用对象方式 (2).如果新状态依赖于原状态 ===&gt; 使用函数方式 (3).如果需要在setState()执行后获取最新的状态数据, 要在第二个callback函数中读取\\"}"]]},"headers":[{"level":2,"title":"1. setState更新状态的2种写法","slug":"_1-setstate更新状态的2种写法","link":"#_1-setstate更新状态的2种写法","children":[]},{"level":2,"title":"2. 路由组件的lazyLoad","slug":"_2-路由组件的lazyload","link":"#_2-路由组件的lazyload","children":[]},{"level":2,"title":"3. Hooks","slug":"_3-hooks","link":"#_3-hooks","children":[{"level":3,"title":"1. React Hook/Hooks是什么?","slug":"_1-react-hook-hooks是什么","link":"#_1-react-hook-hooks是什么","children":[]},{"level":3,"title":"2. 三个常用的Hook","slug":"_2-三个常用的hook","link":"#_2-三个常用的hook","children":[]},{"level":3,"title":"State Hook","slug":"state-hook","link":"#state-hook","children":[]},{"level":3,"title":"Effect Hook","slug":"effect-hook","link":"#effect-hook","children":[]},{"level":3,"title":"Ref Hook","slug":"ref-hook","link":"#ref-hook","children":[]}]},{"level":2,"title":"4. Fragment","slug":"_4-fragment","link":"#_4-fragment","children":[]},{"level":2,"title":"5. Context","slug":"_5-context","link":"#_5-context","children":[{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]},{"level":2,"title":"6. 组件优化","slug":"_6-组件优化","link":"#_6-组件优化","children":[]},{"level":2,"title":"7. render props","slug":"_7-render-props","link":"#_7-render-props","children":[]},{"level":2,"title":"8. 错误边界","slug":"_8-错误边界","link":"#_8-错误边界","children":[]},{"level":2,"title":"9. 组件通信方式总结","slug":"_9-组件通信方式总结","link":"#_9-组件通信方式总结","children":[]}],"git":{"createdTime":1655200609000,"updatedTime":1655286810000,"contributors":[{"name":"shiki","email":"kamiacgxu@gmail.com","commits":2}]},"readingTime":{"minutes":5.42,"words":1627},"filePathRelative":"framework_front/react/other_options.md","localizedDate":"2022年6月14日","excerpt":"<h1> 其他注意事项</h1>\\n<h2> 1. setState更新状态的2种写法</h2>\\n<div class=\\"language-markdown line-numbers-mode\\" data-ext=\\"md\\"><pre class=\\"language-markdown\\"><code>  (1). setState(stateChange, [callback])------对象式的setState\\n            1.stateChange为状态改变对象(该对象可以体现出状态的更改)\\n            2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用\\n          \\n  (2). setState(updater, [callback])------函数式的setState\\n            1.updater为返回stateChange对象的函数。\\n            2.updater可以接收到state和props。\\n            4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。\\n总结:\\n  1.对象式的setState是函数式的setState的简写方式(语法糖)\\n  2.使用原则：\\n      (1).如果新状态不依赖于原状态 ===&gt; 使用对象方式\\n      (2).如果新状态依赖于原状态 ===&gt; 使用函数方式\\n      (3).如果需要在setState()执行后获取最新的状态数据, \\n        要在第二个callback函数中读取\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
