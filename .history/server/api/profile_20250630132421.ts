export default defineEventHandler(() => {
  // 模拟数据库中的个人简介数据
  return {
    name: "张伟",
    title: "高级前端开发工程师",
    avatar: "https://via.placeholder.com/150?text=ZW",
    location: "上海，中国",
    email: "zhang.wei@example.com",
    followers: 1253,
    following: 86,
    posts: 42,
    about: "我是一名拥有8年经验的前端开发工程师，专注于构建高性能、用户友好的web应用。我热爱学习新技术，并且乐于分享知识。在过去的几年中，我参与了多个大型项目的开发，包括电商平台、企业管理系统和社交媒体应用。我相信优秀的用户界面不仅要美观，还要高效且易于使用。",
    skills: [
      "JavaScript", 
      "TypeScript", 
      "Vue.js", 
      "React", 
      "Node.js", 
      "Nuxt.js", 
      "Next.js", 
      "CSS", 
      "HTML", 
      "Git", 
      "Webpack", 
      "性能优化"
    ],
    experience: [
      {
        title: "高级前端开发工程师",
        company: "科技创新有限公司",
        period: "2020年6月 - 至今",
        description: "负责公司核心产品的前端架构设计和开发，优化网站性能，提升用户体验。带领5人前端团队，实施最佳实践和代码审查流程。"
      },
      {
        title: "前端开发工程师",
        company: "数字解决方案公司",
        period: "2017年3月 - 2020年5月",
        description: "参与多个客户项目的前端开发，使用Vue.js和React构建响应式用户界面。实现了多个复杂的交互功能和数据可视化组件。"
      },
      {
        title: "初级前端开发者",
        company: "网络科技有限公司",
        period: "2015年7月 - 2017年2月",
        description: "参与公司官网和内部系统的开发与维护，负责页面布局、样式实现和基础交互功能。"
      }
    ]
  }
}) 