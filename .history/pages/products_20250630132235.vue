<template>
  <div class="products-page">
    <h1>产品列表</h1>
    <p class="description">以下是我们提供的产品列表，数据通过服务端渲染获取。</p>
    
    <div v-if="pending" class="loading">
      <p>加载中...</p>
    </div>
    
    <div v-else-if="error" class="error">
      <p>加载失败: {{ error.message }}</p>
    </div>
    
    <div v-else class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p class="product-description">{{ product.description }}</p>
          <p class="product-price">¥{{ product.price }}</p>
          <button class="view-button">查看详情</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 服务端数据获取示例
const { data: products, pending, error } = await useFetch('/api/products')

// 页面元数据
useHead({
  title: '产品列表 - Nuxt SSR 项目',
  meta: [
    { name: 'description', content: '浏览我们的产品列表' }
  ]
})
</script>

<style scoped>
.products-page {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2d3748;
}

.description {
  text-align: center;
  margin-bottom: 2rem;
  color: #4a5568;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.error {
  color: #e53e3e;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.product-card {
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 1.5rem;
}

.product-info h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.product-description {
  color: #4a5568;
  margin-bottom: 1rem;
}

.product-price {
  font-weight: bold;
  font-size: 1.2rem;
  color: #3182ce;
  margin-bottom: 1rem;
}

.view-button {
  background-color: #3182ce;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.view-button:hover {
  background-color: #2c5282;
}
</style> 