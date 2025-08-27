<template>
  <header 
    ref="navbar" 
    class="glass-navbar"
    :class="{ 'scrolled': isScrolled }"
  >
    <!-- 背景蒙版和小圆点 -->
    <div class="navbar-background">
      <canvas ref="dotsCanvas" class="dots-canvas"></canvas>
      <div class="glass-overlay"></div>
    </div>

    <div class="navbar-content">
      <div class="logo-section">
        <NuxtLink to="/" class="logo-link">
          <span class="logo-text">詹丹丹</span>
          <div class="logo-glow"></div>
        </NuxtLink>
      </div>

      <nav class="navigation">
        <NuxtLink 
          v-for="(item, index) in navItems" 
          :key="item.path"
          :to="item.path" 
          class="nav-item"
          :class="{ active: isActive(item.path) }"
          @mouseenter="handleNavHover(index)"
        >
          <span class="nav-text">{{ item.name }}</span>
          <div class="nav-indicator"></div>
          <div class="nav-ripple"></div>
        </NuxtLink>
      </nav>

      <div class="social-section">
        <a 
          v-for="social in socialLinks" 
          :key="social.name"
          :href="social.url" 
          target="_blank" 
          class="social-link"
          :title="social.name"
        >
          <div class="social-icon" v-html="social.icon"></div>
          <div class="social-glow"></div>
        </a>
      </div>
    </div>

    <!-- 移动端菜单按钮 -->
    <button 
      class="mobile-menu-btn" 
      @click="toggleMobileMenu"
      :class="{ active: mobileMenuOpen }"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- 移动端菜单 -->
    <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
      <nav class="mobile-navigation">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.path"
          :to="item.path" 
          class="mobile-nav-item"
          @click="closeMobileMenu"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import * as d3 from 'd3'

const navbar = ref(null)
const dotsCanvas = ref(null)
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = [
  { name: '首页', path: '/' },
  { name: '关于我', path: '/about' },
  { name: '作品集', path: '/projects' },
  { name: '专业证书', path: '/certificates' },
  { name: '个人简历', path: '/profile' },
  { name: '个人博客', path: '/blog' },
  { name: 'SSR指南', path: '/ssr-guide' }
]

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Bovia',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/dandanzhan',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>'
  }
]

let dotsAnimation = null
let dots = []
let canvas = null
let ctx = null

onMounted(() => {
  initDotsAnimation()
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  if (dotsAnimation) {
    cancelAnimationFrame(dotsAnimation)
  }
})

function initDotsAnimation() {
  canvas = dotsCanvas.value
  if (!canvas) return
  
  ctx = canvas.getContext('2d')
  resizeCanvas()
  
  // 创建小圆点数据
  const dotCount = 50
  dots = Array.from({ length: dotCount }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.1,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    originalOpacity: Math.random() * 0.5 + 0.1
  }))
  
  animateDots()
}

function resizeCanvas() {
  if (!canvas) return
  canvas.width = window.innerWidth
  canvas.height = 80
}

function animateDots() {
  if (!ctx || !canvas) return
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  const scrollY = window.scrollY
  const scrollProgress = Math.min(scrollY / 500, 1)
  
  dots.forEach((dot, index) => {
    // 根据滚动位置调整小圆点的行为
    const scrollInfluence = Math.sin(scrollY * 0.01 + index * 0.1) * 0.3
    const targetOpacity = dot.originalOpacity * (1 + scrollInfluence)
    
    dot.opacity = d3.interpolate(dot.opacity, targetOpacity)(0.1)
    
    // 更新位置
    dot.x += dot.vx + scrollInfluence * 0.2
    dot.y += dot.vy + scrollInfluence * 0.1
    
    // 边界检测
    if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1
    if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1
    
    dot.x = Math.max(0, Math.min(canvas.width, dot.x))
    dot.y = Math.max(0, Math.min(canvas.height, dot.y))
    
    // 绘制小圆点
    ctx.beginPath()
    ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(59, 130, 246, ${dot.opacity})`
    ctx.fill()
    
    // 添加发光效果
    if (scrollProgress > 0.3) {
      ctx.beginPath()
      ctx.arc(dot.x, dot.y, dot.radius * 2, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(59, 130, 246, ${dot.opacity * 0.2})`
      ctx.fill()
    }
  })
  
  dotsAnimation = requestAnimationFrame(animateDots)
}

