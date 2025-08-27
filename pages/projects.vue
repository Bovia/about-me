<template>
  <div class="projects-page">
    <div class="page-header">
      <FloatingParticles :particle-count="20" :opacity="0.15" color="#60a5fa" />
      <h1 class="section-title">我的作品集</h1>
      <p class="description">以下是我完成的一些项目作品，展示我的技术能力和实际工作经验。</p>
      <div class="decoration-dots"></div>
      <div class="decoration-circle"></div>
    </div>
    
    <div v-if="pending" class="loading">
      <p>加载中...</p>
      <div class="loading-animation">
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
      </div>
    </div>
    
    <div v-else-if="error" class="error">
      <p>加载失败: {{ error.message }}</p>
      <button @click="refreshData" class="retry-button">重试</button>
    </div>
    
    <div v-else class="projects-container">
      <div class="filter-section">
        <div class="search-box">
          <input 
            type="text" 
            v-model="searchTerm" 
            placeholder="搜索项目..." 
            class="search-input"
          />
        </div>
      </div>
      
      <div class="projects-grid">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id" 
          class="project-card"
          :style="{animationDelay: `${0.1 * (project.id - 1)}s`}"
        >
          <div class="card-inner">
            <div class="project-image-container">
              <img :src="project.image" :alt="project.name" class="project-image" />
              <div class="project-overlay">
                <NuxtLink :to="`/project/${project.id}`" class="view-detail">查看详情</NuxtLink>
              </div>
            </div>
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
                <NuxtLink :to="`/project/${project.id}`" class="detail-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                  项目详情
                </NuxtLink>
                <a :href="project.link" target="_blank" class="view-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  源代码
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="filteredProjects.length === 0" class="no-results">
        <p>没有找到匹配的项目</p>
        <button @click="resetSearch" class="reset-button">重置搜索</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// 服务端数据获取示例
const { data: projects, pending, error, refresh } = await useFetch('/api/projects')

// 搜索功能
const searchTerm = ref('')

const filteredProjects = computed(() => {
  if (!searchTerm.value) return projects.value
  
  const term = searchTerm.value.toLowerCase()
  return projects.value.filter(project => {
    return project.name.toLowerCase().includes(term) || 
           project.description.toLowerCase().includes(term) ||
           project.technologies.some(tech => tech.toLowerCase().includes(term))
  })
})

function resetSearch() {
  searchTerm.value = ''
}

function refreshData() {
  refresh()
}

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
  max-width: 1300px;
  margin: 0 auto;
  padding-bottom: 5rem;
  position: relative;
}

.page-header {
  position: relative;
  margin-bottom: 4rem;
  padding-bottom: 1rem;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2d3748;
  font-weight: 800;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  border-radius: 2px;
}

.decoration-dots {
  position: absolute;
  bottom: 0;
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

.description {
  text-align: center;
  margin-bottom: 1rem;
  color: #4a5568;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.1rem;
  line-height: 1.6;
}

.loading, .error {
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin: 2rem 0;
}

.loading-animation {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 1rem;
}

.loading-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #3b82f6;
  animation: bounce 1.4s infinite ease-in-out both;
}

.loading-dot:nth-child(1) {
  animation-delay: -0.32s;
}

.loading-dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  } 
  40% {
    transform: scale(1);
  }
}

.error {
  color: #e53e3e;
}

.retry-button {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.retry-button:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
}

.projects-container {
  animation: fadeIn 0.5s ease-out;
}

.filter-section {
  margin-bottom: 2rem;
}

.search-box {
  max-width: 500px;
  margin: 0 auto 2rem;
}

.search-input {
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 2rem;
  font-size: 1rem;
  background-color: white;
  transition: all 0.3s ease;
  outline: none;
}

.search-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 5px 15px rgba(59, 130, 246, 0.1);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
}

.project-card {
  height: 100%;
  perspective: 1000px;
  opacity: 0;
  animation: fadeInUp 0.8s forwards;
}

.card-inner {
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  transform-style: preserve-3d;
}

.project-card:hover .card-inner {
  transform: translateY(-10px) rotateX(5deg);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}

.project-image-container {
  position: relative;
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

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(45, 55, 72, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-detail {
  background-color: white;
  color: #3b82f6;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 600;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.project-card:hover .view-detail {
  transform: translateY(0);
}

.view-detail:hover {
  background-color: #3b82f6;
  color: white;
}

.project-info {
  padding: 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-info h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  color: #2d3748;
  font-size: 1.4rem;
  font-weight: 600;
}

.project-company {
  color: #4a5568;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project-company span {
  font-weight: 600;
}

.company-link {
  color: #3b82f6;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.company-link::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #3b82f6;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: right;
}

.company-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.project-description {
  color: #4a5568;
  margin-bottom: 1.5rem;
  flex: 1;
  line-height: 1.6;
  font-size: 0.95rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background-color: #ebf5ff;
  color: #3b82f6;
  padding: 0.3rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  transition: all 0.2s ease;
}

.tech-tag:hover {
  background-color: #3b82f6;
  color: white;
  transform: translateY(-2px);
}

.button-group {
  display: flex;
  gap: 1rem;
  margin-top: auto;
}

.view-button, .detail-button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 0.95rem;
}

.view-button svg, .detail-button svg {
  transition: transform 0.3s ease;
}

.detail-button {
  background-color: #8b5cf6;
}

.detail-button:hover {
  background-color: #7c3aed;
  transform: translateY(-3px);
}

.detail-button:hover svg {
  transform: scale(1.1);
}

.view-button {
  background-color: #3b82f6;
}

.view-button:hover {
  background-color: #2563eb;
  transform: translateY(-3px);
}

.view-button:hover svg {
  transform: translateX(3px);
}

.no-results {
  text-align: center;
  padding: 3rem 0;
  animation: fadeIn 0.5s ease-out;
}

.reset-button {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.reset-button:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
  
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }
  
  .button-group {
    flex-direction: column;
  }
}
</style> 