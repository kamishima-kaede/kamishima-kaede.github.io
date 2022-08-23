// const regex = /hello/;
// console.log(regex.test('hello'));

// const reg1 = /ab{2,5}c/g
// const str = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc'
// console.log(str.match(reg1));
// [ 'abbc', 'abbbc', 'abbbbc', 'abbbbbc' ]

// const reg2 = /a[^123]b/g;
// const str2 = "a0b a1b a2b a3b a4b";
// console.log( str2.match(reg2) );
// [ 'a1b', 'a2b', 'a3b' ]

// const reg3 = /\d{2,5}?/g;
// const str3 = "123 1234 12345 123456";
// console.log( str3.match(reg3) );
// [ '12', '12', '34', '12', '34', '12', '34', '56' ]

// const str4 = `<div id="container" class="main"></div>`
// const reg4 = /id="[^"]*"/
// console.log(str4.match(reg4));

const res1 = '[JS] Lesson_01.mp4'.replace(/\b/g, '#');
const res2 = '[JS] Lesson_01.mp4'.replace(/\B/g, '#');
console.log(res1);
// [#JS#] #Lesson_01#.#mp4#
console.log(res2);
// #[J#S]# L#e#s#s#o#n#_#0#1.m#p#4
