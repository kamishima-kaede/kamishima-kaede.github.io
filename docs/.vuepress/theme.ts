import { hopeTheme } from 'vuepress-theme-hope';
import navbar from './navbar';
import sidebar from './sidebar';

export default hopeTheme({
  // 基本配置
  hostname: 'https://hanekawa.top',
  author: {
    name: 'kamishima-kaede',
    url: 'https://hanekawa.top'
  },
  locales: {},

  // 主题功能选项
  // 博客配置 plugins.blog => true
  // 加密配置 encrypt

  // 主题布局选项
  navbar: navbar,
  navbarIcon: true,
  navbarLayout: { start: ['Brand'], center: ['Links'], end: ['Language', 'Repo', 'Outlook', 'Search'] },
  navbarAutoHide: 'mobile',
  logo: '/assets/svg/logo.svg',
  logoDark: '/assets/svg/logo.svg',
  repo: 'kamishima-kaede/kamishima-kaede.github.io', // 默认为 GitHub. 同时也可以是一个完整的 URL
  repoLabel: 'GitHub', // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoDisplay: true, // 是否在导航栏内显示仓库链接，默认为 `true`
  hideSiteNameOnMobile: true, // 是否在移动视图下隐藏站点名称

  sidebar: sidebar,
  sidebarIcon: true,
  headerDepth: 3,

  breadcrumb: true, // 路径导航
  prevLink: true,
  nextLink: true,

  titleIcon: true,
  /** 
    "Author": 作者
    "Date": 写作日期
    "Original": 是否原创
    "Category": 分类
    "Tag": 标签
    "ReadingTime": 预计阅读时间
    "Word": 字数
    "PageView": 页面浏览量
    文章信息，可以填入数组，数组的顺序是各条目显示的顺序。填入 false 使其被禁用。
  */
  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime', 'Word', 'PageView'],
  lastUpdated: true,
  contributors: true,
  editLink: false,
  docsDir: 'docs',

  footer: '',
  displayFooter: true,
  copyright: 'Copyright © 2018-present kamishima-kaede',
  toc: true,

  // 主题外观选项
  iconAssets: 'iconfont',
  darkmode: 'switch',

  blog: {
    sidebarDisplay: 'mobile',
    articlePerPage: 10,
    avatar: '/assets/svg/logo.svg',
    // roundAvatar: true,
    name: 'Kamishima-kaede',
    description: 'Nothing is easier than being busy, nothing more difficult than being effective.',
    intro: '/about/aboutme.html',
    // timeline: '发布于'
  },

  plugins: {
    blog: {
      excerpt: true,
      excerptSeparator: '<!-- more -->'
    },
    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      provider: "Waline",
      serverURL: "https://blog-q5gt9jo8g-kamishima-kaede.vercel.app/",
    },

    // mdEnhance: {
    //   align: true,
    //   attrs: true,
    //   chart: true,
    //   codetabs: true,
    //   container: true,
    //   demo: true,
    //   echarts: true,
    //   flowchart: true,
    //   gfm: true,
    //   imageSize: true,
    //   include: true,
    //   lazyLoad: true,
    //   mark: true,
    //   mermaid: true,
    //   playground: {
    //     presets: ["ts", "vue"],
    //   },
    //   presentation: {
    //     plugins: ["highlight", "math", "search", "notes", "zoom"],
    //   },
    // },

    pwa: {
      update: 'available',
      favicon: '/favicon.ico',
      themeColor: '#5c92d1',
      cacheHTML: false,
      maxSize: 3072,
      apple: {
        icon: '/assets/icons/apple-touch-icon.png',
        statusBarColor: 'white'
      },
      msTile: {
        image: '/assets/icons/ms-icon-144.png',
        color: '#ffffff'
      },
      manifest: {
        name: 'Kamishima-kaede 的个人博客',
        short_name: 'Kamishima-kaede Blog',
        description: 'Kamishima-kaede 的个人博客',
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
