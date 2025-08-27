<template>
  <div class="tech-blog-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <FloatingParticles :particle-count="20" :opacity="0.15" color="#8b5cf6" />
      <h1 class="section-title">技术博客</h1>
      <p class="description">
        分享前端开发经验、技术探索和项目实践。记录成长路径，传播技术价值。
      </p>
      <div class="blog-stats">
        <div class="stat-item">
          <div class="stat-number">{{ articles.length }}</div>
          <div class="stat-label">技术文章</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ totalViews }}</div>
          <div class="stat-label">总阅读量</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ categories.length }}</div>
          <div class="stat-label">技术分类</div>
        </div>
      </div>
    </div>

    <!-- 分类筛选 -->
    <div class="filter-section">
      <div class="category-filters">
        <button 
          @click="selectedCategory = 'all'"
          class="category-btn"
          :class="{ active: selectedCategory === 'all' }"
        >
          全部文章
        </button>
        <button 
          v-for="category in categories"
          :key="category.id"
          @click="selectedCategory = category.id"
          class="category-btn"
          :class="{ active: selectedCategory === category.id }"
        >
          <span class="category-icon" v-html="category.icon"></span>
          {{ category.name }}
          <span class="category-count">{{ category.count }}</span>
        </button>
      </div>
    </div>

    <!-- 文章列表 -->
    <div class="articles-section">
      <div class="articles-grid">
        <article 
          v-for="(article, index) in filteredArticles" 
          :key="article.id"
          class="article-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @click="openArticle(article)"
        >
          <div class="article-inner">
            <!-- 文章封面 -->
            <div class="article-cover">
              <img :src="article.cover" :alt="article.title" />
              <div class="article-overlay">
                <div class="read-time">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12,6 12,12 16,14"></polyline>
                  </svg>
                  {{ article.readTime }}分钟阅读
                </div>
              </div>
            </div>

            <!-- 文章内容 -->
            <div class="article-content">
              <div class="article-meta">
                <span class="article-category" :class="`category-${article.category}`">
                  {{ getCategoryName(article.category) }}
                </span>
                <span class="article-date">{{ formatDate(article.date) }}</span>
              </div>
              
              <h2 class="article-title">{{ article.title }}</h2>
              <p class="article-excerpt">{{ article.excerpt }}</p>
              
              <div class="article-tags">
                <span 
                  v-for="tag in article.tags" 
                  :key="tag" 
                  class="article-tag"
                >
                  {{ tag }}
                </span>
              </div>
              
              <div class="article-footer">
                <div class="article-stats">
                  <span class="stat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    {{ article.views }}
                  </span>
                  <span class="stat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    {{ article.comments }}
                  </span>
                </div>
                <div class="read-more">
                  阅读全文 →
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- 空状态 -->
      <div v-if="filteredArticles.length === 0" class="empty-state">
        <div class="empty-icon">📝</div>
        <h3>暂无相关文章</h3>
        <p>该分类下还没有发布文章，敬请期待！</p>
      </div>
    </div>

    <!-- 文章详情模态框 -->
    <div v-if="selectedArticle" class="article-modal-overlay" @click="closeArticle">
      <div class="article-modal" @click.stop>
        <button @click="closeArticle" class="modal-close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div class="modal-content">
          <div class="modal-header">
            <h1>{{ selectedArticle.title }}</h1>
            <div class="modal-meta">
              <span class="modal-date">{{ formatDate(selectedArticle.date) }}</span>
              <span class="modal-category">{{ getCategoryName(selectedArticle.category) }}</span>
              <span class="modal-read-time">{{ selectedArticle.readTime }}分钟阅读</span>
            </div>
          </div>
          
          <div class="modal-body">
            <div v-html="selectedArticle.content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 响应式数据
const selectedCategory = ref('all')
const selectedArticle = ref(null)

