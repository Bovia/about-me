<template>
  <div class="home-page">
    <h1>欢迎来到我们的网站</h1>
    <p class="intro">这是一个使用Nuxt 3构建的服务端渲染(SSR)项目示例。</p>
    
    <div class="features">
      <div class="feature-card">
        <h3>服务端渲染</h3>
        <p>利用SSR提高首屏加载速度和SEO表现</p>
      </div>
      
      <div class="feature-card">
        <h3>Vue 3</h3>
        <p>使用Vue 3的Composition API构建响应式用户界面</p>
      </div>
      
      <div class="feature-card">
        <h3>Nuxt 3</h3>
        <p>享受Nuxt 3带来的开发体验和性能优化</p>
      </div>
    </div>
    
    <div class="cta-section">
      <h2>开始探索</h2>
      <NuxtLink to="/products" class="cta-button">查看产品</NuxtLink>
    </div>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: '首页 - Nuxt SSR 项目',
  meta: [
    { name: 'description', content: 'Nuxt 3 SSR项目的首页' }
  ]
})
</script>

<style scoped>
.home-page {
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2d3748;
}

.intro {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 3rem;
  color: #4a5568;
}

.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.feature-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  color: #3182ce;
  margin-bottom: 0.5rem;
}

.cta-section {
  margin-top: 3rem;
}

.cta-button {
  display: inline-block;
  background-color: #3182ce;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #2c5282;
}
</style> 