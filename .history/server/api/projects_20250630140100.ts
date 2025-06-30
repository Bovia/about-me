export default defineEventHandler(() => {
  // 模拟个人项目作品数据
  return [
    {
      id: 1,
      name: "个人博客网站",
      description: "使用Vue.js和Nuxt开发的个人博客网站，支持文章发布、分类和评论功能。采用服务端渲染提升性能和SEO表现。",
      image: "https://via.placeholder.com/350x200?text=博客网站",
      link: "https://github.com/myusername/personal-blog",
      technologies: ["Vue.js", "Nuxt.js", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      name: "电子商务平台",
      description: "为小型企业开发的电子商务解决方案，包括产品展示、购物车、支付集成和订单管理系统。",
      image: "https://via.placeholder.com/350x200?text=电商平台",
      link: "https://github.com/myusername/ecommerce-platform",
      technologies: ["React", "Redux", "Express", "PostgreSQL"]
    },
    {
      id: 3,
      name: "任务管理应用",
      description: "一个简洁高效的任务管理应用，支持任务创建、分类、优先级设置和提醒功能。采用响应式设计，适配各种设备。",
      image: "https://via.placeholder.com/350x200?text=任务管理",
      link: "https://github.com/myusername/task-manager",
      technologies: ["Vue.js", "Vuex", "Firebase"]
    },
    {
      id: 4,
      name: "天气预报应用",
      description: "实时天气预报应用，集成多个天气API，提供精准的天气预报、空气质量和气象预警信息。",
      image: "https://via.placeholder.com/350x200?text=天气应用",
      link: "https://github.com/myusername/weather-app",
      technologies: ["JavaScript", "React Native", "Weather API"]
    },
    {
      id: 5,
      name: "健康追踪系统",
      description: "个人健康数据追踪系统，记录运动、饮食和睡眠数据，生成健康报告和趋势分析。",
      image: "https://via.placeholder.com/350x200?text=健康追踪",
      link: "https://github.com/myusername/health-tracker",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"]
    },
    {
      id: 6,
      name: "在线学习平台",
      description: "为教育机构开发的在线学习平台，支持课程管理、视频教学、作业提交和学生进度跟踪。",
      image: "https://via.placeholder.com/350x200?text=学习平台",
      link: "https://github.com/myusername/learning-platform",
      technologies: ["Angular", "Express", "Socket.io", "MySQL"]
    }
  ]
}) 