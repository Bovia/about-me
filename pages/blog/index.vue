<template>
  <div class="blog-page">
    <div class="page-header">
      <h1 class="section-title">个人博客</h1>
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
    </div>
    
    <div v-else class="blog-intro">
      <h2>{{ intro.title }}</h2>
      <p>{{ intro.description }}</p>
      <div class="intro-decoration"></div>
    </div>
    
    <div v-if="!pending && !error" class="hobby-section photography">
      <div class="section-content">
        <h3 class="hobby-title">
          <span class="hobby-icon">📸</span>
          摄影
        </h3>
        <p class="hobby-description">
          摄影是我抓住生活瞬间的方式，通过镜头记录下美丽的风景、城市的脉动和生活的细节。
          无论是旅行途中的壮丽景色，还是日常生活中的微小变化，我都喜欢用相机将它们定格成永恒。
        </p>
        
        <!-- 摄影作品轮播图 -->
        <div class="carousel-container">
          <div class="carousel">
            <div v-for="(photo, index) in photos" :key="`photo-${index}`" class="carousel-item" :class="{ active: currentPhotoIndex === index }">
              <img :src="photo.url" :alt="photo.description" class="carousel-image" />
              <div class="carousel-caption">
                <h4>{{ photo.title }}</h4>
                <p>{{ photo.description }}</p>
              </div>
            </div>
          </div>
          
          <div class="carousel-controls">
            <button @click="prevPhoto" class="control-btn prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <div class="carousel-indicators">
              <span v-for="(photo, index) in photos" 
                    :key="`indicator-${index}`"
                    class="indicator"
                    :class="{ active: currentPhotoIndex === index }"
                    @click="currentPhotoIndex = index">
              </span>
            </div>
            <button @click="nextPhoto" class="control-btn next">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
      <div class="decoration-element photo-element"></div>
    </div>
    
    <div v-if="!pending && !error" class="hobby-section drawing">
      <div class="section-content">
        <h3 class="hobby-title">
          <span class="hobby-icon">🎨</span>
          绘画
        </h3>
        <p class="hobby-description">
          绘画让我能够表达内心的情感和创意。从素描到水彩，从数字插画到传统国画，
          我喜欢尝试不同的绘画风格和技法，让创意在画布上自由流动。
        </p>
        
        <!-- 绘画作品轮播图 -->
        <div class="carousel-container">
          <div class="carousel">
            <div v-for="(drawing, index) in drawings" :key="`drawing-${index}`" class="carousel-item" :class="{ active: currentDrawingIndex === index }">
              <img :src="drawing.url" :alt="drawing.description" class="carousel-image" />
              <div class="carousel-caption">
                <h4>{{ drawing.title }}</h4>
                <p>{{ drawing.description }}</p>
              </div>
            </div>
          </div>
          
          <div class="carousel-controls">
            <button @click="prevDrawing" class="control-btn prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <div class="carousel-indicators">
              <span v-for="(drawing, index) in drawings" 
                    :key="`indicator-${index}`"
                    class="indicator"
                    :class="{ active: currentDrawingIndex === index }"
                    @click="currentDrawingIndex = index">
              </span>
            </div>
            <button @click="nextDrawing" class="control-btn next">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
      <div class="decoration-element drawing-element"></div>
    </div>
    
    <div v-if="!pending && !error" class="hobby-section cats">
      <div class="section-content">
        <h3 class="hobby-title">
          <span class="hobby-icon">🐱</span>
          我的猫咪们
        </h3>
        <p class="hobby-description">
          我是一个猫咪爱好者，家里养了几只可爱的猫咪。它们是我生活中的重要伙伴，
          每天带给我无尽的欢乐和温暖，也教会我耐心和爱心。
        </p>
        
        <!-- 猫咪照片展示 -->
        <div class="cats-grid">
          <div v-for="(cat, index) in cats" :key="`cat-${index}`" class="cat-card">
            <div class="cat-image-container">
              <img :src="cat.photo" :alt="cat.name" class="cat-image" />
            </div>
            <div class="cat-info">
              <h4>{{ cat.name }}</h4>
              <p class="cat-breed">{{ cat.breed }}</p>
              <p class="cat-description">{{ cat.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="decoration-element cats-element"></div>
    </div>
    
    <div v-if="!pending && !error" class="contact-section">
      <h3>分享你的想法</h3>
      <p>喜欢我的作品或者想要交流兴趣爱好？欢迎联系我！</p>
      <div class="contact-buttons">
        <a href="mailto:375006500@qq.com" class="contact-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          发邮件
        </a>
        <a href="https://github.com/Bovia" target="_blank" class="contact-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 服务端数据获取
const { data: blogData, pending, error } = await useFetch('/api/blog');

// 从API获取数据
const photos = ref(blogData.value?.photos || []);
const drawings = ref(blogData.value?.drawings || []);
const cats = ref(blogData.value?.cats || []);
const intro = ref(blogData.value?.intro || {
  title: "我的创意空间",
  description: "欢迎来到我的个人博客！这里是我展示创意、分享生活的天地。"
});

// 页面元数据
useHead({
  title: '个人博客 - 詹丹丹',
  meta: [
    { name: 'description', content: '詹丹丹的个人博客，分享摄影作品、绘画作品和猫咪日常' }
  ]
});

// 轮播图控制
const currentPhotoIndex = ref(0);
const currentDrawingIndex = ref(0);

// 摄影轮播图控制
const nextPhoto = () => {
  currentPhotoIndex.value = (currentPhotoIndex.value + 1) % photos.value.length;
};
const prevPhoto = () => {
  currentPhotoIndex.value = (currentPhotoIndex.value - 1 + photos.value.length) % photos.value.length;
};

// 绘画轮播图控制
const nextDrawing = () => {
  currentDrawingIndex.value = (currentDrawingIndex.value + 1) % drawings.value.length;
};
const prevDrawing = () => {
  currentDrawingIndex.value = (currentDrawingIndex.value - 1 + drawings.value.length) % drawings.value.length;
};

// 自动轮播
let photoInterval;
let drawingInterval;

onMounted(() => {
  // 启动自动轮播
  photoInterval = setInterval(nextPhoto, 5000);
  drawingInterval = setInterval(nextDrawing, 6000);
  
  // 页面动画效果
  const sections = document.querySelectorAll('.hobby-section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // 清除定时器
  return () => {
    clearInterval(photoInterval);
    clearInterval(drawingInterval);
  };
});
</script>

<style scoped>
.blog-page {
  max-width: 1000px;
  margin: 0 auto 5rem;
  padding: 0 1rem;
  position: relative;
}

.page-header {
  margin-bottom: 3rem;
  position: relative;
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

.loading, .error {
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  animation: fadeIn 0.5s ease-out;
  margin-bottom: 3rem;
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

.blog-intro {
  background: white;
  border-radius: 1rem;
  padding: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.blog-intro h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2d3748;
}

.blog-intro p {
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
}

.intro-decoration {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.1));
  bottom: -75px;
  right: -75px;
  z-index: 0;
}

/* 爱好部分通用样式 */
.hobby-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
  position: relative;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
  padding: 2rem 0;
}

.hobby-section.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 768px) {
  .hobby-section {
    flex-direction: row;
    align-items: center;
  }
  
  .hobby-section .section-content {
    width: 100%;
  }
}

.decoration-element {
  position: absolute;
  z-index: -1;
}

.section-content {
  background: white;
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  z-index: 1;
}

.hobby-title {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  position: relative;
  font-size: 1.75rem;
  color: #2d3748;
}

.hobby-icon {
  margin-right: 0.75rem;
  font-size: 1.75rem;
}

.hobby-description {
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1rem;
}

/* 轮播图样式 */
.carousel-container {
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  margin-top: 2rem;
}

.carousel {
  position: relative;
  height: 400px;
}

.carousel-item {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.carousel-item.active {
  opacity: 1;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.carousel-caption h4 {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
}

.carousel-caption p {
  margin: 0;
  font-size: 1rem;
  opacity: 0.9;
}

.carousel-controls {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.control-btn {
  background: rgba(255, 255, 255, 0.5);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.control-btn:hover {
  background: rgba(255, 255, 255, 0.8);
}

.carousel-indicators {
  display: flex;
  gap: 8px;
  margin: 0 1rem;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
  transform: scale(1.2);
}

/* 爱好特定样式 */
.photography .decoration-element {
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background-image: radial-gradient(#3b82f6 1px, transparent 1px);
  background-size: 10px 10px;
}

.drawing .decoration-element {
  bottom: -50px;
  left: -50px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(219, 39, 119, 0.1));
}

.cats .decoration-element {
  top: 10%;
  right: -30px;
  width: 100px;
  height: 300px;
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.05), rgba(96, 165, 250, 0.05));
  transform: skewY(-15deg);
}

/* 猫咪卡片样式 */
.cats-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .cats-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.cat-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.cat-image-container {
  height: 200px;
  overflow: hidden;
}

.cat-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.cat-card:hover .cat-image {
  transform: scale(1.05);
}

.cat-info {
  padding: 1.5rem;
}

.cat-info h4 {
  margin: 0 0 0.5rem;
  color: #2d3748;
  font-size: 1.25rem;
}

.cat-breed {
  color: #3b82f6;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.cat-description {
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
}

/* 联系部分 */
.contact-section {
  background: white;
  border-radius: 1rem;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  animation: fadeIn 0.8s ease-out;
}

.contact-section h3 {
  font-size: 1.75rem;
  color: #2d3748;
  margin-bottom: 1rem;
}

.contact-section p {
  color: #4a5568;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.contact-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact-button:hover {
  background-color: #2563eb;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
}

@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(20px);
  }
  to { 
    opacity: 1; 
    transform: translateY(0);
  }
}
</style> 