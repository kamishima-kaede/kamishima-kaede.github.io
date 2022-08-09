---
title: 编程思维积累
icon: list
category: 编程
tag:
  - ideas
isOriginal: true
date: 2022-08-09
---

## 哨兵变量

> 由于多个异步场景中回调函数的执行并不能保证顺序，且回调函数之间互相没有任何交集，所以需要借助一个第三方函数和第三方变量来处理异步协作的结果。通常，我们把这个用于检测次数的变量叫做哨兵变量。--《深入浅出Node.js》﹒朴灵

```js
var after = function (times, callback) {
  var count = 0, results = {};
  return function (key, value) {
    results[key] = value;
    count++;
    if (count === times) {
      callback(results);
    }
  };
};
var done = after(times, render);
```

