import { navbar } from 'vuepress-theme-hope';

export default navbar([
  '/',
  {
    text: '学习笔记',
    icon: 'framework',
    prefix: '/framework_front/',
    children: [
      {
        text: '前端框架',
        children: ['vue3/', 'react/']
      }
    ]
  },
  {
    text: '文档',
    icon: 'framework',
    prefix: '/document/',
    children: [
      {
        text: '搬运',
        children: ['node-doc/']
      }
    ]
  },
]);
