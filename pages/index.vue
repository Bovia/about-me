<template>
  <div class="home-page">
    <!-- 英雄区域 -->
    <section class="hero-section">
      <FloatingParticles :particle-count="25" :opacity="0.2" />
      <div class="hero-content">
        <div class="animated-text">
          <h1>詹丹丹</h1>
          <p class="role">前端开发工程师</p>
        </div>
        <p class="intro">6年前端开发经验，擅长Vue、React、微前端和数据可视化</p>
        <div class="hero-buttons">
          <NuxtLink to="/profile" class="primary-button">查看我的简历</NuxtLink>
          <NuxtLink to="/projects" class="secondary-button">浏览我的作品</NuxtLink>
        </div>
      </div>
      <div class="hero-image">
        <div class="image-wrapper">
          <img src="https://via.placeholder.com/450x450?text=詹丹丹" alt="詹丹丹照片" />
        </div>
        <div class="decoration-circle"></div>
        <div class="decoration-dots"></div>
        <InteractiveNetwork :width="200" :height="150" :node-count="12" />
      </div>
    </section>
    
    <!-- 专业技能区域 -->
    <section class="skills-section">
      <h2 class="section-title">专业技能</h2>
      <div class="skills-container">
        <div class="skill-category">
          <h3>前端框架</h3>
          <div class="skill-tags">
            <AnimatedSkillTag class="skill-tag">Vue2</AnimatedSkillTag>
            <AnimatedSkillTag class="skill-tag">Vue3</AnimatedSkillTag>
            <AnimatedSkillTag class="skill-tag">React</AnimatedSkillTag>
            <AnimatedSkillTag class="skill-tag">Nuxt3</AnimatedSkillTag>
            <AnimatedSkillTag class="skill-tag">微前端</AnimatedSkillTag>
          </div>
        </div>
        
        <div class="skill-category">
          <h3>语言</h3>
          <div class="skill-tags">
            <AnimatedSkillTag class="skill-tag">ES6</AnimatedSkillTag>
            <AnimatedSkillTag class="skill-tag">TypeScript</AnimatedSkillTag>
            <AnimatedSkillTag class="skill-tag">CSS3</AnimatedSkillTag>
            <AnimatedSkillTag class="skill-tag">HTML5</AnimatedSkillTag>
          </div>
        </div>
        
        <div class="skill-category">
          <h3>UI框架</h3>
          <div class="skill-tags">
            <AnimatedSkillTag class="skill-tag">ElementUI</AnimatedSkillTag>
            <AnimatedSkillTag class="skill-tag">AntDesign Vue</AnimatedSkillTag>
            <AnimatedSkillTag class="skill-tag">AntDesign</AnimatedSkillTag>
            <AnimatedSkillTag class="skill-tag">Tailwind</AnimatedSkillTag>
          </div>
        </div>
        
        <div class="skill-category">
          <h3>数据可视化</h3>
          <div class="skill-tags">
            <AnimatedSkillTag class="skill-tag">ECharts</AnimatedSkillTag>
            <AnimatedSkillTag class="skill-tag">D3</AnimatedSkillTag>
            <AnimatedSkillTag class="skill-tag">AntV G6</AnimatedSkillTag>
            <AnimatedSkillTag class="skill-tag">Superset</AnimatedSkillTag>
            <AnimatedSkillTag class="skill-tag">Power BI</AnimatedSkillTag>
          </div>
        </div>
        
        <div class="skill-category">
          <h3>工具链</h3>
          <div class="skill-tags">
            <AnimatedSkillTag class="skill-tag">Vite</AnimatedSkillTag>
            <AnimatedSkillTag class="skill-tag">Pinia</AnimatedSkillTag>
            <AnimatedSkillTag class="skill-tag">Form Generator</AnimatedSkillTag>
            <AnimatedSkillTag class="skill-tag">Power App</AnimatedSkillTag>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 工作经历区域 -->
    <section class="experience-section">
      <h2 class="section-title">工作经历</h2>
      <div class="timeline">
        <TimelineProgress :progress="100" :height="320" />
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
    </section>
    
    <!-- 精选项目区域 -->
    <section class="project-highlights">
      <h2 class="section-title">精选项目</h2>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-image-container">
            <img src="https://via.placeholder.com/350x200?text=Emission+Tracker" alt="Emission Tracker" class="project-image" />
          </div>
          <div class="project-info">
            <h3>Emission Tracker 碳排放追踪系统</h3>
            <p>跨国合作的碳排放数据管理平台，实现大数据深度分析</p>
            <NuxtLink to="/projects" class="view-more">查看详情 →</NuxtLink>
          </div>
        </div>
        
        <div class="project-card">
          <div class="project-image-container">
            <img src="https://via.placeholder.com/350x200?text=CMDB系统" alt="CMDB系统" class="project-image" />
          </div>
          <div class="project-info">
            <h3>CMDB资源管理系统</h3>
            <p>企业多云资源管理平台，帮助企业快速对接多种云产品</p>
            <NuxtLink to="/projects" class="view-more">查看详情 →</NuxtLink>
          </div>
      </div>
      
        <div class="project-card">
          <div class="project-image-container">
            <img src="https://via.placeholder.com/350x200?text=数据报表系统" alt="数据报表系统" class="project-image" />
          </div>
          <div class="project-info">
            <h3>Volvo数据报表系统</h3>
            <p>定制化数据报表平台，为决策提供关键数据支持</p>
            <NuxtLink to="/projects" class="view-more">查看详情 →</NuxtLink>
          </div>
        </div>
      </div>
      
      <div class="view-all">
        <NuxtLink to="/projects" class="view-all-button">查看全部项目</NuxtLink>
      </div>
    </section>
    
    <!-- 动画效果展示 -->
    <AnimationShowcase />
    
    <!-- 联系我区域 -->
    <section class="contact-section">
      <h2 class="section-title">联系我</h2>
      <div class="contact-info">
        <div class="contact-item">
          <span class="contact-icon">📱</span>
          <p>电话/微信: <a href="tel:17521300512">17521300512</a></p>
        </div>
        <div class="contact-item">
          <span class="contact-icon">✉️</span>
          <p>邮箱: <a href="mailto:375006500@qq.com">375006500@qq.com</a></p>
        </div>
        <div class="contact-item">
          <span class="contact-icon">📍</span>
          <p>地点: 上海，中国</p>
        </div>
    </div>
    </section>
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
  width: 100%;
}

