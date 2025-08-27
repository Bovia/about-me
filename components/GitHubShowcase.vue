<template>
  <div class="github-showcase">
    <div class="showcase-header">
      <h2 class="section-title">
        <span class="title-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </span>
        GitHub 代码展示
      </h2>
      <p class="section-description">开源贡献与代码实践，用代码诠释技术热情</p>
    </div>

    <!-- GitHub 统计卡片 -->
    <div class="stats-grid">
      <div class="stat-card repositories">
        <div class="stat-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </div>
        <div class="stat-content">
          <div class="stat-number">{{ githubStats.repositories }}</div>
          <div class="stat-label">代码仓库</div>
        </div>
        <div class="stat-trend">
          <span class="trend-up">+3 本月</span>
        </div>
      </div>

      <div class="stat-card commits">
        <div class="stat-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M1.05 12H7"></path>
            <path d="M17.01 12h5.95"></path>
          </svg>
        </div>
        <div class="stat-content">
          <div class="stat-number">{{ githubStats.commits }}</div>
          <div class="stat-label">总提交数</div>
        </div>
        <div class="stat-trend">
          <span class="trend-up">+45 本周</span>
        </div>
      </div>

      <div class="stat-card stars">
        <div class="stat-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9 17 14.74 18.18 21.02 12 17.77 5.82 21.02 7 14.74 2 9 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
        <div class="stat-content">
          <div class="stat-number">{{ githubStats.stars }}</div>
          <div class="stat-label">获得 Stars</div>
        </div>
        <div class="stat-trend">
          <span class="trend-up">+12 本月</span>
        </div>
      </div>

      <div class="stat-card contributions">
        <div class="stat-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 3v18h18"></path>
            <path d="M7 12l4-4 4 4 6-6"></path>
          </svg>
        </div>
        <div class="stat-content">
          <div class="stat-number">{{ githubStats.contributions }}</div>
          <div class="stat-label">年度贡献</div>
        </div>
        <div class="stat-trend">
          <span class="trend-up">持续活跃</span>
        </div>
      </div>
    </div>

    <!-- 精选仓库 -->
    <div class="repositories-section">
      <h3 class="subsection-title">精选仓库</h3>
      <div class="repositories-grid">
        <div 
          v-for="(repo, index) in featuredRepos" 
          :key="repo.id"
          class="repo-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="repo-header">
            <div class="repo-name">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              {{ repo.name }}
            </div>
            <div class="repo-visibility">
              <span :class="`visibility-${repo.visibility}`">{{ repo.visibility }}</span>
            </div>
          </div>
          
          <p class="repo-description">{{ repo.description }}</p>
          
          <div class="repo-stats">
            <div class="repo-stat">
              <div class="language-dot" :style="{ backgroundColor: repo.languageColor }"></div>
              {{ repo.language }}
            </div>
            <div class="repo-stat">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9 17 14.74 18.18 21.02 12 17.77 5.82 21.02 7 14.74 2 9 8.91 8.26 12 2"></polygon>
              </svg>
              {{ repo.stars }}
            </div>
            <div class="repo-stat">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 3v12"></path>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="15" r="3"></circle>
                <path d="M18 9a9 9 0 0 1-9 9"></path>
              </svg>
              {{ repo.forks }}
            </div>
          </div>
          
          <div class="repo-topics">
            <span 
              v-for="topic in repo.topics" 
              :key="topic" 
              class="topic-tag"
            >
              {{ topic }}
            </span>
          </div>
          
          <div class="repo-actions">
            <a :href="repo.url" target="_blank" class="repo-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              查看代码
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 贡献热力图 -->
    <div class="contribution-section">
      <h3 class="subsection-title">代码贡献热力图</h3>
      <div class="contribution-chart">
        <div class="chart-wrapper">
          <div class="contribution-grid" ref="contributionGrid"></div>
          <div class="chart-legend">
            <span class="legend-text">少</span>
            <div class="legend-colors">
              <div class="legend-color" data-level="0"></div>
              <div class="legend-color" data-level="1"></div>
              <div class="legend-color" data-level="2"></div>
              <div class="legend-color" data-level="3"></div>
              <div class="legend-color" data-level="4"></div>
            </div>
            <span class="legend-text">多</span>
          </div>
        </div>
      </div>
    </div>

    <!-- GitHub 链接 -->
    <div class="github-link-section">
      <a href="https://github.com/Bovia" target="_blank" class="github-profile-link">
        <div class="link-content">
          <div class="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <div class="link-text">
            <h4>访问我的 GitHub</h4>
            <p>查看更多开源项目和代码贡献</p>
          </div>
          <div class="link-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import * as d3 from 'd3'

const contributionGrid = ref(null)

// GitHub 统计数据
const githubStats = ref({
  repositories: 42,
  commits: 1247,
  stars: 89,
  contributions: 365
})

