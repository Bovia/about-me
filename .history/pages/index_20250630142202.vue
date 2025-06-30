<template>
  <div class="home-page">
    <h1>欢迎来到我的个人网站</h1>
    <p class="intro">这是我的个人空间，在这里我分享我的经历、技能和作品。</p>
    
    <div class="features">
      <div class="feature-card">
        <h3>个人简介</h3>
        <p>了解我的背景、技能和专业经验</p>
      </div>
      
      <div class="feature-card">
        <h3>作品集</h3>
        <p>浏览我完成的项目和作品展示</p>
      </div>
      
      <div class="feature-card">
        <h3>博客文章</h3>
        <p>阅读我的技术文章和个人见解</p>
      </div>
    </div>
    
    <div class="cta-section">
      <h2>了解更多</h2>
      <NuxtLink to="/profile" class="cta-button">查看我的简介</NuxtLink>
    </div>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: '首页 - 我的个人网站',
  meta: [
    { name: 'description', content: '欢迎来到我的个人网站，了解我的经历、技能和作品' }
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