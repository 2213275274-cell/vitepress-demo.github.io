import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-demo.github.io", //启动根目录
  title: "Welcome to my blog", //网站标题
  description: "A little bit of experience",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo :'',
    nav: [ //导航栏
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: '前端', items: [
          {text:'vue',link:'/'},
          {text:'react',link:'/'},
          // {text:'',link:'/'},
        ]
      },
      {
        text: '后端', items: [
          {text:'java',link:'/'},
          {text:'node.js',link:'/'},
          {text:'python',link:'/'},
        ]
      },
      {
        text: '移动开发', items: [
          {text:'安卓开发',link:'/'},
          {text:'鸿蒙开发',link:'/'},
          {text:'ios',link:'/'},
        ]
      },
      {
        text: 'Other', items: [
          {text:'网站部署',link:'/'},
          {text:'vitePress',link:'/'},
          // {text:'ios',link:'/'},
        ]
      },
    ],


    //网站侧边栏
    sidebar: [
      {
        text: '前端',
        items: [
          { text: 'vue', link: '/markdown-examples' },
          { text: 'react', link: '/api-examples' }
        ]
      },
      {
        text: '后端',
        items: [
          { text: 'Markdown Examples', items:[
            {text :'2',link:''},
            {text :'3',link:''},
            {text :'4',link:''},
          ],link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '移动开发',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
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
