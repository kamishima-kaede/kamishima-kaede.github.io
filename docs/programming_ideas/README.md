---
title: 编程思维积累
icon: list
category: 编程
tag:
  - ideas
isOriginal: true
date: 2022-08-09
---

平时看到的变成思想记录

<!-- more -->

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

> Node基于事件驱动和非阻塞设计，在分布式环境中尤其能发挥出它的特长，基于事件驱动可以实现与大量的客户端进行连接，非阻塞设计则让它可以更好地提升网络的响应吞吐。Node提供了相对底层的网络调用，以及基于事件的编程接口，使得开发者在这些模块上十分轻松地构建网络应用。