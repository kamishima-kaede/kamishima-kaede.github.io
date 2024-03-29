---
article: false
---
# 位置匹配

## 1. 锚点

在 ES5 中，共有 6 个锚：

`^`、`$`、`\b`、`\B`、`(?=p)`、`(?!p)`


### 1.1. `^`和`$`

`^`（脱字符）匹配开头，在多行匹配中匹配行开头。  
`$`（美元符号）匹配结尾，在多行匹配中匹配行结尾。

**多行匹配模式（即有修饰符 m）时，二者是行的概念，这一点需要我们注意**

```js
const res = "hello".replace(/^|$/g, '#');
console.log(res);
// => "#hello#"

const result = "I\nlove\njavascript".replace(/^|$/gm, '#');
console.log(result);
/*
#I#
#love#
#javascript#
*/
```

### 1.2. `\b`和`\B`

`\b`是单词边界，具体就是`\w`与`\W`之间的位置，也包括`\w`与`^`之间的位置，和`\w`与`$`之间的位置。

```js
const res1 = '[JS] Lesson_01.mp4'.replace(/\b/g, '#');
const res2 = '[JS] Lesson_01.mp4'.replace(/\B/g, '#');
console.log(res1);
// [#JS#] #Lesson_01#.#mp4#
console.log(res2);
// #[J#S]# L#e#s#s#o#n#_#0#1.m#p#4
```
### 1.3. `(?=p)`和`(?!p)`

(?=p)，其中 p 是一个子模式，即 p 前面的位置，或者说，该位置后面的字符要匹配 p。而 (?!p) 就是 (?=p) 的反面意思。  
二者的学名分别是 positive lookahead 和 negative lookahead。正向先行断言和负向先行断言

ES5 之后的版本，会支持 positive lookbehind 和 negative lookbehind。具体是 (?<=p) 和 (?<!p)。

```js
const res1 = '[JS] Lesson_01.mp4'.replace(/\b/g, '#');
const res2 = '[JS] Lesson_01.mp4'.replace(/\B/g, '#');
console.log(res1);
// [#JS#] #Lesson_01#.#mp4#
console.log(res2);
// #[J#S]# L#e#s#s#o#n#_#0#1.m#p#4
```

### 1.4. 位置的特性

对于位置的理解，我们可以理解成空字符 ""。


## 1.5.1

### 1.5.1 数字的千位分隔符表示法