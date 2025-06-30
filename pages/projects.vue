<template>
  <div class="projects-page">
    <h1>我的作品集</h1>
    <p class="description">以下是我完成的一些项目作品，展示我的技术能力和实际工作经验。</p>
    
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
          <p class="project-company">
            <span>所属公司:</span> 
            <a :href="project.companyLink" target="_blank" class="company-link">{{ project.company }}</a>
          </p>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
          <div class="button-group">
            <a :href="project.link" target="_blank" class="view-button">查看项目</a>
            <a :href="project.companyLink" target="_blank" class="company-button">访问公司官网</a>
          </div>
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
  title: '作品集 - 詹丹丹',
  meta: [
    { name: 'description', content: '詹丹丹的项目作品集，包含多个企业级前端开发项目展示' }
  ]
})
</script>

<style scoped>
.projects-page {
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 3rem;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
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

.description {
  text-align: center;
  margin-bottom: 2rem;
  color: #4a5568;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
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
  height: 100%;
  display: flex;
  flex-direction: column;
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
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-info h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.project-company {
  color: #4a5568;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.project-company span {
  font-weight: bold;
}

.company-link {
  color: #3182ce;
  text-decoration: none;
  transition: color 0.3s;
}

.company-link:hover {
  color: #2c5282;
  text-decoration: underline;
}

.project-description {
  color: #4a5568;
  margin-bottom: 1rem;
  flex: 1;
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

.button-group {
  display: flex;
  gap: 0.5rem;
}

.view-button, .company-button {
  flex: 1;
  display: inline-block;
  color: white;
  border: none;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  text-decoration: none;
  text-align: center;
  font-size: 0.9rem;
}

.view-button {
  background-color: #3182ce;
}

.view-button:hover {
  background-color: #2c5282;
}

.company-button {
  background-color: #38a169;
}

.company-button:hover {
  background-color: #2f855a;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  
  .button-group {
    flex-direction: column;
  }
}
</style> 