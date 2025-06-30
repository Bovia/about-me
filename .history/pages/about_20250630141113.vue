<template>
  <div class="about-page">
    <h1>关于我</h1>
    
    <div class="about-content">
      <div class="about-image">
        <img src="https://via.placeholder.com/400x300?text=个人照片" alt="我的照片" />
      </div>
      
      <div class="about-text">
        <h2>我的故事</h2>
        <p>
          大家好，我是一名热爱技术的开发者。我的编程之旅始于大学时期，当时我对如何通过代码创造有用的应用程序产生了浓厚的兴趣。毕业后，我加入了一家科技公司，开始了我的专业开发生涯。
        </p>
        <p>
          在过去的几年中，我参与了各种规模的项目开发，从小型网站到大型企业应用。我特别喜欢解决复杂问题和学习新技术，不断提升自己的技能水平。
        </p>
        
        <h2>我的兴趣</h2>
        <p>
          除了编程，我还有许多其他兴趣爱好。我喜欢阅读技术书籍和科幻小说，探索新的编程语言和框架。在空闲时间，我喜欢户外活动，如徒步旅行和骑行，这些活动帮助我保持身心健康和创造力。
        </p>
        
        <h2>我的价值观</h2>
        <ul>
          <li><strong>持续学习</strong> - 我相信终身学习的重要性，技术领域日新月异，保持学习是成长的关键。</li>
          <li><strong>开源精神</strong> - 我积极参与开源社区，分享知识和经验，共同进步。</li>
          <li><strong>用户至上</strong> - 我认为好的技术应该以解决用户问题为中心，创造真正有价值的产品。</li>
          <li><strong>工作与生活平衡</strong> - 我重视工作与生活的平衡，相信只有保持健康的生活方式才能持续创造价值。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: '关于我 - 个人网站',
  meta: [
    { name: 'description', content: '了解我的故事、兴趣和价值观' }
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