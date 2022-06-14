const navbar = [
  {
    text: 'HTML&CSS',
    children: [
      { text: 'HTML', link: '/html-css/html/html' },
      { text: 'CSS2.1', link: '/html-css/css/css2.1' },
      { text: 'CSS3', link: '/html-css/css3/css3' },
    ],
  },
  {
    text: 'JavaScript',
    children: [
      { text: 'ECMAScript', link: '/javascript/ecma/ecma' },
      { text: 'ESNext', link: '/javascript/esnext/esnext' },
      { text: 'DOM', link: '/javascript/dom/dom' },
      { text: 'BOM', link: '/javascript/bom/bom' },
      { text: 'Ajax', link: '/javascript/ajax/ajax' },
      { text: '其他', link: '/javascript/other/other' },
    ],
  },
  {
    text: '前端框架笔记',
    children: [
      { text: 'React', link: '/react/react' },
      { text: 'Vue3', link: '/vue3/vue3' },
    ],
  },
  {
    text: '其他整理',
    children: [
      { text: '镜像源地址收集', link: '/dev-tools/mirror_source' },
      { text: '前端自动化部署', link: '/website-build/content' }
    ],
  },
];

module.exports = navbar;