function handleScroll() {
  const scrollY = window.scrollY
  isScrolled.value = scrollY > 50
}

function handleResize() {
  resizeCanvas()
}

function handleNavHover(index) {
  // 在鼠标悬停时为相应区域的小圆点添加特效
  const startIndex = index * 8
  const endIndex = startIndex + 8
  
  for (let i = startIndex; i < Math.min(endIndex, dots.length); i++) {
    if (dots[i]) {
      dots[i].radius = Math.min(dots[i].radius * 1.5, 4)
      dots[i].vx *= 1.2
      dots[i].vy *= 1.2
    }
  }
}

function isActive(path) {
  const route = useRoute()
  return route.path === path || (path !== '/' && route.path.startsWith(path))
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.glass-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 80px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.dots-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.glass-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.glass-navbar.scrolled .glass-overlay {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px) saturate(200%);
  -webkit-backdrop-filter: blur(25px) saturate(200%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.navbar-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 10;
}

/* Logo 样式 */
.logo-section {
  position: relative;
}

.logo-link {
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1a202c;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.5px;
  transition: all 0.3s ease;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);
}

.logo-text {
  position: relative;
  z-index: 2;
}

.logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 40px;
  background: radial-gradient(ellipse, rgba(59, 130, 246, 0.3), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 50%;
  filter: blur(10px);
}

.logo-link:hover .logo-glow {
  opacity: 1;
}

.logo-link:hover {
  transform: translateY(-1px);
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

/* 导航样式 */
.navigation {
  display: flex;
  gap: 0.5rem;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  color: rgba(26, 32, 44, 0.8);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
}

.nav-text {
  position: relative;
  z-index: 2;
}

.nav-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  border-radius: 1px;
  transition: width 0.3s ease;
}

.nav-ripple {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(59, 130, 246, 0.1);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 12px;
}

.nav-item:hover,
.nav-item.active {
  color: #1a202c;
  transform: translateY(-1px);
  text-shadow: 0 2px 4px rgba(255, 255, 255, 1);
}

.nav-item:hover .nav-indicator,
.nav-item.active .nav-indicator {
  width: 80%;
}

.nav-item:hover .nav-ripple {
  opacity: 1;
}

.nav-item.active {
  background: rgba(59, 130, 246, 0.15);
}

/* 社交链接样式 */
.social-section {
  display: flex;
  gap: 1rem;
}

.social-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: rgba(26, 32, 44, 0.7);
  text-decoration: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  overflow: hidden;
}

.social-icon {
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.social-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(59, 130, 246, 0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 10px;
}

.social-link:hover {
  color: #1a202c;
  transform: translateY(-2px);
}

.social-link:hover .social-glow {
  opacity: 1;
}

.social-link:hover .social-icon {
  transform: scale(1.1);
}

/* 移动端菜单 */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 20;
}

.mobile-menu-btn span {
  width: 20px;
  height: 2px;
  background: #1a202c;
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 1px;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu.open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.mobile-navigation {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.mobile-nav-item {
  padding: 1rem;
  color: rgba(26, 32, 44, 0.8);
  text-decoration: none;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
}

.mobile-nav-item:hover {
  color: #1a202c;
  background: rgba(59, 130, 246, 0.1);
  text-shadow: 0 2px 4px rgba(255, 255, 255, 1);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .navigation {
    gap: 0.25rem;
  }
  
  .nav-item {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .navbar-content {
    padding: 0 1rem;
  }
  
  .navigation,
  .social-section {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .logo-link {
    font-size: 1.25rem;
  }
}

/* 毛玻璃导航栏样式完成 */
</style>