import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MichaelAoE 的项目集",
  description: "大气科学 / 环保数据分析 / 气象建模",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '台风预测模型', link: '/projects/typhoon-model' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MichaelAoE' }
    ]
  }
})
