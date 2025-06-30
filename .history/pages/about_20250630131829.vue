<template>
  <div class="about-page">
    <h1>关于我们</h1>
    
    <div class="about-content">
      <div class="about-image">
        <img src="https://via.placeholder.com/400x300" alt="公司图片" />
      </div>
      
      <div class="about-text">
        <h2>我们的故事</h2>
        <p>
          我们是一家专注于提供高质量web解决方案的公司。我们的团队由经验丰富的开发人员、设计师和产品经理组成，致力于为客户创造出色的数字体验。
        </p>
        <p>
          自成立以来，我们已经为众多企业和组织提供了服务，帮助他们实现了业务目标和技术愿景。我们相信技术应该服务于人，而不是相反。
        </p>
        
        <h2>我们的使命</h2>
        <p>
          我们的使命是通过创新的技术解决方案，帮助企业在数字时代取得成功。我们致力于提供高性能、用户友好的应用程序，使企业能够更好地服务于他们的客户。
        </p>
        
        <h2>我们的价值观</h2>
        <ul>
          <li><strong>质量优先</strong> - 我们不妥协于质量，确保每个项目都达到最高标准。</li>
          <li><strong>持续创新</strong> - 我们不断探索新技术和方法，保持竞争优势。</li>
          <li><strong>客户满意</strong> - 我们将客户的成功视为我们自己的成功。</li>
          <li><strong>团队协作</strong> - 我们相信通过协作可以实现更大的目标。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: '关于我们 - Nuxt SSR 项目',
  meta: [
    { name: 'description', content: '了解我们的公司、使命和价值观' }
  ]
})
</script>

<style scoped>
.about-page {
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2d3748;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .about-content {
    flex-direction: row;
  }
  
  .about-image {
    flex: 1;
  }
  
  .about-text {
    flex: 2;
  }
}

.about-image img {
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.about-text h2 {
  color: #3182ce;
  margin-top: 0;
  margin-bottom: 1rem;
}

.about-text p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.about-text ul {
  padding-left: 1.5rem;
}

.about-text li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}
</style> 