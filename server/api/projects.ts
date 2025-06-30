export default defineEventHandler(() => {
  // 个人项目作品数据
  return [
    {
      id: 1,
      name: "Emission Tracker 碳排放追踪系统",
      description: "集成Apache Superset到Emission Tracker内，作为主项目可视化的一种拓展，实现大数据深度分析。普华永道与客户分布于不同区域的跨职能项目团队合作，将碳追踪管理平台与其现有的IT系统集成在一起。",
      image: "https://via.placeholder.com/350x200?text=Emission+Tracker",
      link: "https://www.pwc.tw/zh/products/emissions-tracker.html",
      company: "普华永道 PwC",
      companyLink: "https://www.pwc.com/",
      technologies: ["React", "Vue", "TS", "ElementUI", "Antd", "Form Generator", "Superset", "Echarts", "D3", "AntV G6"]
    },
    {
      id: 2,
      name: "CMDB资源管理系统",
      description: "CMDB资源管理系统是CMP中的一个核心功能，集中管理了企业的多云资源，通过灵活字段配置和模块化表单。帮助企业在多云环境下快速对接多种云产品，并结合账单、预警等功能提供精确到资源实例的监管。",
      image: "https://via.placeholder.com/350x200?text=CMDB系统",
      link: "https://github.com/zhandandan/cmdb-system",
      company: "上海联蔚数据科技有限公司",
      companyLink: "https://lianwei.com.cn/",
      technologies: ["Nuxt3", "Vue3", "Pinia", "Vite", "TypeScript", "Element Plus", "Tailwind"]
    },
    {
      id: 3,
      name: "Volvo数据报表系统",
      description: "主要为Volvo老板定制化开发多种场景的数据报表，自动跟踪数据变化，及时展示关键数据，为老板决策提供有效的依据，协助其管理30+团队。",
      image: "https://via.placeholder.com/350x200?text=数据报表系统",
      link: "https://github.com/zhandandan/volvo-reports",
      company: "上海联蔚数据科技有限公司",
      companyLink: "https://lianwei.com.cn/",
      technologies: ["Power BI服务", "Power BI Desktop", "Power Apps"]
    },
    {
      id: 4,
      name: "CMP云管理平台",
      description: "CMP产品是一种基于云计算的混合云管理平台，主要用于企业的云资源管理和自动化运维。帮助企业在多云环境中集中管理和监控云资源，提高资源利用率和效率，减少运维工作量和人为错误。",
      image: "https://via.placeholder.com/350x200?text=CMP云管理平台",
      link: "https://github.com/zhandandan/cmp-platform",
      company: "上海联蔚数据科技有限公司",
      companyLink: "https://lianwei.com.cn/",
      technologies: ["Vue全家桶", "ElementUI", "AntDesignVue", "ECharts", "qiankun", "Less", "Sass", "antvG6", "antvX6"]
    },
    {
      id: 5,
      name: "直播间系统",
      description: "为付费客户定制的直播间，客户可以看到股市走向，实时聊天，看老师直播。配套有直播间管理后台，负责内容发布，查看客户评论、回复客户，针对用户观看直播的时间进行多维度的可视化分析。",
      image: "https://via.placeholder.com/350x200?text=直播间系统",
      link: "https://github.com/zhandandan/live-system",
      company: "北京天相财富管理顾问有限公司上海分公司",
      companyLink: "https://www.txcfgl.com/",
      technologies: ["Vue", "JS", "ECharts", "奥点云", "WebSocket", "ElementUI"]
    },
    {
      id: 6,
      name: "推广页及管理系统",
      description: "在搜索引擎上投放的广告推广页，响应式设计且配有小动画，风格种类20+。除此之外有微信小程序、百度小程序等。为其添加埋点，用于监听用户行为。配套有后台管理系统，用于资源情况分析。",
      image: "https://via.placeholder.com/350x200?text=推广系统",
      link: "https://github.com/zhandandan/promotion-system",
      company: "北京天相财富管理顾问有限公司上海分公司",
      companyLink: "https://www.txcfgl.com/",
      technologies: ["HTML5", "CSS3", "jQuery", "微信小程序", "百度小程序", "微信公众号", "ElementUI", "Vue"]
    },
    {
      id: 7,
      name: "工作平台OA系统",
      description: "专为公司内部工作人员开发的办公软件。岗位之间工作任务的派发、接收和流程审批等一系列功能在这里展现。采用企业微信扫码的登录方式。",
      image: "https://via.placeholder.com/350x200?text=OA系统",
      link: "https://github.com/zhandandan/oa-system",
      company: "北京天相财富管理顾问有限公司上海分公司",
      companyLink: "https://www.txcfgl.com/",
      technologies: ["vue全家桶", "ElementUI"]
    },
    {
      id: 8,
      name: "崇明教育局信息安全管理平台",
      description: "协助崇明教育局管理近百所中小学的管理系统。教育局通过该系统管理下属学校的基本信息，实现数据分析、资源管理、信息管理、定位、派发任务、查看任务等。",
      image: "https://via.placeholder.com/350x200?text=教育局管理系统",
      link: "https://github.com/zhandandan/education-system",
      company: "上海智天信息科技有限公司",
      companyLink: "https://www.zhitiantech.com/",
      technologies: ["Layui", "jQuery", "MUI"]
    }
  ]
}) 