/* 通用样式 */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  color: #2d3748;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  border-radius: 2px;
}

section {
  margin: 8rem 0;
  position: relative;
}

/* 英雄区域 */
.hero-section {
  display: flex;
  align-items: center;
  gap: 5rem;
  padding: 5rem 0;
  margin: 0 0 8rem;
  position: relative;
}

.hero-content {
  flex: 1;
  z-index: 10;
}

.animated-text {
  opacity: 0;
  animation: fadeInUp 1s forwards;
  animation-delay: 0.3s;
}

h1 {
  font-size: 4.5rem;
  margin: 0 0 0.5rem;
  color: #2d3748;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.1;
}

.role {
  font-size: 2rem;
  margin: 0 0 1.5rem;
  color: #3b82f6;
  font-weight: 600;
}

.intro {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: #4a5568;
  line-height: 1.7;
  opacity: 0;
  animation: fadeInUp 1s forwards;
  animation-delay: 0.6s;
  max-width: 90%;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  opacity: 0;
  animation: fadeInUp 1s forwards;
  animation-delay: 0.9s;
}

.primary-button, .secondary-button {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.primary-button {
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  color: white;
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
}

.primary-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 20px -3px rgba(59, 130, 246, 0.4);
}

.secondary-button {
  background-color: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
}

.secondary-button:hover {
  background-color: rgba(59, 130, 246, 0.1);
  transform: translateY(-3px);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.image-wrapper {
  position: relative;
  z-index: 5;
  opacity: 0;
  animation: fadeInRight 1s forwards;
  animation-delay: 0.6s;
}

.hero-image img {
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.decoration-circle {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.1));
  top: -40px;
  right: -40px;
  z-index: 1;
}

.decoration-dots {
  position: absolute;
  bottom: -30px;
  left: -30px;
  width: 100px;
  height: 100px;
  background-image: radial-gradient(#3b82f6 2px, transparent 2px);
  background-size: 15px 15px;
  z-index: 1;
}

/* 技能区域 */
.skills-section {
  padding: 2rem 0;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-top: 2rem;
}

.skill-category {
  padding: 2rem;
  background-color: #f8fafc;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
}

.skill-category h3 {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: #3b82f6;
  font-weight: 600;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.skill-tag {
  padding: 0.5rem 1rem;
  background-color: white;
  border-radius: 2rem;
  font-size: 0.875rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.skill-tag:hover {
  background-color: #3b82f6;
  color: white;
}

/* 经历时间线 */
.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 3px;
  background-color: #e2e8f0;
  top: 0;
  bottom: 0;
  left: 1.5rem;
}

.timeline-item {
  position: relative;
  padding: 0 0 3.5rem 3.5rem;
}

.timeline-dot {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #3b82f6;
  left: 0.75rem;
  transform: translateX(-50%);
  z-index: 1;
}

.timeline-content {
  padding: 2rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(10px);
}

.timeline-content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.timeline-place {
  font-size: 1rem;
  color: #3b82f6;
  margin-bottom: 0.25rem;
}

.timeline-period {
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 1rem;
}

.timeline-description {
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.6;
}

/* 项目展示 */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.project-card {
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.project-image-container {
  overflow: hidden;
  height: 200px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: #2d3748;
  font-weight: 600;
}

.project-info p {
  font-size: 0.95rem;
  color: #718096;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.view-more {
  color: #3b82f6;
  font-size: 0.95rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  display: inline-block;
}

.view-more:hover {
  transform: translateX(5px);
}

.view-all {
  text-align: center;
  margin-top: 3rem;
}

.view-all-button {
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: #e2e8f0;
  color: #4a5568;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.view-all-button:hover {
  background-color: #3b82f6;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
}

/* 联系部分 */
.contact-section {
  padding: 3rem;
  background-color: #f8fafc;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin: 8rem 0;
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact-icon {
  font-size: 1.5rem;
  background-color: #3b82f6;
  color: white;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.contact-item p {
  font-size: 1.1rem;
  color: #4a5568;
}

.contact-item a {
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-item a:hover {
  color: #2563eb;
  text-decoration: underline;
}

/* 动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .hero-section {
    flex-direction: column;
    gap: 4rem;
    padding: 3rem 0;
    text-align: center;
}

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .intro {
    max-width: 100%;
  }
  
  .skills-container {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  
  .timeline::before {
    left: 2rem;
  }
  
  .timeline-dot {
    left: 1.25rem;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 3.5rem;
  }
  
  .role {
    font-size: 1.5rem;
  }
  
  .intro {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .contact-info {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
}
</style> 