// 文章分类
const categories = ref([
  {
    id: 'frontend',
    name: '前端技术',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    count: 8
  },
  {
    id: 'project',
    name: '项目实践',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><folder x="3" y="3" width="18" height="18" rx="2" ry="2"></folder><path d="M7 3v18l6-6 6 6V3z"></path></svg>',
    count: 5
  },
  {
    id: 'fintech',
    name: '金融科技',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
    count: 3
  },
  {
    id: 'performance',
    name: '性能优化',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    count: 4
  }
])

// 技术文章数据
const articles = ref([
  {
    id: 1,
    title: 'Vue 3 Composition API 在大型项目中的实践',
    excerpt: '深入探讨 Vue 3 Composition API 在企业级项目中的应用，包括状态管理、逻辑复用和性能优化等方面的最佳实践。',
    category: 'frontend',
    date: '2024-12-15',
    readTime: 8,
    views: 1234,
    comments: 23,
    tags: ['Vue3', 'Composition API', '企业级开发'],
    cover: 'https://via.placeholder.com/400x200?text=Vue3+实践',
    content: `
      <h2>引言</h2>
      <p>Vue 3 的 Composition API 为我们提供了更灵活的代码组织方式...</p>
      <h2>核心概念</h2>
      <p>Composition API 的核心思想是将相关的逻辑组织在一起...</p>
      <h2>实际应用</h2>
      <p>在我们的 Emission Tracker 项目中，我们大量使用了 Composition API...</p>
    `
  },
  {
    id: 2,
    title: '微前端架构在金融系统中的应用与挑战',
    excerpt: '结合实际项目经验，分析微前端架构在金融科技领域的应用场景、技术选型和实施过程中遇到的挑战及解决方案。',
    category: 'fintech',
    date: '2024-12-10',
    readTime: 12,
    views: 856,
    comments: 18,
    tags: ['微前端', '金融科技', '架构设计'],
    cover: 'https://via.placeholder.com/400x200?text=微前端架构',
    content: `
      <h2>背景</h2>
      <p>在金融系统的开发过程中，我们面临着多团队协作、技术栈统一等挑战...</p>
      <h2>微前端方案选择</h2>
      <p>经过技术调研和实践验证，我们选择了 qiankun 作为微前端框架...</p>
    `
  },
  {
    id: 3,
    title: 'React 18 并发特性在数据可视化中的应用',
    excerpt: '探索 React 18 的并发特性如何提升大数据量可视化图表的渲染性能，以及在实际项目中的优化策略。',
    category: 'frontend',
    date: '2024-12-05',
    readTime: 10,
    views: 967,
    comments: 15,
    tags: ['React18', '数据可视化', '性能优化'],
    cover: 'https://via.placeholder.com/400x200?text=React18+并发',
    content: `
      <h2>React 18 并发特性概述</h2>
      <p>React 18 引入了并发渲染机制，让我们能够更好地控制渲染优先级...</p>
    `
  },
  {
    id: 4,
    title: '从零搭建企业级前端监控系统',
    excerpt: '详细介绍如何从零开始搭建一套完整的前端监控系统，包括错误监控、性能监控和用户行为分析。',
    category: 'project',
    date: '2024-11-28',
    readTime: 15,
    views: 1456,
    comments: 32,
    tags: ['监控系统', '性能优化', '工程化'],
    cover: 'https://via.placeholder.com/400x200?text=前端监控',
    content: `
      <h2>监控系统的重要性</h2>
      <p>在现代前端开发中，监控系统是保障应用稳定性的重要工具...</p>
    `
  },
  {
    id: 5,
    title: 'Webpack 5 Module Federation 实战指南',
    excerpt: '深入学习 Webpack 5 的 Module Federation 特性，通过实际案例展示如何实现模块共享和动态加载。',
    category: 'frontend',
    date: '2024-11-20',
    readTime: 11,
    views: 743,
    comments: 19,
    tags: ['Webpack5', 'Module Federation', '模块化'],
    cover: 'https://via.placeholder.com/400x200?text=Module+Federation',
    content: `
      <h2>Module Federation 简介</h2>
      <p>Module Federation 是 Webpack 5 中最激动人心的新特性之一...</p>
    `
  }
])

