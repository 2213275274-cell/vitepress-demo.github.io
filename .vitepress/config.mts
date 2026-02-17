import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-demo.github.io", //启动根目录
  title: "Welcome to my blog", //网站标题
  description: "A little bit of experience",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '',
    nav: [ //导航栏
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      {
        text: '前端', items: [
          { text: 'vue', link: '/front/vue.md' },
          { text: 'react', link: '/front/react.md' },
        ]
      },
      {
        text: '后端', items: [
          { text: 'java', link: '/back-end/java.md' },
          { text: 'node.js', link: '/back-end/nodejs.md' },
          { text: 'python', link: '/back-end/python.md' },
        ]
      },
      {
        text: '移动开发', items: [
          { text: '安卓开发', link: '/mobile/android.md' },
          { text: '鸿蒙开发', link: '/mobile/harmony.md' },
          // { text: 'ios', link: '/mobile/ios.md' },
        ]
      },
      {
        text: 'Markdown', link: '/front/markdown.md'
      },
      {
        text: 'Other', items: [
          { text: '网站部署', link: '/s' },
          { text: 'vitePress', link: '/s' },
          // {text:'ios',link:'/'},
        ]
      },
    ],


    //网站侧边栏
    sidebar: [
      {
        text: '前端',
        collapsed: true,
        items: [
          { text: 'vue', link: '/front/vue.md' },
          { text: 'react', link: '/front/react.md' }
        ]
      },
      {
        text: '后端',
        collapsed: true,
        items: [
          {
            text: 'java', items: [
              // {text :'2',link:''},
              // {text :'3',link:''},
              // {text :'4',link:''},
            ], link: '/back-end/java.md'
          },
          { text: 'python', link: '/back-end/python.md' },
          { text: 'node.js', link: '/back-end/nodejs.md' }
        ]
      },
      {
        text: '移动开发',
        collapsed: true,
        items: [
          { text: '安卓开发', link: '/mobile/android.md' },
          { text: '鸿蒙开发', link: '/mobile/harmony.md' }
        ]
      },
      {
        text: 'Markdown', link: '/front/markdown.md'
      },
      {
        text: 'Other',
        collapsed: true,
        items: [
          { text: '网站部署', link: '/s' },
          { text: 'vitePress', link: '/s' },
          // {text:'ios',link:'/'},
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    //底部配置
    footer: {
      copyright: 'copyright@ 2026 Cheng Qing'
    }
  }
})
