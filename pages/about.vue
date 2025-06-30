<template>
  <div class="about-page">
    <h1>关于我</h1>
    
    <div class="about-content">
      <div class="about-image">
        <img src="https://via.placeholder.com/400x400?text=詹丹丹" alt="詹丹丹照片" />
      </div>
      
      <div class="about-text">
        <h2>我的个人介绍</h2>
        <p>
          大家好，我是詹丹丹，一名拥有6年前端开发经验的工程师。我热爱编程和技术创新，对构建高性能、用户友好的应用程序充满热情。
        </p>
        <p>
          我目前任职于普华永道(PwC)，担任Senior Associate前端开发工程师，主要负责Emission Tracker碳排放追踪系统的开发与维护。在此之前，我曾在上海联蔚数据科技有限公司工作，参与多个大型企业级项目的开发，包括CMP云管理平台、CMDB资源管理系统等。
        </p>
        
        <h2>我的专长</h2>
        <p>
          在前端开发领域，我擅长Vue2/3、React、微前端架构和数据可视化。我熟练掌握ES6、TypeScript、CSS3等前端技术，以及ElementUI、AntDesign等UI框架。我还有丰富的数据可视化开发经验，熟悉ECharts、D3、AntV G6等可视化工具库，能够构建复杂的数据展示界面。
        </p>
        <p>
          除了技术能力，我还有良好的项目管理经验，曾负责安利项目的前端团队管理，具备团队协作和项目把控能力。我善于解决复杂问题，如微前端架构升级、复杂动态表单实现、大数据量场景下的性能优化等。
        </p>
        
        <h2>我的价值观</h2>
        <ul>
          <li><strong>持续学习</strong> - 技术发展迅速，我保持对新技术的学习热情，不断提升自己的技能水平。</li>
          <li><strong>精益求精</strong> - 我注重代码质量和性能优化，追求高质量的用户体验。</li>
          <li><strong>团队合作</strong> - 我相信良好的团队合作能够创造更大价值，乐于分享知识和经验。</li>
          <li><strong>解决问题</strong> - 我善于分析问题并寻求最佳解决方案，面对挑战时保持积极的态度。</li>
        </ul>
        
        <h2>我的兴趣</h2>
        <p>
          除了编程，我还热爱设计，曾担任过UI设计工作，对用户体验和界面设计有独特的见解。我也喜欢数据可视化领域，享受将复杂数据转化为直观图表的过程。在业余时间，我喜欢研究新技术，探索前端开发的最新趋势。
        </p>
      </div>
    </div>
    
    <div class="about-stats">
      <div class="stat-item">
        <div class="stat-number">6+</div>
        <div class="stat-label">年前端开发经验</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">10+</div>
        <div class="stat-label">企业级项目</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">5+</div>
        <div class="stat-label">精通技术框架</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">3+</div>
        <div class="stat-label">行业领域经验</div>
      </div>
    </div>
    
    <div class="contact-cta">
      <h2>与我联系</h2>
      <p>如果您有任何疑问或合作意向，欢迎随时联系我。</p>
      <div class="contact-info">
        <p><strong>电话/微信:</strong> 17521300512</p>
        <p><strong>电子邮箱:</strong> 375006500@qq.com</p>
      </div>
      <NuxtLink to="/profile" class="contact-button">查看完整简历</NuxtLink>
    </div>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: '关于我 - 詹丹丹',
  meta: [
    { name: 'description', content: '了解詹丹丹的个人经历、技能和专长，一名拥有6年经验的前端开发工程师' }
  ]
})
</script>

<style scoped>
.about-page {
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 3rem;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2d3748;
  position: relative;
  padding-bottom: 1rem;
}

h1::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background-color: #3182ce;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .about-content {
    flex-direction: row;
  }
  
  .about-image {
    flex: 1;
  }
  
  .about-text {
    flex: 2;
  }
}

.about-image img {
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.about-text h2 {
  color: #3182ce;
  margin-top: 0;
  margin-bottom: 1rem;
}

.about-text p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #4a5568;
}

.about-text ul {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.about-text li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
  color: #4a5568;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 640px) {
  .about-stats {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-item {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #3182ce;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #4a5568;
}

.contact-cta {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.contact-cta h2 {
  color: #3182ce;
  margin-top: 0;
  margin-bottom: 1rem;
}

.contact-cta p {
  margin-bottom: 1rem;
  color: #4a5568;
}

.contact-info {
  margin-bottom: 1.5rem;
}

.contact-button {
  display: inline-block;
  background-color: #3182ce;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.contact-button:hover {
  background-color: #2c5282;
}
</style> 