// 计算属性
const filteredArticles = computed(() => {
  if (selectedCategory.value === 'all') {
    return articles.value
  }
  return articles.value.filter(article => article.category === selectedCategory.value)
})

const totalViews = computed(() => {
  return articles.value.reduce((total, article) => total + article.views, 0)
})

// 方法
function getCategoryName(categoryId) {
  const category = categories.value.find(cat => cat.id === categoryId)
  return category ? category.name : '未分类'
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function openArticle(article) {
  selectedArticle.value = article
  document.body.style.overflow = 'hidden'
}

function closeArticle() {
  selectedArticle.value = null
  document.body.style.overflow = 'auto'
}

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})

// 页面元数据
useHead({
  title: '技术博客 - 詹丹丹',
  meta: [
    { name: 'description', content: '詹丹丹的技术博客，分享前端开发经验、项目实践和技术探索' }
  ]
})
</script>

<style scoped>
.tech-blog-page {
  max-width: 1300px;
  margin: 0 auto;
  padding-bottom: 5rem;
}

/* 页面头部 */
.page-header {
  position: relative;
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
  overflow: hidden;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
}

.description {
  font-size: 1.2rem;
  color: #6b7280;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.7;
  position: relative;
  z-index: 2;
}

.blog-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  position: relative;
  z-index: 2;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #8b5cf6;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: #6b7280;
  font-weight: 500;
}

/* 筛选区域 */
.filter-section {
  margin-bottom: 3rem;
}

.category-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.category-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  border: 2px solid rgba(139, 92, 246, 0.2);
  border-radius: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.category-btn:hover {
  background: rgba(139, 92, 246, 0.2);
  transform: translateY(-2px);
}

.category-btn.active {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  border-color: #8b5cf6;
}

.category-icon {
  display: flex;
  align-items: center;
}

.category-count {
  background: rgba(255, 255, 255, 0.3);
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 700;
}

/* 文章网格 */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
}

.article-card {
  opacity: 0;
  animation: slideInUp 0.8s forwards;
  cursor: pointer;
}

.article-inner {
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.article-card:hover .article-inner {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

/* 文章封面 */
.article-cover {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.article-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.article-card:hover .article-cover img {
  transform: scale(1.05);
}

.article-overlay {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.read-time {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.85rem;
  font-weight: 500;
}

/* 文章内容 */
.article-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.article-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.article-category {
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.category-frontend { background: #dbeafe; color: #1e40af; }
.category-project { background: #f3e8ff; color: #7c3aed; }
.category-fintech { background: #d1fae5; color: #047857; }
.category-performance { background: #fef3c7; color: #d97706; }

.article-date {
  font-size: 0.9rem;
  color: #6b7280;
}

.article-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.article-excerpt {
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.article-tag {
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.article-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}

.article-stats {
  display: flex;
  gap: 1rem;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.85rem;
  color: #6b7280;
}

.read-more {
  color: #8b5cf6;
  font-weight: 600;
  font-size: 0.9rem;
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  grid-column: 1 / -1;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.empty-state h3 {
  font-size: 1.5rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
}

.empty-state p {
  color: #6b7280;
}

/* 文章详情模态框 */
.article-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
}

.article-modal {
  background: white;
  border-radius: 1.5rem;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
}

.modal-content {
  padding: 3rem;
}

.modal-header {
  margin-bottom: 2rem;
}

.modal-header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.modal-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.modal-date,
.modal-category,
.modal-read-time {
  font-size: 0.9rem;
  color: #6b7280;
  padding: 0.3rem 0.8rem;
  background: #f3f4f6;
  border-radius: 1rem;
}

.modal-body {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #374151;
}

.modal-body h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin: 2rem 0 1rem;
}

.modal-body p {
  margin-bottom: 1rem;
}

/* 动画 */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .blog-stats {
    gap: 2rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .category-filters {
    gap: 0.75rem;
  }
  
  .category-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
  
  .modal-content {
    padding: 2rem;
  }
  
  .modal-header h1 {
    font-size: 1.5rem;
  }
}
</style>