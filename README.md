# 詹丹丹个人网站

这是詹丹丹的个人网站项目，使用Nuxt 3 SSR技术构建，展示个人简历、项目经验和专业技能。

## 关于我

我是詹丹丹，一位资深前端开发工程师，拥有超过8年的行业经验。我专注于构建高性能、用户友好的Web应用，并具有丰富的全栈开发经验。

### 专业技能
- 前端框架：Vue.js，React，Nuxt.js
- 后端技术：Node.js，Express，Firebase
- 其他技术：TypeScript，RESTful API设计，响应式设计
- UI/UX：Figma，Adobe XD

### 工作经历
- **腾讯科技** (2019-至今) - 高级前端开发工程师
- **阿里巴巴** (2016-2019) - 前端开发工程师
- **百度** (2014-2016) - 初级开发工程师

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

## 联系方式

- 电子邮件: zhandandan@example.com
- LinkedIn: linkedin.com/in/zhandandan
- GitHub: github.com/zhandandan

---

© 2023 詹丹丹. 保留所有权利。
