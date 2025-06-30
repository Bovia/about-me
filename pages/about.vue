<template>
  <div class="about-page">
    <div class="page-header">
      <h1 class="section-title">关于我</h1>
      <div class="decoration-dots"></div>
      <div class="decoration-circle"></div>
    </div>
    
    <div class="about-content">
      <div class="about-image">
        <div class="image-container">
          <img src="https://via.placeholder.com/400x400?text=詹丹丹" alt="詹丹丹照片" />
          <div class="image-border"></div>
        </div>
      </div>
      
      <div class="about-text">
        <div class="text-section animate-section">
          <h2>我的个人介绍</h2>
        <p>
            大家好，我是詹丹丹，一名拥有6年前端开发经验的工程师。我热爱编程和技术创新，对构建高性能、用户友好的应用程序充满热情。
        </p>
        <p>
            我目前任职于普华永道(PwC)，担任Senior Associate前端开发工程师，主要负责Emission Tracker碳排放追踪系统的开发与维护。在此之前，我曾在上海联蔚数据科技有限公司工作，参与多个大型企业级项目的开发，包括CMP云管理平台、CMDB资源管理系统等。
        </p>
        </div>
        
        <div class="text-section animate-section">
          <h2>我的专长</h2>
        <p>
            在前端开发领域，我擅长Vue2/3、React、微前端架构和数据可视化。我熟练掌握ES6、TypeScript、CSS3等前端技术，以及ElementUI、AntDesign等UI框架。我还有丰富的数据可视化开发经验，熟悉ECharts、D3、AntV G6等可视化工具库，能够构建复杂的数据展示界面。
          </p>
          <p>
            除了技术能力，我还有良好的项目管理经验，曾负责安利项目的前端团队管理，具备团队协作和项目把控能力。我善于解决复杂问题，如微前端架构升级、复杂动态表单实现、大数据量场景下的性能优化等。
        </p>
        </div>
        
        <div class="text-section animate-section">
          <h2>我的价值观</h2>
          <div class="values-list">
            <div class="value-item">
              <div class="value-icon">🌱</div>
              <div class="value-content">
                <h3>持续学习</h3>
                <p>技术发展迅速，我保持对新技术的学习热情，不断提升自己的技能水平。</p>
              </div>
            </div>
            <div class="value-item">
              <div class="value-icon">✨</div>
              <div class="value-content">
                <h3>精益求精</h3>
                <p>我注重代码质量和性能优化，追求高质量的用户体验。</p>
              </div>
            </div>
            <div class="value-item">
              <div class="value-icon">👥</div>
              <div class="value-content">
                <h3>团队合作</h3>
                <p>我相信良好的团队合作能够创造更大价值，乐于分享知识和经验。</p>
              </div>
            </div>
            <div class="value-item">
              <div class="value-icon">🔍</div>
              <div class="value-content">
                <h3>解决问题</h3>
                <p>我善于分析问题并寻求最佳解决方案，面对挑战时保持积极的态度。</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-section animate-section">
          <h2>我的兴趣</h2>
          <p>
            除了编程，我还热爱设计，曾担任过UI设计工作，对用户体验和界面设计有独特的见解。我也喜欢数据可视化领域，享受将复杂数据转化为直观图表的过程。在业余时间，我喜欢研究新技术，探索前端开发的最新趋势。
          </p>
        </div>
      </div>
    </div>
    
    <div class="about-stats">
      <div class="stat-item" v-for="(stat, index) in stats" :key="index">
        <div class="stat-number">{{ stat.number }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
    
    <div class="contact-cta">
      <div class="cta-content">
        <h2>与我联系</h2>
        <p>如果您有任何疑问或合作意向，欢迎随时联系我。</p>
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">📱</div>
            <p><strong>电话/微信:</strong> <a href="tel:17521300512">17521300512</a></p>
          </div>
          <div class="contact-item">
            <div class="contact-icon">✉️</div>
            <p><strong>电子邮箱:</strong> <a href="mailto:375006500@qq.com">375006500@qq.com</a></p>
          </div>
        </div>
        <NuxtLink to="/profile" class="contact-button">查看完整简历</NuxtLink>
      </div>
      <div class="decoration-circle-small"></div>
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

// 数据
const stats = [
  { number: '6+', label: '年前端开发经验' },
  { number: '10+', label: '企业级项目' },
  { number: '5+', label: '精通技术框架' },
  { number: '3+', label: '行业领域经验' }
]

// 页面加载后的动画
onMounted(() => {
  const sections = document.querySelectorAll('.animate-section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    observer.observe(section);
  });
})
</script>

