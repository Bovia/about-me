export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  const path = url.pathname

  // 将 /products 重定向到 /projects
  if (path === '/products') {
    return sendRedirect(event, '/projects', 301)
  }
}) 