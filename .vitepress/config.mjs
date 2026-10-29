import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MichaelAoE 的项目集",
  description: "大气科学 / 环保数据分析 / 气象建模",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '项目作品', 
        items: [
          { text: '全部项目', link: '/projects/' },
          { text: '相似台风查询与路径预测系统', link: '/projects/typhoon-model' },
          { text: '澜湄农业污水处理模型', link: '/projects/lanmei-sewage' },
          { text: '豆瓣影视数据分析', link: '/projects/douban-analysis' },
          { text: 'CIFAR-10 图像分类研究', link: '/projects/cifar10-cnn' },
          { text: '纯 NumPy 手写数字识别', link: '/projects/mnist-numpy' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MichaelAoE' }
    ]
  }
})