<style scoped>
.about-page {
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 5rem;
  position: relative;
}

.page-header {
  margin-bottom: 4rem;
  position: relative;
}

.decoration-dots {
  position: absolute;
  top: -30px;
  right: 10%;
  width: 100px;
  height: 100px;
  background-image: radial-gradient(#3b82f6 2px, transparent 2px);
  background-size: 15px 15px;
  z-index: -1;
}

.decoration-circle {
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(96, 165, 250, 0.05));
  top: -100px;
  left: -100px;
  z-index: -1;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2d3748;
  position: relative;
  font-weight: 800;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  border-radius: 2px;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 5rem;
}

@media (min-width: 900px) {
  .about-content {
    flex-direction: row;
    gap: 5rem;
  }
  
  .about-image {
    flex: 5;
    position: sticky;
    top: 7rem;
    height: fit-content;
  }
  
  .about-text {
    flex: 7;
  }
}

.about-image {
  position: relative;
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.image-container img {
  width: 100%;
  display: block;
  transition: transform 0.5s ease;
}

.image-container:hover img {
  transform: scale(1.03);
}

.image-border {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid #3b82f6;
  border-radius: 1.25rem;
  z-index: -1;
  opacity: 0.5;
}

.about-text h2 {
  color: #3b82f6;
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  position: relative;
  display: inline-block;
}

.about-text h2::after {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  border-radius: 2px;
}

.about-text p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #4a5568;
  font-size: 1.05rem;
}

.animate-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animate-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.text-section {
  margin-bottom: 3.5rem;
}

.text-section:last-child {
  margin-bottom: 0;
}

.values-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
}

@media (min-width: 640px) {
  .values-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

.value-item {
  display: flex;
  align-items: flex-start;
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
}

.value-icon {
  font-size: 1.8rem;
  margin-right: 1rem;
  background-color: #ebf5ff;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.value-content h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  color: #2d3748;
}

.value-content p {
  margin: 0;
  font-size: 0.95rem;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;
  transform: translateY(30px);
  opacity: 0;
  animation: fadeInUp 1s forwards;
  animation-delay: 0.5s;
}

@media (min-width: 768px) {
  .about-stats {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-item {
  background: linear-gradient(145deg, #ffffff, #f5f7fa);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #3b82f6;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  color: #4a5568;
  font-size: 1rem;
}

.contact-cta {
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  color: white;
  padding: 3rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  transform: translateY(30px);
  opacity: 0;
  animation: fadeInUp 1s forwards;
  animation-delay: 0.7s;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.decoration-circle-small {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  bottom: -150px;
  right: -100px;
  z-index: 1;
}

.contact-cta h2 {
  color: white;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.contact-cta p {
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
}

@media (min-width: 640px) {
  .contact-info {
    flex-direction: row;
    gap: 3rem;
  }
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.contact-icon {
  background-color: rgba(255, 255, 255, 0.2);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.contact-item p {
  margin: 0;
}

.contact-item a {
  color: white;
  text-decoration: none;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease;
}

.contact-item a:hover {
  border-bottom-color: white;
}

.contact-button {
  display: inline-block;
  background-color: white;
  color: #3b82f6;
  padding: 1rem 2rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.contact-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
  
  .about-text p {
    font-size: 1rem;
  }
  
  .contact-cta {
    padding: 2rem;
  }
}
</style> 