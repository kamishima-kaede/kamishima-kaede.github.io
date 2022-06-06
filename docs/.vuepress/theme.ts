import { hopeTheme } from 'vuepress-theme-hope';
import navbar from './navbar';
import sidebar from './sidebar';

export default hopeTheme({
  // 界面
  darkmode: 'switch',
  themeColor: {
    blue: '#2196f3',
    red: '#f26d6d',
    orange: '#fb9b5f'
  },
  iconAssets: 'iconfont',
  fullscreen: true,
  // backToTop: true,
  pure: false,

  // 当前网站部署到的域名
  hostname: 'https://hanekawa.top',
  author: {
    name: 'kamishima-kaede',
    url: 'https://hanekawa.top'
  },

  logo: '/logo.svg',
  logoDark: '/logo.svg',
  // 默认为 GitHub. 同时也可以是一个完整的 URL
  repo: 'kamishima-kaede/blog',
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
  // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: 'GitHub',
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,

  // navbar
  navbar: navbar,
  // sidebar
  sidebar: sidebar,
  navbarLayout: {
    left: ['Brand'],
    center: ['Links'],
    right: ['Repo', 'Outlook', 'Search']
  },

  docsDir: 'demo/src',

  footer: '',

  displayFooter: true,

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  blog: {
    description: '一个前端开发者',
    intro: '/intro.html'
    // medias: {
    //   Baidu: "https://example.com",
    //   Bitbucket: "https://example.com",
    //   Dingding: "https://example.com",
    //   Discord: "https://example.com",
    //   Dribbble: "https://example.com",
    //   Email: "https://example.com",
    //   Evernote: "https://example.com",
    //   Facebook: "https://example.com",
    //   Flipboard: "https://example.com",
    //   Gitee: "https://example.com",
    //   GitHub: "https://example.com",
    //   Gitlab: "https://example.com",
    //   Gmail: "https://example.com",
    //   Instagram: "https://example.com",
    //   Lines: "https://example.com",
    //   Linkedin: "https://example.com",
    //   Pinterest: "https://example.com",
    //   Pocket: "https://example.com",
    //   QQ: "https://example.com",
    //   Qzone: "https://example.com",
    //   Reddit: "https://example.com",
    //   Rss: "https://example.com",
    //   Steam: "https://example.com",
    //   Twitter: "https://example.com",
    //   Wechat: "https://example.com",
    //   Weibo: "https://example.com",
    //   Whatsapp: "https://example.com",
    //   Youtube: "https://example.com",
    //   Zhihu: "https://example.com",
    // },
  },

  encrypt: {
    config: {
      '/guide/encrypt.html': ['1234']
    }
  },

  plugins: {
    blog: true,
    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: 'Giscus',
      repo: 'vuepress-theme-hope/giscus-discussions',
      repoId: 'R_kgDOG_Pt2A',
      category: 'Announcements',
      categoryId: 'DIC_kwDOG_Pt2M4COD69'

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      }
    }
  }
});
