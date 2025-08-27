<template>
  <div class="layout">
    <GlassNavbar />
    
    <main class="main-content">
      <slot />
    </main>
    
    <ScrollIndicator />
    
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-info">
          <p>&copy; {{ new Date().getFullYear() }} 詹丹丹 - 个人网站</p>
          <p>前端开发工程师 | 上海，中国</p>
        </div>
        <div class="footer-links">
          <NuxtLink to="/" class="footer-link">首页</NuxtLink>
          <NuxtLink to="/about" class="footer-link">关于我</NuxtLink>
          <NuxtLink to="/projects" class="footer-link">作品集</NuxtLink>
          <NuxtLink to="/blog" class="footer-link">个人博客</NuxtLink>
          <NuxtLink to="/profile" class="footer-link">个人简历</NuxtLink>
        </div>
        <div class="footer-contact">
          <p>联系我: 375006500@qq.com</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
}

/* 旧的导航栏样式已移除，使用新的 GlassNavbar 组件 */

.main-content {
  flex: 1;
  padding: 2rem 2rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  min-height: calc(100vh - 80px);
}

.footer {
  background-color: #1d232a;
  color: white;
  padding: 4rem 2rem;
  margin-top: 5rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.footer-info p {
  margin: 0.5rem 0;
  opacity: 0.8;
  font-size: 0.95rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.footer-link:hover {
  color: white;
}

.footer-contact p {
  margin: 0.5rem 0;
  opacity: 0.8;
  font-size: 0.95rem;
}

@media (max-width: 900px) {
  .main-content {
    padding: 3rem 1.5rem;
  }
}
</style> 