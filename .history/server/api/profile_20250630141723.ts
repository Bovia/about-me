export default defineEventHandler(() => {
  // 个人简历数据
  return {
    name: "詹丹丹",
    title: "前端开发工程师",
    avatar: "https://via.placeholder.com/150?text=ZDD",
    location: "上海，中国",
    email: "375006500@qq.com",
    phone: "17521300512",
    github: "https://github.com/zhandandan",
    linkedin: "https://linkedin.com/in/dandanzhan",
    age: "28岁",
    gender: "女",
    education: "本科 · 统招 · 全日制",
    workYears: "6年工作经验",
    status: "单身",
    followers: 568,
    following: 125,
    posts: 32,
    about: "6年前端开发经验，熟练掌握Vue2/3、React、TypeScript等技术栈，参与开发过多个大型企业级应用。擅长低代码平台搭建、数据可视化展示、微前端架构等。曾任职普华永道、上海联蔚数据科技等公司，在多项目中担任前端开发工程师角色，负责技术选型、框架搭建、功能开发与优化。",
    skills: [
      "ES6",
      "H5",
      "微前端",
      "Vue2",
      "Vue3",
      "TS",
      "CSS3",
      "React",
      "ElementUI",
      "AntDesign Vue",
      "AntDesign",
      "Apache ECharts",
      "D3",
      "AntV G6",
      "Apache Superset",
      "Form Generator",
      "Power Bi",
      "Power App",
      "Nuxt3",
      "Pinia",
      "Vite",
      "Tailwind",
      "UI设计"
    ],
    experience: [
      {
        title: "Senior Associate 前端开发工程师",
        company: "普华永道 PwC",
        period: "现在",
        description: "主要负责主项目 Emission Tracker 碳排放追踪系统 与 子项目 BI 的维护与新需求开发。调研技术框架，参与需求分析，共同制定技术方案。多部门跨区域，跨国家协同合作，实现产品内部需求和终端客户需求。"
      },
      {
        title: "WEB前端",
        company: "上海联蔚数据科技有限公司",
        period: "2020.12 - 2023.5",
        description: "主要负责CMP定制化版本的开发，及低代码平台的搭建与实施、与数据分析。攻克技术难点，建设前端知识体系，微前端架构升级，调研技术框架，参与需求沟通，制定技术方案，对已有的系统进行性能优化，培养实习生，管理前端团队，协调并跟进项目进度等。"
      },
      {
        title: "WEB前端",
        company: "北京天相财富管理顾问有限公司上海分公司",
        period: "2019 - 2020",
        description: "负责All前端开发任务，都是0—1：To C：LIVE直播室、公众号、微信小程序、百度小程序、20多套响应式推广页等；To B：网签管理系统，市场管理系统，LIVE直播管理系统，工作平台OA系统。参与需求沟通，决定技术方案，根据自己的UI设计经验，提出优化的建议等。"
      },
      {
        title: "WEB前端+UI设计",
        company: "上海智天信息科技有限公司",
        period: "2018 - 2019",
        description: "为崇明教育局开发管理系统，协助管理近百所中小学。我主要负责所有的UI设计，及部分前端开发的任务，其余还会设计制作交互模型、宣传海报、设计logo等，培训客户、参与产品说明书、测试用例的撰写等。"
      },
      {
        title: "PS讲师",
        company: "",
        period: "早期工作",
        description: "在院内担任PS讲师,培训中专毕业生《ps平面设计基础课程》。一个礼拜8个课时,一学期。每个班55个人左右,两个班。教授的内容有:工具箱的介绍与使用；动感模糊、高斯模糊、溶解等滤镜的使用；色彩曲线、钢笔工具、蒙板工具等的使用；布置作业，结合所学，进行创作等。"
      }
    ],
    education: [
      {
        degree: "本科",
        school: "",
        period: "",
        description: "统招 · 全日制"
      }
    ],
    projects: [
      {
        name: "Emission Tracker 碳排放追踪系统",
        company: "普华永道 PwC",
        description: "集成Apache Superset到Emission Tracker内，作为主项目可视化的一种拓展，实现大数据深度分析。普华永道与客户分布于不同区域的跨职能项目团队合作，将碳追踪管理平台与其现有的IT系统集成在一起。通过部署该平台，公司能够收集和管理他们的排放数据，促使其业务部门对可持续生产产生更大责任感。",
        technologies: ["React", "Vue", "TS", "ElementUI", "Antd", "Form Generator", "Superset", "Echarts", "D3", "AntV G6"],
        role: "主项目与BI项目功能持续的优化与开发",
        challenge: "业务层面逻辑纷繁错杂",
        link: "https://www.pwc.tw/zh/products/emissions-tracker.html"
      },
      {
        name: "CMDB资源管理系统",
        company: "上海联蔚数据科技有限公司",
        description: "CMDB资源管理系统是CMP中的一个核心功能,集中管理了企业的多云资源，通过灵活字段配置和模块化表单。帮助企业在多云环境下快速对接多种云产品，并结合账单、预警等功能提供精确到资源实例的监管。其中，Volvo公司日均数据量约为10w+，3种云厂商，约200多个供应商。CMDB配套功能还包括人员管理、团队管理、角色管理、微服务管理、权限管理、看板中心（PowerBI）等。",
        technologies: ["Nuxt3", "Vue3", "Pinia", "Vite", "TypeScript", "Element Plus", "Tailwind"],
        role: "负责技术选型、后台系统框架的搭建以及功能开发",
        challenge: "前端代码跟低代码报表的融合"
      },
      {
        name: "Volvo数据报表系统",
        company: "上海联蔚数据科技有限公司",
        description: "主要为Volvo老板定制化开发多种场景的数据报表，自动跟踪数据变化，及时展示关键数据，为老板决策提供有效的依据，协助其管理30+团队。",
        technologies: ["Power BI服务", "Power BI Desktop", "Power Apps"],
        role: "完整低代码平台的搭建与实施，快速响应客户需求变更，高质量交付报表，管理工作区，整理报表结构，分配人员权限",
        challenge: "操作多表获取相关数据，现有的视觉对象不能满足当前需求"
      },
      {
        name: "CMP云管理平台",
        company: "上海联蔚数据科技有限公司",
        description: "CMP产品是一种基于云计算的混合云管理平台,主要用于企业的云资源管理和自动化运维。帮助企业在多云环境中集中管理和监控云资源,提高资源利用率和效率,减少运维工作量和人为错误。CMP分为SaaS版和私有化版本，SaaS约有10个正式用户，每个用户每月纳管的成本量约在5w-20w，比如Dyson，私有化版本体量就比较大，重点客户有宝马，安利，嘉士伯，最大的宝马每月管理的成本量约在5000w。",
        technologies: ["Vue全家桶", "ElementUI", "AntDesignVue", "ECharts", "qiankun", "Less", "Sass", "antvG6", "antvX6"],
        role: "私有化版本的定制化开发，从0搭建Amway SRE CMP，担任安利项目的前端leader，负责微前端架构升级，设计开发内部组件库",
        challenge: "情况复杂的动态表单、ECharts图表下钻、拓扑流程图的实现、大数据量table卡顿优化"
      },
      {
        name: "工作平台OA系统",
        company: "北京天相财富管理顾问有限公司上海分公司",
        description: "这是一款专为公司内部工作人员开发的办公软件。岗位之间工作任务的派发、接收和流程审批等一系列功能在这里展现。采用企业微信扫码的登录方式。",
        technologies: ["vue全家桶", "ElementUI"],
        role: "技术选型、框架的搭建、功能开发、代码优化"
      },
      {
        name: "直播间系统",
        company: "北京天相财富管理顾问有限公司上海分公司",
        description: "这是一套为付费客户定制的一个直播间，客户可以看到股市走向，实时聊天，主要还是上来看老师的直播。配套还有一个直播间管理后台，负责内容发布（文字,图片,链接,指令,语音,视频等），查看客户评论、回复客户，针对用户观看直播的时间,进行时长、时间段进行多维度的可视化分析等。",
        technologies: ["Vue", "JS", "ECharts", "奥点云", "实时通讯WebSocket", "ElementUI"],
        role: "技术选型、功能开发",
        challenge: "解决了奥点云跟Vue不兼容的问题"
      },
      {
        name: "推广页及管理系统",
        company: "北京天相财富管理顾问有限公司上海分公司",
        description: "推广页是在百度等搜索引擎上投放的广告,都是响应式且配有小动画，风格种类20+。除此之外有微信小程序、百度小程序等。为其添加埋点,用于监听用户行为,如点击,浏览次数,停留时间等。配套有后台管理, 专为市场部经理定制的系统,简化经理的工作方式。通过工作台可以查看日周月资源情况,以及各种添加率、开单率、资源占有率等。",
        technologies: ["HTML5", "CSS3", "jQuery", "微信小程序", "百度小程序", "微信公众号", "ElementUI", "Vue"],
        role: "开发一系列To C的产品，再从To B端实时管理和监控客户行为，负责全部的前端开发"
      },
      {
        name: "网签管理系统",
        company: "北京天相财富管理顾问有限公司上海分公司",
        description: "为相关工作人员(业务员、项目经理、财务等)定制、实现日常的OA办公、审批流等",
        technologies: ["jQuery", "JS", "Layui"],
        role: "接手项目、进行维护及二次开发"
      },
      {
        name: "崇明教育局信息安全管理平台",
        company: "上海智天信息科技有限公司",
        description: "协助崇明教育局,管理近百所中小学。教育局通过该系统管理下属学校(单位)的基本信息,实现数据分析,资源管理,信息管理,定位,流程, 派发任务,查看任务等。配套有巡查系统APP，为学校工作人员定制，查看与自己相关工作列表；安全员检查设备详情，提交检查数据表单。",
        technologies: ["Layui", "jQuery", "MUI"],
        role: "UI平面设计，前端页面功能的实现，编写产品使用说明书、测试用例，培训客户使用"
      },
      {
        name: "美食网站",
        company: "大学网页竞赛",
        description: "大学网页竞赛作品,围绕美食主题,为喜欢美食的客户提供一个网上平台,有菜单,有注册登陆界面,可以在网站上搜索自己的门店,可以直接把食材丢进菜篮子,并且有烹饪步骤。",
        technologies: ["HTML", "CSS", "JavaScript"],
        role: "页面设计、交互设计、自己抠图P图、前端代码实现",
        achievement: "获得南昌市大学网页比赛一等奖"
      }
    ],
    languages: [
      { name: "中文", level: "母语" },
      { name: "英语", level: "良好" }
    ],
    interests: ["前端开发", "UI设计", "数据可视化", "PS设计"]
  }
}) 