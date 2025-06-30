<template>
  <div class="projects-page">
    <h1>我的作品集</h1>
    <p class="description">以下是我完成的一些项目作品，展示我的技能和经验。</p>
    
    <div v-if="pending" class="loading">
      <p>加载中...</p>
    </div>
    
    <div v-else-if="error" class="error">
      <p>加载失败: {{ error.message }}</p>
    </div>
    
    <div v-else class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <img :src="project.image" :alt="project.name" class="project-image" />
        <div class="project-info">
          <h3>{{ project.name }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
          <a :href="project.link" target="_blank" class="view-button">查看项目</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 服务端数据获取示例
const { data: projects, pending, error } = await useFetch('/api/projects')

// 页面元数据
useHead({
  title: '作品集 - 个人网站',
  meta: [
    { name: 'description', content: '浏览我的项目作品集，了解我的技能和经验' }
  ]
})
</script>

<style scoped>
.projects-page {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2d3748;
}

.description {
  text-align: center;
  margin-bottom: 2rem;
  color: #4a5568;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.error {
  color: #e53e3e;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
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

.project-description {
  color: #4a5568;
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background-color: #ebf4ff;
  color: #3182ce;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
}

.view-button {
  display: inline-block;
  background-color: #3182ce;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  text-decoration: none;
}

.view-button:hover {
  background-color: #2c5282;
}
</style> 