<template>
  <div class="home-page">
    <div class="hero-section">
      <div class="hero-content">
        <h1>詹丹丹</h1>
        <p class="role">前端开发工程师</p>
        <p class="intro">6年前端开发经验，擅长Vue、React、微前端和数据可视化</p>
        <div class="hero-buttons">
          <NuxtLink to="/profile" class="primary-button">查看我的简历</NuxtLink>
          <NuxtLink to="/projects" class="secondary-button">浏览我的作品</NuxtLink>
        </div>
      </div>
      <div class="hero-image">
        <img src="https://via.placeholder.com/450x450?text=詹丹丹" alt="詹丹丹照片" />
      </div>
    </div>
    
    <div class="skills-section">
      <h2>专业技能</h2>
      <div class="skills-container">
        <div class="skill-category">
          <h3>前端框架</h3>
          <div class="skill-tags">
            <span class="skill-tag">Vue2</span>
            <span class="skill-tag">Vue3</span>
            <span class="skill-tag">React</span>
            <span class="skill-tag">Nuxt3</span>
            <span class="skill-tag">微前端</span>
          </div>
        </div>
        
        <div class="skill-category">
          <h3>语言</h3>
          <div class="skill-tags">
            <span class="skill-tag">ES6</span>
            <span class="skill-tag">TypeScript</span>
            <span class="skill-tag">CSS3</span>
            <span class="skill-tag">HTML5</span>
          </div>
        </div>
        
        <div class="skill-category">
          <h3>UI框架</h3>
          <div class="skill-tags">
            <span class="skill-tag">ElementUI</span>
            <span class="skill-tag">AntDesign Vue</span>
            <span class="skill-tag">AntDesign</span>
            <span class="skill-tag">Tailwind</span>
          </div>
        </div>
        
        <div class="skill-category">
          <h3>数据可视化</h3>
          <div class="skill-tags">
            <span class="skill-tag">ECharts</span>
            <span class="skill-tag">D3</span>
            <span class="skill-tag">AntV G6</span>
            <span class="skill-tag">Superset</span>
            <span class="skill-tag">Power BI</span>
          </div>
        </div>
        
        <div class="skill-category">
          <h3>工具链</h3>
          <div class="skill-tags">
            <span class="skill-tag">Vite</span>
            <span class="skill-tag">Pinia</span>
            <span class="skill-tag">Form Generator</span>
            <span class="skill-tag">Power App</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="experience-section">
      <h2>工作经历</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>Senior Associate 前端开发工程师</h3>
            <p class="timeline-place">普华永道 PwC</p>
            <p class="timeline-period">现在</p>
            <p class="timeline-description">负责Emission Tracker碳排放追踪系统与BI项目的维护与新需求开发。跨区域、跨国家协同合作。</p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>WEB前端</h3>
            <p class="timeline-place">上海联蔚数据科技有限公司</p>
            <p class="timeline-period">2020.12 - 2023.5</p>
            <p class="timeline-description">负责CMP定制化开发，低代码平台搭建与实施。技术框架调研，微前端架构升级，性能优化，团队管理。</p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>WEB前端</h3>
            <p class="timeline-place">北京天相财富管理顾问有限公司上海分公司</p>
            <p class="timeline-period">2019 - 2020</p>
            <p class="timeline-description">负责TO C和TO B端产品的前端开发，从0到1搭建多个系统。包括直播室、推广页、小程序、管理系统等。</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="project-highlights">
      <h2>精选项目</h2>
      <div class="projects-grid">
        <div class="project-card">
          <img src="https://via.placeholder.com/350x200?text=Emission+Tracker" alt="Emission Tracker" class="project-image" />
          <div class="project-info">
            <h3>Emission Tracker 碳排放追踪系统</h3>
            <p>跨国合作的碳排放数据管理平台，实现大数据深度分析</p>
            <NuxtLink to="/projects" class="view-more">查看详情</NuxtLink>
          </div>
        </div>
        
        <div class="project-card">
          <img src="https://via.placeholder.com/350x200?text=CMDB系统" alt="CMDB系统" class="project-image" />
          <div class="project-info">
            <h3>CMDB资源管理系统</h3>
            <p>企业多云资源管理平台，帮助企业快速对接多种云产品</p>
            <NuxtLink to="/projects" class="view-more">查看详情</NuxtLink>
          </div>
        </div>
        
        <div class="project-card">
          <img src="https://via.placeholder.com/350x200?text=数据报表系统" alt="数据报表系统" class="project-image" />
          <div class="project-info">
            <h3>Volvo数据报表系统</h3>
            <p>定制化数据报表平台，为决策提供关键数据支持</p>
            <NuxtLink to="/projects" class="view-more">查看详情</NuxtLink>
          </div>
        </div>
      </div>
      
      <div class="view-all">
        <NuxtLink to="/projects" class="view-all-button">查看全部项目</NuxtLink>
      </div>
    </div>
    
    <div class="contact-section">
      <h2>联系我</h2>
      <div class="contact-info">
        <div class="contact-item">
          <span class="contact-icon">📱</span>
          <p>电话/微信: 17521300512</p>
        </div>
        <div class="contact-item">
          <span class="contact-icon">✉️</span>
          <p>邮箱: 375006500@qq.com</p>
        </div>
        <div class="contact-item">
          <span class="contact-icon">📍</span>
          <p>地点: 上海，中国</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: '詹丹丹 - 前端开发工程师',
  meta: [
    { name: 'description', content: '詹丹丹的个人网站，6年前端开发经验，擅长Vue、React、微前端和数据可视化' }
  ]
})
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
}

