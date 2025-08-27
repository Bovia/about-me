<template>
  <div class="animation-showcase">
    <div class="showcase-section">
      <h3>🎨 D3 动画效果展示</h3>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">✨</div>
          <h4>毛玻璃导航栏</h4>
          <p>带有动态小圆点背景的毛玻璃效果导航栏，随滚动产生视觉变化</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🔘</div>
          <h4>浮动粒子背景</h4>
          <p>英雄区域的微妙浮动粒子，增加页面层次感而不干扰阅读</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🎯</div>
          <h4>交互式技能标签</h4>
          <p>鼠标悬停时产生粒子爆炸和波纹效果，让技能展示更生动</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">📈</div>
          <h4>时间线进度动画</h4>
          <p>工作经历时间线的渐进式填充动画，带有发光和粒子特效</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🌐</div>
          <h4>网络节点图</h4>
          <p>动态网络节点连接图，体现数据可视化能力</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h4>滚动进度指示器</h4>
          <p>右下角的环形进度指示器，实时显示页面滚动进度</p>
        </div>
      </div>
    </div>
    
    <div class="tech-stack">
      <h4>🔧 技术栈</h4>
      <div class="tech-tags">
        <AnimatedSkillTag class="tech-tag">D3.js</AnimatedSkillTag>
        <AnimatedSkillTag class="tech-tag">Vue 3</AnimatedSkillTag>
        <AnimatedSkillTag class="tech-tag">Nuxt 3</AnimatedSkillTag>
        <AnimatedSkillTag class="tech-tag">Canvas API</AnimatedSkillTag>
        <AnimatedSkillTag class="tech-tag">CSS3 Animation</AnimatedSkillTag>
        <AnimatedSkillTag class="tech-tag">Intersection Observer</AnimatedSkillTag>
      </div>
    </div>
  </div>
</template>

<script setup>
// 这个组件展示了所有动画效果的说明
</script>

<style scoped>
.animation-showcase {
  margin: 4rem 0;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(96, 165, 250, 0.05));
  border-radius: 1.5rem;
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;
  overflow: hidden;
}

.animation-showcase::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
  pointer-events: none;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.showcase-section h3 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2.5rem;
  color: #2d3748;
  font-weight: 700;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.feature-card h4 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #2d3748;
  font-weight: 600;
}

.feature-card p {
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
}

.tech-stack {
  text-align: center;
  position: relative;
  z-index: 1;
}

.tech-stack h4 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #2d3748;
  font-weight: 600;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.tech-tag {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #3b82f6;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

@media (max-width: 768px) {
  .animation-showcase {
    margin: 2rem 0;
    padding: 2rem 1.5rem;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
  
  .tech-tags {
    gap: 0.75rem;
  }
  
  .tech-tag {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
}
</style>