<template>
  <div class="ssr-guide">
    <h1>服务端渲染(SSR)指南</h1>
    
    <div class="guide-content">
      <section class="guide-section">
        <h2>什么是服务端渲染(SSR)?</h2>
        <p>
          服务端渲染(Server-Side Rendering, SSR)是一种网页渲染技术，它在服务器上生成完整的HTML页面，然后将其发送到客户端浏览器。这与传统的客户端渲染(CSR)不同，后者只发送基本的HTML框架和JavaScript，然后在浏览器中动态生成内容。
        </p>
        <div class="info-box">
          <h4>SSR的关键特点:</h4>
          <ul>
            <li>页面内容在服务器上渲染</li>
            <li>浏览器接收到的是完整的HTML</li>
            <li>JavaScript仍然在客户端"激活"(hydration)页面，使其具有交互性</li>
          </ul>
        </div>
      </section>
      
      <section class="guide-section">
        <h2>SSR的优势</h2>
        <div class="advantages">
          <div class="advantage-card">
            <h3>更好的SEO</h3>
            <p>搜索引擎爬虫可以直接看到完整的页面内容，而不需要执行JavaScript。</p>
          </div>
          
          <div class="advantage-card">
            <h3>更快的首屏加载</h3>
            <p>用户可以更快地看到页面内容，不需要等待JavaScript下载和执行。</p>
          </div>
          
          <div class="advantage-card">
            <h3>更好的性能体验</h3>
            <p>特别是在低性能设备或网络连接不佳的情况下，SSR可以提供更好的用户体验。</p>
          </div>
        </div>
      </section>
      
      <section class="guide-section">
        <h2>SSR在Nuxt中的实现</h2>
        <p>
          Nuxt.js是一个基于Vue.js的框架，它提供了开箱即用的SSR功能。在Nuxt中，服务端渲染的工作流程如下:
        </p>
        
        <div class="flow-diagram">
          <div class="flow-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>服务器接收请求</h4>
              <p>当用户访问页面时，请求首先到达Nuxt服务器。</p>
            </div>
          </div>
          
          <div class="flow-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>数据获取</h4>
              <p>Nuxt在服务器上执行页面组件中的asyncData和fetch方法，获取所需数据。</p>
            </div>
          </div>
          
          <div class="flow-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>HTML渲染</h4>
              <p>使用获取的数据，Nuxt在服务器上渲染Vue组件，生成HTML。</p>
            </div>
          </div>
          
          <div class="flow-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>发送到客户端</h4>
              <p>服务器将生成的HTML和必要的JavaScript发送到浏览器。</p>
            </div>
          </div>
          
          <div class="flow-step">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4>激活(Hydration)</h4>
              <p>在浏览器中，Vue接管页面并使其具有交互性，这个过程称为"激活"。</p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="guide-section">
        <h2>在Nuxt中使用SSR的关键概念</h2>
        
        <div class="concept-grid">
          <div class="concept-card">
            <h3>useFetch / useAsyncData</h3>
            <p>这些组合式API允许您在服务器端获取数据，然后将其传递给组件。数据会自动序列化并传输到客户端。</p>
            <pre><code>const { data } = await useFetch('/api/data')</code></pre>
          </div>
          
          <div class="concept-card">
            <h3>useHead</h3>
            <p>允许您设置页面的元数据，如标题和描述，这些信息会在服务器端渲染时包含在HTML中。</p>
            <pre><code>useHead({
  title: '页面标题',
  meta: [{ name: 'description', content: '页面描述' }]
})</code></pre>
          </div>
          
          <div class="concept-card">
            <h3>nuxt.config.ts</h3>
            <p>Nuxt配置文件中的ssr选项允许您控制是否启用服务端渲染。</p>
            <pre><code>export default defineNuxtConfig({
  ssr: true // 启用SSR (默认值)
})</code></pre>
          </div>
          
          <div class="concept-card">
            <h3>客户端/服务端特定代码</h3>
            <p>使用process.client和process.server可以编写只在客户端或服务器端执行的代码。</p>
            <pre><code>if (process.server) {
  // 只在服务器上执行的代码
}

