<template>
  <div class="layout">
    <header class="header">
      <div class="header-content">
        <div class="logo">
          <NuxtLink to="/" class="logo-link">詹丹丹</NuxtLink>
        </div>
        <nav class="nav">
          <NuxtLink to="/" class="nav-link">首页</NuxtLink>
          <NuxtLink to="/about" class="nav-link">关于我</NuxtLink>
          <NuxtLink to="/projects" class="nav-link">作品集</NuxtLink>
          <NuxtLink to="/profile" class="nav-link">个人简历</NuxtLink>
          <NuxtLink to="/ssr-guide" class="nav-link">SSR指南</NuxtLink>
        </nav>
        <div class="social-links">
          <a href="https://github.com/Bovia" target="_blank" class="social-link">
            <span class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </span>
          </a>
          <a href="https://linkedin.com/in/dandanzhan" target="_blank" class="social-link">
            <span class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </header>
    
    <main class="main-content">
      <slot />
    </main>
    
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

.header {
  background-color: rgba(29, 35, 42, 0.95);
  backdrop-filter: blur(8px);
  padding: 1.25rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.logo-link {
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.75rem;
  letter-spacing: -0.5px;
  transition: all 0.3s ease;
}

.logo-link:hover {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  font-size: 1rem;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #3b82f6;
  transition: width 0.3s ease;
}

.nav-link:hover, .nav-link.router-link-active {
  color: white;
}

.nav-link:hover::after, .nav-link.router-link-active::after {
  width: 100%;
}

.social-links {
  display: flex;
  gap: 1.25rem;
}

.social-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.social-icon {
  display: flex;
}

.social-link:hover {
  color: white;
  transform: translateY(-2px);
}

.main-content {
  flex: 1;
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
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
  .header-content {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem 0;
  }
  
  .nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem 2rem;
  }
  
  .social-links {
    margin-top: 1rem;
  }
  
  .main-content {
    padding: 3rem 1.5rem;
  }
}
</style> 