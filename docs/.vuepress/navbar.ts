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
  // {
  //   text: '其他整理',
  //   children: [
  //     { text: '镜像源地址收集', link: '/dev-tools/mirror_source' },
  //     { text: '前端自动化部署', link: '/website-build/content' }
  //   ],
  // },
  // {
  //   text: '随笔',
  //   icon: 'note',
  //   prefix: '/note/',
  //   children: [
  //     { text: '随笔', link: '', icon: 'note', activeMatch: '^/note/$' },
  //     {
  //       text: '诗集: 四季',
  //       children: ['spring/', 'summer/', 'fall/', 'winter/']
  //     },
  //     {
  //       text: '其他作品',
  //       children: ['life/', 'poem/']
  //     },
  //     'node-js/'
  //   ]
  // },
  // {
  //   text: '代码笔记',
  //   icon: 'code',
  //   children: [
  //     {
  //       text: '代码笔记',
  //       icon: 'code',
  //       link: '/code/',
  //       activeMatch: '^/code/$'
  //     },
  //     {
  //       text: '产品设计',
  //       children: ['/design/']
  //     },
  //     {
  //       text: '后端运维',
  //       children: ['/linux/']
  //     }
  //   ]
  // },
  // {
  //   text: '软件教程',
  //   icon: 'software',
  //   prefix: '/software/',
  //   children: [
  //     {
  //       text: '软件教程',
  //       icon: 'software',
  //       link: '',
  //       activeMatch: '^/software/$'
  //     },
  //     'vscode/',
  //     'git/',
  //     'comsol/'
  //   ]
  // }
]);