// 精选仓库数据
const featuredRepos = ref([
  {
    id: 1,
    name: 'vue3-admin-dashboard',
    description: '基于 Vue 3 + TypeScript + Element Plus 的现代化管理后台系统，支持多主题切换和国际化。',
    language: 'Vue',
    languageColor: '#4FC08D',
    stars: 234,
    forks: 67,
    visibility: 'Public',
    topics: ['vue3', 'typescript', 'element-plus', 'admin'],
    url: 'https://github.com/Bovia/vue3-admin-dashboard'
  },
  {
    id: 2,
    name: 'react-fintech-components',
    description: '专为金融科技应用设计的 React 组件库，包含图表、表格、表单等常用组件。',
    language: 'TypeScript',
    languageColor: '#3178C6',
    stars: 156,
    forks: 43,
    visibility: 'Public',
    topics: ['react', 'fintech', 'components', 'typescript'],
    url: 'https://github.com/Bovia/react-fintech-components'
  },
  {
    id: 3,
    name: 'micro-frontend-starter',
    description: '微前端架构启动模板，基于 qiankun 框架，支持多技术栈应用集成。',
    language: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 89,
    forks: 28,
    visibility: 'Public',
    topics: ['micro-frontend', 'qiankun', 'javascript', 'webpack'],
    url: 'https://github.com/Bovia/micro-frontend-starter'
  },
  {
    id: 4,
    name: 'data-visualization-toolkit',
    description: '数据可视化工具包，集成 D3.js、ECharts 等图表库的统一封装。',
    language: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 198,
    forks: 52,
    visibility: 'Public',
    topics: ['d3js', 'echarts', 'visualization', 'charts'],
    url: 'https://github.com/Bovia/data-visualization-toolkit'
  }
])

onMounted(() => {
  generateContributionChart()
})

function generateContributionChart() {
  if (!contributionGrid.value) return
  
  const weeks = 53
  const days = 7
  const cellSize = 12
  const cellGap = 2
  
  // 生成模拟贡献数据
  const contributionData = []
  for (let week = 0; week < weeks; week++) {
    for (let day = 0; day < days; day++) {
      const date = new Date()
      date.setDate(date.getDate() - (weeks - week) * 7 - (days - day))
      
      contributionData.push({
        date,
        count: Math.floor(Math.random() * 5), // 0-4 的贡献级别
        week,
        day
      })
    }
  }
  
  const svg = d3.select(contributionGrid.value)
    .append('svg')
    .attr('width', weeks * (cellSize + cellGap))
    .attr('height', days * (cellSize + cellGap))
  
  const cells = svg.selectAll('.contribution-cell')
    .data(contributionData)
    .enter()
    .append('rect')
    .attr('class', 'contribution-cell')
    .attr('x', d => d.week * (cellSize + cellGap))
    .attr('y', d => d.day * (cellSize + cellGap))
    .attr('width', cellSize)
    .attr('height', cellSize)
    .attr('rx', 2)
    .attr('data-level', d => d.count)
    .style('fill', d => {
      const colors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
      return colors[d.count]
    })
    .on('mouseover', function(event, d) {
      // 可以添加 tooltip 显示具体日期和贡献数
    })
}
</script>

<style scoped>
.github-showcase {
  margin: 4rem 0;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(139, 92, 246, 0.02));
  border-radius: 2rem;
  border: 1px solid rgba(139, 92, 246, 0.1);
}

/* 头部样式 */
.showcase-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.title-icon {
  color: #6b7280;
}

.section-description {
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

/* 统计卡片网格 */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.stat-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #8b5cf6, #a78bfa);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.stat-card .stat-icon {
  color: #8b5cf6;
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: #6b7280;
  font-weight: 500;
}

.stat-trend {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.trend-up {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
}

/* 仓库部分 */
.repositories-section {
  margin-bottom: 4rem;
}

.subsection-title {
  font-size: 2rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 2rem;
  text-align: center;
}

.repositories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.repo-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  opacity: 0;
  animation: slideInUp 0.6s forwards;
  border-left: 4px solid #8b5cf6;
}

.repo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.repo-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.repo-name {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
}

.repo-name svg {
  color: #6b7280;
}

.repo-visibility span {
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.repo-description {
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.repo-stats {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.repo-stat {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9rem;
  color: #6b7280;
}

.language-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.repo-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.topic-tag {
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.repo-actions {
  text-align: right;
}

.repo-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #8b5cf6;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.repo-link:hover {
  color: #7c3aed;
  transform: translateX(3px);
}

/* 贡献热力图 */
.contribution-section {
  margin-bottom: 4rem;
}

.contribution-chart {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.chart-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.contribution-grid {
  overflow-x: auto;
  padding: 1rem;
}

.chart-legend {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.legend-text {
  font-size: 0.8rem;
  color: #6b7280;
}

.legend-colors {
  display: flex;
  gap: 2px;
}

.legend-color {
  width: 10px;
  height: 10px;
  border-radius: 2px;
}

.legend-color[data-level="0"] { background-color: #ebedf0; }
.legend-color[data-level="1"] { background-color: #9be9a8; }
.legend-color[data-level="2"] { background-color: #40c463; }
.legend-color[data-level="3"] { background-color: #30a14e; }
.legend-color[data-level="4"] { background-color: #216e39; }

/* GitHub 链接部分 */
.github-link-section {
  text-align: center;
}

.github-profile-link {
  display: inline-block;
  text-decoration: none;
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.github-profile-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  border-color: #8b5cf6;
}

.link-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.link-icon {
  color: #1f2937;
  font-size: 1.5rem;
}

.link-text {
  flex: 1;
  text-align: left;
}

.link-text h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.link-text p {
  color: #6b7280;
  font-size: 0.95rem;
}

.link-arrow {
  color: #8b5cf6;
  transition: transform 0.3s ease;
}

.github-profile-link:hover .link-arrow {
  transform: translate(3px, -3px);
}

/* 动画 */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .github-showcase {
    margin: 2rem 0;
    padding: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }
  
  .repositories-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .link-content {
    flex-direction: column;
    text-align: center;
  }
  
  .link-text {
    text-align: center;
  }
  
  .contribution-grid {
    padding: 0.5rem;
  }
}
</style>