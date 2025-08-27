<template>
  <div class="skill-radar">
    <div class="radar-header">
      <h2 class="section-title">
        <span class="title-icon">🎯</span>
        技能雷达图
      </h2>
      <p class="section-description">直观展示技术栈熟练度和经验分布</p>
    </div>

    <div class="radar-container">
      <div class="radar-chart-wrapper">
        <div ref="radarChart" class="radar-chart"></div>
        <div class="radar-legend">
          <div class="legend-title">技能等级</div>
          <div class="legend-items">
            <div class="legend-item">
              <div class="legend-color level-5"></div>
              <span>专家级 (90-100%)</span>
            </div>
            <div class="legend-item">
              <div class="legend-color level-4"></div>
              <span>熟练级 (70-89%)</span>
            </div>
            <div class="legend-item">
              <div class="legend-color level-3"></div>
              <span>中级 (50-69%)</span>
            </div>
            <div class="legend-item">
              <div class="legend-color level-2"></div>
              <span>初级 (30-49%)</span>
            </div>
            <div class="legend-item">
              <div class="legend-color level-1"></div>
              <span>入门级 (0-29%)</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 技能详情卡片 -->
      <div class="skill-details">
        <div 
          v-for="(category, index) in skillCategories" 
          :key="category.name"
          class="skill-category-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @mouseenter="highlightCategory(category.name)"
          @mouseleave="clearHighlight"
        >
          <div class="category-header">
            <div class="category-icon" v-html="category.icon"></div>
            <h3 class="category-name">{{ category.name }}</h3>
            <div class="category-avg">
              <span class="avg-score">{{ Math.round(category.avgScore) }}%</span>
            </div>
          </div>
          
          <div class="category-skills">
            <div 
              v-for="skill in category.skills" 
              :key="skill.name"
              class="skill-item"
              :class="{ highlighted: highlightedSkill === skill.name }"
              @mouseenter="highlightSkill(skill.name)"
              @mouseleave="clearSkillHighlight"
            >
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-score">{{ skill.score }}%</span>
              </div>
              <div class="skill-bar">
                <div 
                  class="skill-progress" 
                  :style="{ 
                    width: `${skill.score}%`,
                    backgroundColor: getSkillColor(skill.score)
                  }"
                ></div>
              </div>
              <div class="skill-experience">{{ skill.experience }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 技能统计 -->
    <div class="skill-stats">
      <div class="stat-item">
        <div class="stat-number">{{ totalSkills }}</div>
        <div class="stat-label">掌握技能</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ expertSkills }}</div>
        <div class="stat-label">专家级技能</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ avgExperience.toFixed(1) }}</div>
        <div class="stat-label">平均经验年限</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ skillCategories.length }}</div>
        <div class="stat-label">技术领域</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as d3 from 'd3'

const radarChart = ref(null)
const highlightedCategory = ref(null)
const highlightedSkill = ref(null)

// 技能数据
const skillCategories = ref([
  {
    name: '前端框架',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    skills: [
      { name: 'Vue.js', score: 95, experience: '4年经验，熟练掌握 Vue2/3、Composition API' },
      { name: 'React', score: 85, experience: '3年经验，熟悉 Hooks、Redux、Next.js' },
      { name: 'Nuxt.js', score: 80, experience: '2年经验，SSR/SSG 应用开发' },
      { name: 'Angular', score: 60, experience: '1年经验，了解基础概念和开发流程' }
    ]
  },
  {
    name: '编程语言',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>',
    skills: [
      { name: 'JavaScript', score: 92, experience: '6年经验，ES6+、异步编程、性能优化' },
      { name: 'TypeScript', score: 88, experience: '3年经验，类型系统、泛型、装饰器' },
      { name: 'HTML5', score: 95, experience: '6年经验，语义化、可访问性、SEO' },
      { name: 'CSS3', score: 90, experience: '6年经验，Flexbox、Grid、动画、预处理器' }
    ]
  },
  {
    name: '数据可视化',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"></path><path d="M7 12l4-4 4 4 6-6"></path></svg>',
    skills: [
      { name: 'ECharts', score: 90, experience: '4年经验，复杂图表、地图、3D 可视化' },
      { name: 'D3.js', score: 75, experience: '2年经验，自定义图表、动画、交互' },
      { name: 'AntV G6', score: 70, experience: '1.5年经验，关系图、流程图、网络图' },
      { name: 'Power BI', score: 65, experience: '1年经验，商业智能、报表设计' }
    ]
  },
  {
    name: '工程化工具',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
    skills: [
      { name: 'Webpack', score: 85, experience: '4年经验，配置优化、插件开发、性能调优' },
      { name: 'Vite', score: 80, experience: '2年经验，快速构建、HMR、插件生态' },
      { name: 'Git', score: 90, experience: '6年经验，分支管理、协作流程、CI/CD' },
      { name: 'Docker', score: 65, experience: '1年经验，容器化部署、镜像构建' }
    ]
  },
  {
    name: '云服务平台',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>',
    skills: [
      { name: '腾讯云', score: 75, experience: '2年经验，CVM、COS、CDN、云函数' },
      { name: 'AWS', score: 60, experience: '1年经验，EC2、S3、Lambda 基础服务' },
      { name: '阿里云', score: 55, experience: '6个月经验，ECS、OSS 基础使用' },
      { name: 'Azure', score: 45, experience: '3个月经验，了解基础概念' }
    ]
  },
  {
    name: '项目管理',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14,2 14,8 20,8"></polyline></svg>',
    skills: [
      { name: 'Agile/Scrum', score: 85, experience: '4年经验，敏捷开发、迭代管理、团队协作' },
      { name: 'JIRA', score: 80, experience: '3年经验，需求管理、缺陷跟踪、报告' },
      { name: 'Confluence', score: 75, experience: '3年经验，文档管理、知识分享' },
      { name: 'PMP方法论', score: 70, experience: '1年经验，项目生命周期、风险管理' }
    ]
  }
])