/* 英雄区域 */
.hero-section {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 3rem 0;
  margin-bottom: 4rem;
}

.hero-content {
  flex: 1;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.hero-image img {
  max-width: 100%;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 5px solid white;
}

h1 {
  font-size: 3.5rem;
  margin: 0 0 0.5rem;
  color: #2d3748;
}

.role {
  font-size: 1.8rem;
  margin: 0 0 1.5rem;
  color: #3182ce;
  font-weight: 600;
}

.intro {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #4a5568;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.primary-button, .secondary-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s;
}

.primary-button {
  background-color: #3182ce;
  color: white;
}

.primary-button:hover {
  background-color: #2c5282;
}

.secondary-button {
  background-color: transparent;
  color: #3182ce;
  border: 2px solid #3182ce;
}

.secondary-button:hover {
  background-color: #ebf8ff;
}

/* 技能部分 */
.skills-section {
  margin-bottom: 4rem;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: #2d3748;
  position: relative;
  padding-bottom: 1rem;
}

h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background-color: #3182ce;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.skill-category h3 {
  color: #3182ce;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background-color: #ebf4ff;
  color: #3182ce;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
}

/* 工作经历 */
.experience-section {
  margin-bottom: 4rem;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 4px;
  background-color: #3182ce;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -2.35rem;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3182ce;
  border: 3px solid white;
}

.timeline-content {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.timeline-content h3 {
  margin-top: 0;
  margin-bottom: 0.25rem;
  color: #2d3748;
}

.timeline-place {
  color: #3182ce;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.timeline-period {
  color: #718096;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.timeline-description {
  color: #4a5568;
  margin: 0;
  line-height: 1.5;
}

/* 项目亮点 */
.project-highlights {
  margin-bottom: 4rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.project-card {
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.project-info p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.view-more {
  color: #3182ce;
  text-decoration: none;
  font-weight: 600;
}

.view-more:hover {
  text-decoration: underline;
}

.view-all {
  text-align: center;
}

.view-all-button {
  display: inline-block;
  background-color: transparent;
  color: #3182ce;
  border: 2px solid #3182ce;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
}

.view-all-button:hover {
  background-color: #ebf8ff;
}

/* 联系部分 */
.contact-section {
  margin-bottom: 3rem;
}

.contact-info {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-icon {
  font-size: 1.5rem;
}

.contact-item p {
  margin: 0;
  color: #4a5568;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .hero-image img {
    max-width: 250px;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  .role {
    font-size: 1.5rem;
  }
  
  .contact-info {
    flex-direction: column;
    align-items: center;
  }
}
</style> 