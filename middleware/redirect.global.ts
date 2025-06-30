export default defineNuxtRouteMiddleware((to, from) => {
  // 将/products路径重定向到/projects
  if (to.path === '/products') {
    return navigateTo('/projects', { redirectCode: 301 })
  }
}) 