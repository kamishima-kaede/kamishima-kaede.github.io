const o = {
  a: 'a',
  b: 'b'
};

const c = 'c';

// 存在两种 exports 导出方式：
// 命名导出（每个模块包含任意数量）
// 默认导出（每个模块包含一个）

// 导出单个特性
// export let d = 'd'
// import { d } from './js/module.js';

export const e = 'e',
  f = 'f',
  g = 'g';
// import { e, f, g } from "./js/module.js";



// export const { a, b } = o;
// import { a, b } from './js/module.js';

// export default { o, a };
