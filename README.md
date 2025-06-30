# 詹丹丹个人网站

这是詹丹丹的个人网站项目，使用Nuxt 3 SSR技术构建，展示个人简历、项目经验和专业技能。

## 关于我

我是詹丹丹，一位资深前端开发工程师，拥有6年的行业经验。我专注于构建高性能、用户友好的Web应用，并具有丰富的全栈开发经验。

熟练掌握Vue2/3、React、TypeScript等技术栈，参与开发过多个大型企业级应用。擅长低代码平台搭建、数据可视化展示、微前端架构等。曾任职普华永道、上海联蔚数据科技等公司，在多项目中担任前端开发工程师角色，负责技术选型、框架搭建、功能开发与优化。

### 专业技能
- 前端框架：Vue2/3, React, Nuxt3, Pinia, Vite, TypeScript
- UI框架：ElementUI, AntDesign Vue, AntDesign, Tailwind
- 数据可视化：Apache ECharts, D3, AntV G6, Apache Superset
- 低代码工具：Form Generator, Power BI, Power App
- 其他：微前端, ES6, H5, CSS3, UI设计

### 工作经历
- **普华永道 PwC** (现在) - Senior Associate 前端开发工程师
- **上海联蔚数据科技有限公司** (2020.12 - 2023.5) - WEB前端
- **北京天相财富管理顾问有限公司上海分公司** (2019 - 2020) - WEB前端
- **上海智天信息科技有限公司** (2018 - 2019) - WEB前端+UI设计
- **PS讲师** (早期工作)

## 项目技术栈

- **框架**: Nuxt 3
- **渲染模式**: SSR (服务器端渲染)
- **样式**: TailwindCSS
- **部署**: Vercel/Netlify

## 项目启动

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 开发环境
```bash
npm run dev
# 或
yarn dev
```

开发服务器将在 http://localhost:3000 启动

### 构建生产版本
```bash
npm run build
# 或
yarn build
```

### 预览生产版本
```bash
npm run preview
# 或
yarn preview
```

## 项目结构

- `pages/` - 网站页面
  - `index.vue` - 主页
  - `about.vue` - 关于我
  - `profile/index.vue` - 个人简历
  - `projects.vue` - 项目展示
- `server/api/` - API端点
  - `profile.ts` - 个人简历数据
  - `projects.ts` - 项目数据
- `components/` - 可复用组件
- `layouts/` - 布局模板
- `middleware/` - Nuxt中间件
- `public/` - 静态资源

## 代表项目

### Emission Tracker 碳排放追踪系统 (普华永道 PwC)
集成Apache Superset到Emission Tracker内，作为主项目可视化的一种拓展，实现大数据深度分析。普华永道与客户分布于不同区域的跨职能项目团队合作，将碳追踪管理平台与其现有的IT系统集成在一起。

**技术栈:** React, Vue, TS, ElementUI, Antd, Form Generator, Superset, Echarts, D3, AntV G6

### CMDB资源管理系统 (上海联蔚数据科技有限公司)
CMDB资源管理系统是CMP中的一个核心功能，集中管理了企业的多云资源，通过灵活字段配置和模块化表单。帮助企业在多云环境下快速对接多种云产品，并结合账单、预警等功能提供精确到资源实例的监管。

**技术栈:** Nuxt3, Vue3, Pinia, Vite, TypeScript, Element Plus, Tailwind

### CMP云管理平台 (上海联蔚数据科技有限公司)
CMP产品是一种基于云计算的混合云管理平台，主要用于企业的云资源管理和自动化运维。帮助企业在多云环境中集中管理和监控云资源，提高资源利用率和效率，减少运维工作量和人为错误。

**技术栈:** Vue全家桶, ElementUI, AntDesignVue, ECharts, qiankun, Less, Sass, antvG6, antvX6

## 联系方式

- 电子邮件: 375006500@qq.com
- LinkedIn: [linkedin.com/in/dandanzhan](https://linkedin.com/in/dandanzhan)
- GitHub: [github.com/Bovia](https://github.com/Bovia)

---

© 2023 詹丹丹. 保留所有权利。
