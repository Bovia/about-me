<template>
  <div class="project-detail-container">
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>加载中...</p>
    </div>
    
    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <NuxtLink to="/projects" class="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        返回项目列表
      </NuxtLink>
    </div>
    
    <div v-else class="project-detail">
      <div class="header">
        <h1>{{ project.title }}</h1>
        <div class="meta">
          <span class="date">{{ project.date }}</span>
          <span class="divider">•</span>
          <span class="category">{{ project.category }}</span>
        </div>
      </div>
      
      <div class="content">
        <div class="image-container" v-if="project.image">
          <img :src="project.image" :alt="project.title" />
        </div>
        
        <div class="description">
          <h2>项目描述</h2>
          <p>{{ project.description }}</p>
        </div>
        
        <div class="tech-stack">
          <h2>技术栈</h2>
          <div class="tags">
            <span v-for="(tech, index) in project.technologies" :key="index" class="tag">
              {{ tech }}
            </span>
          </div>
        </div>
        
        <div class="responsibilities" v-if="project.responsibilities && project.responsibilities.length">
          <h2>我的职责</h2>
          <ul>
            <li v-for="(item, index) in project.responsibilities" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
        
        <div class="achievements" v-if="project.achievements && project.achievements.length">
          <h2>项目成果</h2>
          <ul>
            <li v-for="(item, index) in project.achievements" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      
      <div class="actions">
        <NuxtLink to="/projects" class="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          返回项目列表
        </NuxtLink>
        
        <a v-if="project.link" :href="project.link" target="_blank" class="view-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          访问项目
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const projectId = route.params.id;

const { data: project, error, pending: loading } = await useFetch(`/api/projects/${projectId}`);

// 如果没有找到项目，设置错误信息
if (!project.value) {
  error.value = '未找到该项目';
}

useHead({
  title: project.value ? `${project.value.title} - 詹丹丹的个人网站` : '项目详情 - 詹丹丹的个人网站'
});
</script>

<style scoped>
.project-detail-container {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.loading, .error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  text-align: center;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.header {
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.meta {
  color: #666;
  font-size: 0.9rem;
}

.divider {
  margin: 0 0.5rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.image-container {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: #f0f0f0;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
}

ul {
  padding-left: 1.5rem;
  margin: 0;
}

li {
  margin-bottom: 0.5rem;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
}

.back-button, .view-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.2rem;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s;
  text-decoration: none;
}

.back-button {
  background-color: #f0f0f0;
  color: #333;
}

.view-button {
  background-color: #3498db;
  color: white;
}

.back-button:hover, .view-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  
  .actions {
    flex-direction: column;
  }
}
</style>
