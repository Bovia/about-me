export default defineEventHandler(() => {
  // 个人项目作品数据
  return {
    projects: [
      {
        id: "emission-tracker",
        name: "Emission Tracker 碳排放追踪系统",
        description: "集成Apache Superset到Emission Tracker内，作为主项目可视化的一种拓展，实现大数据深度分析。普华永道与客户分布于不同区域的跨职能项目团队合作，将碳追踪管理平台与其现有的IT系统集成在一起。通过部署该平台，公司能够收集和管理他们的排放数据，促使其业务部门对可持续生产产生更大责任感。",
        image: "https://via.placeholder.com/350x200?text=Emission+Tracker",
        link: "https://www.pwc.tw/zh/products/emissions-tracker.html",
        company: "普华永道 PwC",
        companyLink: "https://www.pwc.com/",
        technologies: ["React", "Vue", "TS", "ElementUI", "Antd", "Form Generator", "Superset", "Echarts", "D3", "AntV G6"],
        role: "主项目与BI项目功能持续的优化与开发",
        challenge: "业务层面逻辑纷繁错杂，需要与跨国团队协作，处理不同国家的碳排放法规和数据格式。实现了高度可定制化的数据可视化界面，用户可以根据不同需求自由组合分析维度。",
        achievement: "平台已经成功部署在多个企业客户环境中，有效降低了数据收集和分析的时间成本，提高了企业碳排放管理的效率。",
        screenshots: [
          {
            id: 1,
            title: "仪表盘页面",
            description: "用户可以在此查看关键碳排放指标",
            url: "/images/project-screenshots/emission-tracker/dashboard.jpg"
          },
          {
            id: 2,
            title: "数据分析页面",
            description: "深度分析不同部门和地区的碳排放趋势",
            url: "/images/project-screenshots/emission-tracker/analysis.jpg"
          },
          {
            id: 3,
            title: "报表配置界面",
            description: "自定义报表的配置界面，拖拽式操作",
            url: "/images/project-screenshots/emission-tracker/report-config.jpg"
          },
          {
            id: 4,
            title: "预警系统",
            description: "碳排放预警系统，可设置阈值和通知规则",
            url: "/images/project-screenshots/emission-tracker/alert.jpg"
          },
          {
            id: 5,
            title: "排放追踪",
            description: "各类排放源的追踪和管理页面",
            url: "/images/project-screenshots/emission-tracker/tracking.jpg"
          }
        ]
      },
      {
        id: "cmdb-system",
        name: "CMDB资源管理系统",
        description: "CMDB资源管理系统是CMP中的一个核心功能，集中管理了企业的多云资源，通过灵活字段配置和模块化表单。帮助企业在多云环境下快速对接多种云产品，并结合账单、预警等功能提供精确到资源实例的监管。其中，Volvo公司日均数据量约为10w+，3种云厂商，约200多个供应商。CMDB配套功能还包括人员管理、团队管理、角色管理、微服务管理、权限管理、看板中心等。",
        image: "https://via.placeholder.com/350x200?text=CMDB系统",
        link: "https://github.com/zhandandan/cmdb-system",
        company: "上海联蔚数据科技有限公司",
        companyLink: "https://lianwei.com.cn/",
        technologies: ["Nuxt3", "Vue3", "Pinia", "Vite", "TypeScript", "Element Plus", "Tailwind"],
        role: "负责技术选型、后台系统框架的搭建以及功能开发",
        challenge: "前端代码跟低代码报表的融合是最大难点，需要实现大量数据的高性能渲染和交互，同时保持系统的响应速度。另一个挑战是多云资源的统一管理和展示，需要设计灵活的数据模型。",
        achievement: "系统上线后大幅提高了云资源管理效率，减少了人工干预，降低了错误率。通过自动化监控和预警，避免了多次资源浪费和超额费用。",
        screenshots: [
          {
            id: 1,
            title: "资源概览",
            description: "多云资源的统一管理界面",
            url: "/images/project-screenshots/cmdb/overview.jpg"
          },
          {
            id: 2,
            title: "资源详情",
            description: "单个资源实例的详细信息和操作面板",
            url: "/images/project-screenshots/cmdb/detail.jpg"
          },
          {
            id: 3,
            title: "资源关联图",
            description: "基于图数据库的资源关联关系可视化",
            url: "/images/project-screenshots/cmdb/relation.jpg"
          },
          {
            id: 4,
            title: "成本分析",
            description: "基于资源使用情况的成本分析和优化建议",
            url: "/images/project-screenshots/cmdb/cost.jpg"
          },
          {
            id: 5,
            title: "权限管理",
            description: "基于角色的权限管理系统",
            url: "/images/project-screenshots/cmdb/permission.jpg"
          }
        ]
      },
      {
        id: "volvo-reports",
        name: "Volvo数据报表系统",
        description: "主要为Volvo老板定制化开发多种场景的数据报表，自动跟踪数据变化，及时展示关键数据，为老板决策提供有效的依据，协助其管理30+团队。通过Power BI的强大分析能力，将复杂的业务数据转化为直观的可视化报表，支持多维度分析和钻取，使决策者能够快速洞察业务情况和趋势。",
        image: "https://via.placeholder.com/350x200?text=数据报表系统",
        link: "https://github.com/zhandandan/volvo-reports",
        company: "上海联蔚数据科技有限公司",
        companyLink: "https://lianwei.com.cn/",
        technologies: ["Power BI服务", "Power BI Desktop", "Power Apps", "DAX", "Power Query M"],
        role: "完整低代码平台的搭建与实施，快速响应客户需求变更，高质量交付报表，管理工作区，整理报表结构，分配人员权限",
        challenge: "操作多表获取相关数据，现有的视觉对象不能满足当前需求。需要开发自定义视觉对象和复杂的DAX计算，以满足特定业务场景的需求。同时，大量数据的性能优化也是一个挑战。",
        achievement: "报表系统大大提高了管理层的决策效率，将数据分析时间从原来的数小时缩短到几分钟。通过自动化数据更新，确保决策基于最新数据。",
        screenshots: [
          {
            id: 1,
            title: "管理驾驶舱",
            description: "为高管定制的核心KPI仪表盘",
            url: "/images/project-screenshots/volvo/dashboard.jpg"
          },
          {
            id: 2,
            title: "销售分析",
            description: "多维度的销售数据分析和预测",
            url: "/images/project-screenshots/volvo/sales.jpg"
          },
          {
            id: 3,
            title: "团队绩效",
            description: "团队绩效跟踪和对比分析",
            url: "/images/project-screenshots/volvo/performance.jpg"
          },
          {
            id: 4,
            title: "运营成本",
            description: "各部门运营成本分析和优化建议",
            url: "/images/project-screenshots/volvo/cost.jpg"
          },
          {
            id: 5,
            title: "市场分析",
            description: "市场趋势和竞争对手分析",
            url: "/images/project-screenshots/volvo/market.jpg"
          }
        ]
      },
      {
        id: "cmp-platform",
        name: "CMP云管理平台",
        description: "CMP产品是一种基于云计算的混合云管理平台，主要用于企业的云资源管理和自动化运维。帮助企业在多云环境中集中管理和监控云资源，提高资源利用率和效率，减少运维工作量和人为错误。CMP分为SaaS版和私有化版本，SaaS约有10个正式用户，每个用户每月纳管的成本量约在5w-20w，比如Dyson，私有化版本体量就比较大，重点客户有宝马，安利，嘉士伯，最大的宝马每月管理的成本量约在5000w。",
        image: "https://via.placeholder.com/350x200?text=CMP云管理平台",
        link: "https://github.com/zhandandan/cmp-platform",
        company: "上海联蔚数据科技有限公司",
        companyLink: "https://lianwei.com.cn/",
        technologies: ["Vue全家桶", "ElementUI", "AntDesignVue", "ECharts", "qiankun", "Less", "Sass", "antvG6", "antvX6"],
        role: "私有化版本的定制化开发，从0搭建Amway SRE CMP，担任安利项目的前端leader，负责微前端架构升级，设计开发内部组件库",
        challenge: "情况复杂的动态表单、ECharts图表下钻、拓扑流程图的实现、大数据量table卡顿优化是主要技术难点。微前端架构下的应用间通信和状态共享也是一个挑战。",
        achievement: "成功交付了多个大型企业的私有化部署项目，平台稳定运行，帮助客户降低了30%以上的云资源成本，提高了运维效率。",
        screenshots: [
          {
            id: 1,
            title: "多云管理",
            description: "统一管理多个云服务商的资源",
            url: "/images/project-screenshots/cmp/multicloud.jpg"
          },
          {
            id: 2,
            title: "资源拓扑",
            description: "基于G6实现的资源拓扑关系图",
            url: "/images/project-screenshots/cmp/topology.jpg"
          },
          {
            id: 3,
            title: "成本分析",
            description: "多维度的云资源成本分析",
            url: "/images/project-screenshots/cmp/cost-analysis.jpg"
          },
          {
            id: 4,
            title: "自动化运维",
            description: "自动化运维任务配置和执行",
            url: "/images/project-screenshots/cmp/automation.jpg"
          },
          {
            id: 5,
            title: "组件库",
            description: "内部组件库示例和文档",
            url: "/images/project-screenshots/cmp/components.jpg"
          }
        ]
      },
      {
        id: "live-system",
        name: "直播间系统",
        description: "这是一套为付费客户定制的一个直播间，客户可以看到股市走向，实时聊天，主要还是上来看老师的直播。配套还有一个直播间管理后台，负责内容发布（文字,图片,链接,指令,语音,视频等），查看客户评论、回复客户，针对用户观看直播的时间,进行时长、时间段进行多维度的可视化分析等。",
        image: "https://via.placeholder.com/350x200?text=直播间系统",
        link: "https://github.com/zhandandan/live-system",
        company: "北京天相财富管理顾问有限公司上海分公司",
        companyLink: "https://www.txcfgl.com/",
        technologies: ["Vue", "JS", "ECharts", "奥点云", "实时通讯WebSocket", "ElementUI"],
        role: "技术选型、功能开发，解决了奥点云跟Vue不兼容的问题",
        challenge: "实时通讯的稳定性和性能优化是最大挑战，尤其是在用户数量突增时保持系统稳定。另外，直播和聊天的同步也是一个技术难点。",
        achievement: "系统上线后支持了多场重要的在线投资讲座，最高同时在线人数达到3000+，系统稳定运行，用户满意度高。",
        screenshots: [
          {
            id: 1,
            title: "直播界面",
            description: "用户观看直播的主界面",
            url: "/images/project-screenshots/live/main.jpg"
          },
          {
            id: 2,
            title: "股市走势",
            description: "实时股市数据和走势图",
            url: "/images/project-screenshots/live/stock.jpg"
          },
          {
            id: 3,
            title: "聊天区",
            description: "实时互动聊天区域",
            url: "/images/project-screenshots/live/chat.jpg"
          },
          {
            id: 4,
            title: "管理后台",
            description: "直播内容管理和用户管理",
            url: "/images/project-screenshots/live/admin.jpg"
          },
          {
            id: 5,
            title: "数据分析",
            description: "用户行为和参与度分析",
            url: "/images/project-screenshots/live/analytics.jpg"
          }
        ]
      },
      {
        id: "promotion-system",
        name: "推广页及管理系统",
        description: "推广页是在百度等搜索引擎上投放的广告,都是响应式且配有小动画，风格种类20+。除此之外有微信小程序、百度小程序等。为其添加埋点,用于监听用户行为,如点击,浏览次数,停留时间等。配套有后台管理, 专为市场部经理定制的系统,简化经理的工作方式。通过工作台可以查看日周月资源情况,以及各种添加率、开单率、资源占有率等。",
        image: "https://via.placeholder.com/350x200?text=推广系统",
        link: "https://github.com/zhandandan/promotion-system",
        company: "北京天相财富管理顾问有限公司上海分公司",
        companyLink: "https://www.txcfgl.com/",
        technologies: ["HTML5", "CSS3", "jQuery", "微信小程序", "百度小程序", "微信公众号", "ElementUI", "Vue"],
        role: "开发一系列To C的产品，再从To B端实时管理和监控客户行为，负责全部的前端开发",
        challenge: "需要适配多种设备和屏幕尺寸，确保良好的用户体验。另外，埋点数据的准确采集和分析也是一个挑战。",
        achievement: "显著提高了广告转化率，通过数据分析优化了投放策略，为公司带来更多精准客户。",
        screenshots: [
          {
            id: 1,
            title: "投资理财推广页",
            description: "面向高净值客户的投资理财推广",
            url: "/images/project-screenshots/promotion/landing1.jpg"
          },
          {
            id: 2,
            title: "股票分析推广页",
            description: "股票分析服务的推广页面",
            url: "/images/project-screenshots/promotion/landing2.jpg"
          },
          {
            id: 3,
            title: "小程序首页",
            description: "微信小程序主界面",
            url: "/images/project-screenshots/promotion/miniprogram.jpg"
          },
          {
            id: 4,
            title: "数据分析后台",
            description: "推广效果分析和用户行为跟踪",
            url: "/images/project-screenshots/promotion/analytics.jpg"
          },
          {
            id: 5,
            title: "资源管理",
            description: "市场资源管理和分配界面",
            url: "/images/project-screenshots/promotion/resources.jpg"
          }
        ]
      },
      {
        id: "oa-system",
        name: "工作平台OA系统",
        description: "这是一款专为公司内部工作人员开发的办公软件。岗位之间工作任务的派发、接收和流程审批等一系列功能在这里展现。采用企业微信扫码的登录方式，集成了工作流、任务管理、文档共享、通知等多种功能，提高了团队协作效率。",
        image: "https://via.placeholder.com/350x200?text=OA系统",
        link: "https://github.com/zhandandan/oa-system",
        company: "北京天相财富管理顾问有限公司上海分公司",
        companyLink: "https://www.txcfgl.com/",
        technologies: ["vue全家桶", "ElementUI", "Vuex", "Vue Router", "Axios"],
        role: "技术选型、框架的搭建、功能开发、代码优化",
        challenge: "需要设计灵活可配置的工作流系统，支持复杂的审批流程和权限控制。同时确保系统的易用性和响应速度。",
        achievement: "系统上线后显著提高了公司内部协作效率，减少了沟通成本，加速了业务流程。",
        screenshots: [
          {
            id: 1,
            title: "工作台",
            description: "个人工作台和任务概览",
            url: "/images/project-screenshots/oa/dashboard.jpg"
          },
          {
            id: 2,
            title: "任务管理",
            description: "任务分配和跟踪",
            url: "/images/project-screenshots/oa/tasks.jpg"
          },
          {
            id: 3,
            title: "审批流程",
            description: "工作流审批界面",
            url: "/images/project-screenshots/oa/approval.jpg"
          },
          {
            id: 4,
            title: "文档管理",
            description: "文档共享和协作",
            url: "/images/project-screenshots/oa/documents.jpg"
          },
          {
            id: 5,
            title: "绩效分析",
            description: "员工绩效和工作量分析",
            url: "/images/project-screenshots/oa/performance.jpg"
          }
        ]
      },
      {
        id: "education-system",
        name: "崇明教育局信息安全管理平台",
        description: "协助崇明教育局,管理近百所中小学。教育局通过该系统管理下属学校(单位)的基本信息,实现数据分析,资源管理,信息管理,定位,流程, 派发任务,查看任务等。配套有巡查系统APP，为学校工作人员定制，查看与自己相关工作列表；安全员检查设备详情，提交检查数据表单。",
        image: "https://via.placeholder.com/350x200?text=教育局管理系统",
        link: "https://github.com/zhandandan/education-system",
        company: "上海智天信息科技有限公司",
        companyLink: "https://www.zhitiantech.com/",
        technologies: ["Layui", "jQuery", "MUI", "ECharts", "百度地图API"],
        role: "UI平面设计，前端页面功能的实现，编写产品使用说明书、测试用例，培训客户使用",
        challenge: "系统需要服务众多学校和大量用户，确保数据的准确性和安全性是主要挑战。同时，界面需要简洁易用，适合不同技术水平的用户。",
        achievement: "系统成功部署在崇明教育局，有效提升了教育信息化管理水平，规范了学校安全检查流程。",
        screenshots: [
          {
            id: 1,
            title: "学校管理",
            description: "学校基本信息管理界面",
            url: "/images/project-screenshots/education/schools.jpg"
          },
          {
            id: 2,
            title: "设备巡检",
            description: "信息设备巡检记录和管理",
            url: "/images/project-screenshots/education/inspection.jpg"
          },
          {
            id: 3,
            title: "地图定位",
            description: "学校地理位置和资源分布",
            url: "/images/project-screenshots/education/map.jpg"
          },
          {
            id: 4,
            title: "统计分析",
            description: "教育资源和设备统计分析",
            url: "/images/project-screenshots/education/statistics.jpg"
          },
          {
            id: 5,
            title: "移动应用",
            description: "巡查系统移动应用界面",
            url: "/images/project-screenshots/education/mobile.jpg"
          }
        ]
      }
    ]
  };
})
