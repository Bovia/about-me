<template>
  <div class="layout">
    <header class="header">
      <div class="header-content">
        <div class="logo">
          <NuxtLink to="/" class="logo-link">李明</NuxtLink>
        </div>
      <nav class="nav">
        <NuxtLink to="/" class="nav-link">首页</NuxtLink>
          <NuxtLink to="/about" class="nav-link">关于我</NuxtLink>
          <NuxtLink to="/projects" class="nav-link">作品集</NuxtLink>
          <NuxtLink to="/profile" class="nav-link">个人简介</NuxtLink>
          <NuxtLink to="/ssr-guide" class="nav-link">SSR指南</NuxtLink>
      </nav>
        <div class="social-links">
          <a href="https://github.com/liming-dev" target="_blank" class="social-link">GitHub</a>
          <a href="https://linkedin.com/in/liming-dev" target="_blank" class="social-link">LinkedIn</a>
        </div>
      </div>
    </header>
    
    <main class="main-content">
      <slot />
    </main>
    
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-info">
          <p>&copy; {{ new Date().getFullYear() }} 李明 - 个人网站</p>
          <p>全栈开发工程师 | 北京，中国</p>
        </div>
        <div class="footer-links">
          <NuxtLink to="/" class="footer-link">首页</NuxtLink>
          <NuxtLink to="/about" class="footer-link">关于我</NuxtLink>
          <NuxtLink to="/projects" class="footer-link">作品集</NuxtLink>
          <NuxtLink to="/profile" class="footer-link">个人简介</NuxtLink>
        </div>
        <div class="footer-contact">
          <p>联系我: liming@example.com</p>
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
}

.header {
  background-color: #2d3748;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.logo-link {
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s;
}

.nav-link:hover, .nav-link.router-link-active {
  border-color: #3182ce;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: white;
  text-decoration: none;
  font-size: 0.875rem;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.social-link:hover {
  opacity: 1;
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.footer {
  background-color: #2d3748;
  color: white;
  padding: 2rem;
  margin-top: auto;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-info p {
  margin: 0.25rem 0;
  opacity: 0.8;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.footer-link:hover {
  opacity: 1;
}

.footer-contact p {
  margin: 0.25rem 0;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .social-links {
    display: none;
  }
}
</style> 