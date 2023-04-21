---
article: false
---

## `<link>`

指定当前文档与外部资源的关系。

### 属性

- 1.`as`

|  值|	应用于|
|:------|:------|
|audio	     |`<audio>` 元素|
|document	   |`<iframe>` 和 `<frame>` 元素|
|embed	     |`<embed>` 元素|
|fetch	     |`fetch`, `XHR`也要求`<link>`包含`crossorigin`属性值。|
|font	       |CSS @font-face|
|image	     |`<img>` and `<picture>` elements with srcset or imageset attributes, SVG `<image>` elements, CSS *-image rules|
|object		   |`<object>` elements|
|script		   |`<script>` elements, Worker importScripts|
|style		   |`<link rel=stylesheet>` elements, CSS @import|
|track		   |`<track>` elements|
|video		   |`<video>` elements|
|worker		   |Worker, SharedWorker|

- 2.`target`
  - `_self`: 载入结果到当前浏览上下文中。（该值是元素的默认值）。
  - `_blank`: 载入结果到一个新的未命名的浏览上下文。
  - `_parent`: 载入结果到父级浏览上下文（如果当前页是内联框）。如果没有父级结构，该选项的行为和`_self`一样。
  - `_top`: 载入结果到顶级浏览上下文（该浏览上下文是当前上下文的最顶级上下文）。如果没有父级，该选项的行为和`_self`一样。

### 注意

- 1.`<base>`会影响页内锚点
- 2.多个`<base>`标签，只会使用第一个`href`和`target`值