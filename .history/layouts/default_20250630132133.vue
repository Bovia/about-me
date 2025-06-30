<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <NuxtLink to="/" class="nav-link">首页</NuxtLink>
        <NuxtLink to="/about" class="nav-link">关于我们</NuxtLink>
        <NuxtLink to="/products" class="nav-link">产品</NuxtLink>
      </nav>
    </header>
    
    <main class="main-content">
      <slot />x
    </main>
    
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} Nuxt SSR 项目</p>
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
  background-color: #4a5568;
  padding: 1rem;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: #2d3748;
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
  text-align: center;
  padding: 1rem;
  margin-top: auto;
}
</style> 