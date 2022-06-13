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

  logo: '/assets/svg/logo.svg',
  logoDark: '/assets/svg/logo.svg',
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
    sidebarDisplay: 'mobile',
    articlePerPage: 10,
    avatar: '/assets/svg/logo.svg',
    // roundAvatar: true,
    name: 'Kamishima-kaede',
    description: '一位前端菜鸟'
    // intro: '/intro.html'
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
    },

    pwa: {
      update: 'disable',
      favicon: "/favicon.ico",
      themeColor: "#5c92d1",
      cacheHTML: false,
      maxSize: 3072,
      apple: {
        icon: "/assets/icons/apple-touch-icon.png",
        statusBarColor: "white",
      },
      msTile: {
        image: "/assets/icons/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        name: 'Mr.Hope 的个人博客',
        short_name: 'Mr.Hope Blog',
        description: 'Mr.Hope 的个人博客',
        theme_color: '#5c92d1',
        icons: [
          {
            src: '/assets/icons/chrome-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/icons/chrome-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/assets/icons/chrome-mask-192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png'
          },
          {
            src: '/assets/icons/chrome-mask-512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png'
          }
        ]
      }
    }
  }
});