// 计算属性
const totalSkills = computed(() => {
  return skillCategories.value.reduce((total, category) => total + category.skills.length, 0)
})

const expertSkills = computed(() => {
  return skillCategories.value.reduce((total, category) => {
    return total + category.skills.filter(skill => skill.score >= 90).length
  }, 0)
})

const avgExperience = computed(() => {
  const allSkills = skillCategories.value.flatMap(category => category.skills)
  const totalYears = allSkills.reduce((total, skill) => {
    const years = parseFloat(skill.experience.match(/(\d+\.?\d*)/)?.[1] || 0)
    return total + years
  }, 0)
  return totalYears / allSkills.length
})

// 为每个分类计算平均分数
skillCategories.value.forEach(category => {
  category.avgScore = category.skills.reduce((sum, skill) => sum + skill.score, 0) / category.skills.length
})

onMounted(() => {
  createRadarChart()
})

function createRadarChart() {
  const margin = { top: 50, right: 50, bottom: 50, left: 50 }
  const width = 400 - margin.left - margin.right
  const height = 400 - margin.top - margin.bottom
  const radius = Math.min(width, height) / 2

  // 清除现有内容
  d3.select(radarChart.value).selectAll("*").remove()

  const svg = d3.select(radarChart.value)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)

  const g = svg.append("g")
    .attr("transform", `translate(${margin.left + width/2},${margin.top + height/2})`)

  // 雷达图数据
  const radarData = skillCategories.value.map(category => ({
    axis: category.name,
    value: category.avgScore
  }))

  const angleSlice = Math.PI * 2 / radarData.length

  // 创建比例尺
  const rScale = d3.scaleLinear()
    .range([0, radius])
    .domain([0, 100])

  // 绘制网格圆圈
  const levels = 5
  for (let level = 1; level <= levels; level++) {
    const levelRadius = radius * (level / levels)
    
    g.append("circle")
      .attr("r", levelRadius)
      .style("fill", "none")
      .style("stroke", "#e2e8f0")
      .style("stroke-width", "1px")
      .style("opacity", 0.5)
  }

  // 绘制轴线
  const axes = g.selectAll(".axis")
    .data(radarData)
    .enter()
    .append("g")
    .attr("class", "axis")

  axes.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", (d, i) => rScale(100) * Math.cos(angleSlice * i - Math.PI / 2))
    .attr("y2", (d, i) => rScale(100) * Math.sin(angleSlice * i - Math.PI / 2))
    .style("stroke", "#cbd5e0")
    .style("stroke-width", "1px")

  // 添加轴标签
  axes.append("text")
    .attr("class", "axis-label")
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em")
    .attr("x", (d, i) => rScale(110) * Math.cos(angleSlice * i - Math.PI / 2))
    .attr("y", (d, i) => rScale(110) * Math.sin(angleSlice * i - Math.PI / 2))
    .text(d => d.axis)
    .style("font-size", "12px")
    .style("font-weight", "600")
    .style("fill", "#374151")

  // 创建雷达图路径数据
  const line = d3.lineRadial()
    .angle((d, i) => angleSlice * i)
    .radius(d => rScale(d.value))
    .curve(d3.curveCardinalClosed)

  // 绘制雷达图区域
  const radarArea = g.append("path")
    .datum(radarData)
    .attr("class", "radar-area")
    .attr("d", line)
    .style("fill", "rgba(59, 130, 246, 0.2)")
    .style("stroke", "#3b82f6")
    .style("stroke-width", "2px")
    .style("opacity", 0)

  // 动画显示雷达图
  radarArea.transition()
    .duration(1000)
    .style("opacity", 1)

  // 绘制数据点
  const dots = g.selectAll(".radar-dot")
    .data(radarData)
    .enter()
    .append("circle")
    .attr("class", "radar-dot")
    .attr("cx", (d, i) => rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2))
    .attr("cy", (d, i) => rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2))
    .attr("r", 0)
    .style("fill", "#3b82f6")
    .style("stroke", "white")
    .style("stroke-width", "2px")

  // 动画显示数据点
  dots.transition()
    .delay((d, i) => i * 100)
    .duration(500)
    .attr("r", 4)

  // 添加数值标签
  g.selectAll(".value-label")
    .data(radarData)
    .enter()
    .append("text")
    .attr("class", "value-label")
    .attr("x", (d, i) => rScale(d.value + 8) * Math.cos(angleSlice * i - Math.PI / 2))
    .attr("y", (d, i) => rScale(d.value + 8) * Math.sin(angleSlice * i - Math.PI / 2))
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em")
    .text(d => Math.round(d.value) + '%')
    .style("font-size", "10px")
    .style("font-weight", "600")
    .style("fill", "#3b82f6")
    .style("opacity", 0)
    .transition()
    .delay((d, i) => i * 100 + 500)
    .duration(300)
    .style("opacity", 1)
}

