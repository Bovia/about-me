export default defineEventHandler(() => {
  // 个人简介数据
  return {
    name: "李明",
    title: "全栈开发工程师",
    avatar: "https://via.placeholder.com/150?text=LM",
    location: "北京，中国",
    email: "liming@example.com",
    github: "https://github.com/liming-dev",
    linkedin: "https://linkedin.com/in/liming-dev",
    followers: 568,
    following: 125,
    posts: 32,
    about: "我是一名热爱编程和创新的全栈开发工程师，拥有5年的web和移动应用开发经验。我擅长前端和后端技术，热衷于构建高性能、用户友好的应用程序。我喜欢解决复杂问题，学习新技术，并将创意转化为实际产品。在业余时间，我积极参与开源项目，并通过技术博客分享我的知识和经验。",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Git",
      "CI/CD"
    ],
    experience: [
      {
        title: "高级全栈开发工程师",
        company: "创新科技有限公司",
        period: "2021年3月 - 至今",
        description: "负责公司核心产品的前后端开发，使用React和Node.js构建可扩展的web应用。优化系统性能，提高代码质量，指导初级开发人员。"
      },
      {
        title: "前端开发工程师",
        company: "互联网科技公司",
        period: "2019年6月 - 2021年2月",
        description: "使用Vue.js和React开发响应式用户界面，与后端团队协作实现API集成，参与产品设计和用户体验改进。"
      },
      {
        title: "初级开发工程师",
        company: "软件开发工作室",
        period: "2018年1月 - 2019年5月",
        description: "参与多个web项目的开发，负责前端实现和基础后端功能，学习并应用最佳实践和现代开发工具。"
      }
    ],
    education: [
      {
        degree: "计算机科学学士",
        school: "北京大学",
        period: "2014年 - 2018年",
        description: "主修计算机科学与技术，辅修数学。参与多个学生项目，获得优秀毕业生称号。"
      }
    ],
    languages: [
      { name: "中文", level: "母语" },
      { name: "英语", level: "流利" },
      { name: "日语", level: "基础" }
    ],
    interests: ["编程", "开源项目", "阅读", "徒步旅行", "摄影", "弹吉他"]
  }
}) 