if (process.client) {
  // 只在浏览器中执行的代码
}</code></pre>
          </div>
        </div>
      </section>
      
      <section class="guide-section">
        <h2>SSR vs CSR vs 静态生成</h2>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>特性</th>
              <th>服务端渲染 (SSR)</th>
              <th>客户端渲染 (CSR)</th>
              <th>静态生成 (SSG)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>页面生成时间</td>
              <td>每次请求时</td>
              <td>在浏览器中</td>
              <td>构建时</td>
            </tr>
            <tr>
              <td>SEO</td>
              <td>很好</td>
              <td>较差</td>
              <td>很好</td>
            </tr>
            <tr>
              <td>首屏加载</td>
              <td>快</td>
              <td>慢</td>
              <td>最快</td>
            </tr>
            <tr>
              <td>服务器负载</td>
              <td>高</td>
              <td>低</td>
              <td>最低</td>
            </tr>
            <tr>
              <td>数据实时性</td>
              <td>实时</td>
              <td>实时</td>
              <td>构建时静态</td>
            </tr>
          </tbody>
        </table>
      </section>
      
      <section class="guide-section">
        <h2>实际示例：本项目中的SSR</h2>
        <p>
          在本项目中，我们已经实现了几个使用SSR的页面：
        </p>
        <ul class="example-list">
          <li>
            <strong>产品页面</strong> - 使用<code>useFetch</code>从服务器API获取产品数据
          </li>
          <li>
            <strong>个人简介页面</strong> - 使用<code>useFetch</code>从服务器API获取用户资料
          </li>
        </ul>
        <p>
          这些页面展示了SSR的基本工作流程：
        </p>
        <ol>
          <li>在服务器上获取数据</li>
          <li>使用数据渲染HTML</li>
          <li>将HTML发送到浏览器</li>
          <li>在浏览器中"激活"页面，使其具有交互性</li>
        </ol>
      </section>
    </div>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: 'SSR指南 - Nuxt SSR 项目',
  meta: [
    { name: 'description', content: '了解服务端渲染(SSR)的基本概念和在Nuxt中的实现' }
  ]
})
</script>

<style scoped>
.ssr-guide {
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 3rem;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2d3748;
}

.guide-section {
  margin-bottom: 3rem;
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.guide-section h2 {
  color: #3182ce;
  margin-top: 0;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.info-box {
  background-color: #ebf8ff;
  border-left: 4px solid #3182ce;
  padding: 1rem;
  margin: 1.5rem 0;
  border-radius: 0.25rem;
}

.info-box h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #2c5282;
}

.info-box ul {
  margin-bottom: 0;
  padding-left: 1.5rem;
}

.advantages {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.advantage-card {
  background-color: #f7fafc;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.advantage-card h3 {
  color: #3182ce;
  margin-top: 0;
  margin-bottom: 0.75rem;
}

.advantage-card p {
  margin: 0;
  color: #4a5568;
}

.flow-diagram {
  margin: 2rem 0;
}

.flow-step {
  display: flex;
  margin-bottom: 1.5rem;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #3182ce;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 1rem;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.step-content p {
  margin: 0;
  color: #4a5568;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.concept-card {
  background-color: #f7fafc;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.concept-card h3 {
  color: #3182ce;
  margin-top: 0;
  margin-bottom: 0.75rem;
}

.concept-card p {
  margin-bottom: 1rem;
  color: #4a5568;
}

.concept-card pre {
  background-color: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 0.25rem;
  overflow-x: auto;
  margin: 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
}

.comparison-table th, .comparison-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.comparison-table th {
  background-color: #f7fafc;
  font-weight: bold;
  color: #2d3748;
}

.example-list li {
  margin-bottom: 0.75rem;
}

@media (max-width: 768px) {
  .guide-section {
    padding: 1.5rem;
  }
  
  .concept-grid, .advantages {
    grid-template-columns: 1fr;
  }
}
</style> 