function getSkillColor(score) {
  if (score >= 90) return '#10b981'      // 绿色 - 专家级
  if (score >= 70) return '#3b82f6'      // 蓝色 - 熟练级
  if (score >= 50) return '#f59e0b'      // 橙色 - 中级
  if (score >= 30) return '#ef4444'      // 红色 - 初级
  return '#6b7280'                       // 灰色 - 入门级
}

function highlightCategory(categoryName) {
  highlightedCategory.value = categoryName
}

function clearHighlight() {
  highlightedCategory.value = null
}

function highlightSkill(skillName) {
  highlightedSkill.value = skillName
}

function clearSkillHighlight() {
  highlightedSkill.value = null
}
</script>

<style scoped>
.skill-radar {
  margin: 4rem 0;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.02));
  border-radius: 2rem;
  border: 1px solid rgba(16, 185, 129, 0.1);
}

/* 头部样式 */
.radar-header {
  text-align: center;
  margin-bottom: 3rem;
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
  font-size: 2rem;
}

.section-description {
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

/* 雷达图容器 */
.radar-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.radar-chart-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.radar-chart {
  margin-bottom: 2rem;
}

/* 图例样式 */
.radar-legend {
  text-align: center;
}

.legend-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.legend-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #4b5563;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.level-5 { background: #10b981; }
.level-4 { background: #3b82f6; }
.level-3 { background: #f59e0b; }
.level-2 { background: #ef4444; }
.level-1 { background: #6b7280; }

/* 技能详情卡片 */
.skill-details {
  display: grid;
  gap: 1.5rem;
}

.skill-category-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  opacity: 0;
  animation: slideInRight 0.6s forwards;
}

.skill-category-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f3f4f6;
}

.category-icon {
  color: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 50%;
}

.category-name {
  flex: 1;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.category-avg {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: 600;
}

.avg-score {
  font-size: 1rem;
}

/* 技能项目 */
.category-skills {
  display: grid;
  gap: 1rem;
}

.skill-item {
  padding: 1rem;
  border-radius: 0.75rem;
  background: #f8fafc;
  transition: all 0.3s ease;
  cursor: pointer;
}

.skill-item:hover,
.skill-item.highlighted {
  background: #f0f9ff;
  transform: translateX(5px);
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 600;
  color: #1f2937;
}

.skill-score {
  font-weight: 700;
  color: #10b981;
}

.skill-bar {
  height: 6px;
  background: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.skill-progress {
  height: 100%;
  border-radius: 3px;
  transition: width 1s ease;
}

.skill-experience {
  font-size: 0.85rem;
  color: #6b7280;
  line-height: 1.4;
}

/* 技能统计 */
.skill-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #10b981;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: #6b7280;
  font-weight: 500;
}

/* 动画 */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .radar-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .skill-stats {
    flex-wrap: wrap;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .skill-radar {
    margin: 2rem 0;
    padding: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .radar-chart-wrapper {
    padding: 1rem;
  }
  
  .skill-stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .category-header {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}
</style>