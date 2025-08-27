<template>
  <div class="resume-download">
    <div class="download-header">
      <h2 class="section-title">
        <span class="title-icon">📄</span>
        简历下载
      </h2>
      <p class="section-description">提供多种格式的简历版本，方便不同场景使用</p>
    </div>

    <div class="download-options">
      <div class="download-card pdf-card" @click="downloadResume('pdf')">
        <div class="card-content">
          <div class="download-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
              <polyline points="14,2 14,8 20,8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10,9 9,9 8,9"></polyline>
            </svg>
          </div>
          <div class="download-info">
            <h3>PDF 格式简历</h3>
            <p>标准格式，适合邮件发送和打印</p>
            <div class="file-meta">
              <span class="file-size">2.3 MB</span>
              <span class="file-pages">3 页</span>
            </div>
          </div>
          <div class="download-action">
            <div class="download-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              下载
            </div>
          </div>
        </div>
        <div class="card-hover-effect"></div>
      </div>

      <div class="download-card word-card" @click="downloadResume('docx')">
        <div class="card-content">
          <div class="download-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
              <polyline points="14,2 14,8 20,8"></polyline>
              <path d="M9 12h6"></path>
              <path d="M9 16h6"></path>
            </svg>
          </div>
          <div class="download-info">
            <h3>Word 格式简历</h3>
            <p>可编辑格式，便于个性化修改</p>
            <div class="file-meta">
              <span class="file-size">1.8 MB</span>
              <span class="file-pages">3 页</span>
            </div>
          </div>
          <div class="download-action">
            <div class="download-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              下载
            </div>
          </div>
        </div>
        <div class="card-hover-effect"></div>
      </div>

      <div class="download-card english-card" @click="downloadResume('pdf-en')">
        <div class="card-content">
          <div class="download-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          </div>
          <div class="download-info">
            <h3>English Resume</h3>
            <p>英文版简历，适合国际化职位</p>
            <div class="file-meta">
              <span class="file-size">2.1 MB</span>
              <span class="file-pages">2 页</span>
            </div>
          </div>
          <div class="download-action">
            <div class="download-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </div>
          </div>
        </div>
        <div class="card-hover-effect"></div>
      </div>
    </div>

    <!-- 在线预览 -->
    <div class="preview-section">
      <h3 class="subsection-title">在线预览</h3>
      <div class="preview-container">
        <div class="preview-toolbar">
          <div class="toolbar-left">
            <span class="preview-title">詹丹丹 - 前端开发工程师简历</span>
          </div>
          <div class="toolbar-right">
            <button @click="togglePreviewMode" class="preview-mode-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
              </svg>
              {{ previewMode === 'split' ? '全屏预览' : '分屏预览' }}
            </button>
            <button @click="printResume" class="print-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              打印简历
            </button>
          </div>
        </div>
        
        <div class="preview-content" :class="{ 'fullscreen': previewMode === 'fullscreen' }">
          <div class="resume-preview">
            <div class="resume-page">
              <div class="resume-header">
                <div class="personal-info">
                  <h1>詹丹丹</h1>
                  <p class="title">前端开发工程师</p>
                  <div class="contact-info">
                    <span>📱 17521300512</span>
                    <span>✉️ 375006500@qq.com</span>
                    <span>📍 上海，中国</span>
                  </div>
                </div>
                <div class="profile-photo">
                  <div class="photo-placeholder">照片</div>
                </div>
              </div>
              
              <div class="resume-section">
                <h2>专业技能</h2>
                <div class="skills-grid">
                  <div class="skill-category">
                    <strong>前端框架：</strong>Vue2/3, React, Nuxt3, 微前端
                  </div>
                  <div class="skill-category">
                    <strong>编程语言：</strong>JavaScript, TypeScript, HTML5, CSS3
                  </div>
                  <div class="skill-category">
                    <strong>数据可视化：</strong>ECharts, D3.js, AntV G6, Power BI
                  </div>
                </div>
              </div>
              
              <div class="resume-section">
                <h2>工作经历</h2>
                <div class="experience-item">
                  <div class="experience-header">
                    <h3>Senior Associate 前端开发工程师</h3>
                    <span class="duration">现在</span>
                  </div>
                  <p class="company">普华永道 PwC</p>
                  <p class="description">负责Emission Tracker碳排放追踪系统与BI项目的维护与新需求开发。跨区域、跨国家协同合作。</p>
                </div>
              </div>
              
              <div class="resume-section">
                <h2>专业证书</h2>
                <div class="certificates-list">
                  <div class="certificate-item">
                    <strong>PMP项目管理专业人士认证</strong> - PMI (2024年11月)
                  </div>
                  <div class="certificate-item">
                    <strong>证券从业资格证</strong> - 中国证券业协会 (2025年8月)
                  </div>
                  <div class="certificate-item">
                    <strong>腾讯云从业者认证</strong> - 腾讯云 (2022年)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 下载统计 -->
    <div class="download-stats">
      <div class="stats-item">
        <div class="stat-number">{{ downloadStats.totalDownloads }}</div>
        <div class="stat-label">总下载次数</div>
      </div>
      <div class="stats-item">
        <div class="stat-number">{{ downloadStats.thisMonth }}</div>
        <div class="stat-label">本月下载</div>
      </div>
      <div class="stats-item">
        <div class="stat-number">{{ downloadStats.formats }}</div>
        <div class="stat-label">支持格式</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const previewMode = ref('split')
const downloadStats = ref({
  totalDownloads: 1247,
  thisMonth: 89,
  formats: 3
})

function downloadResume(format) {
  // 模拟下载功能
  const fileName = {
    'pdf': '詹丹丹-前端开发工程师-简历.pdf',
    'docx': '詹丹丹-前端开发工程师-简历.docx',
    'pdf-en': 'DanDan-Zhan-Frontend-Developer-Resume.pdf'
  }[format]
  
  // 这里应该是实际的文件下载逻辑
  console.log(`下载简历: ${fileName}`)
  
  // 创建一个临时链接来触发下载
  const link = document.createElement('a')
  link.href = `/resume/${fileName}` // 这里应该是实际的文件路径
  link.download = fileName
  link.click()
  
  // 更新下载统计
  downloadStats.value.totalDownloads++
  downloadStats.value.thisMonth++
  
  // 显示下载成功提示
  showDownloadSuccess(fileName)
}

function showDownloadSuccess(fileName) {
  // 这里可以显示一个成功提示
  alert(`开始下载: ${fileName}`)
}

function togglePreviewMode() {
  previewMode.value = previewMode.value === 'split' ? 'fullscreen' : 'split'
}

function printResume() {
  window.print()
}
</script>

<style scoped>
.resume-download {
  margin: 4rem 0;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(59, 130, 246, 0.02));
  border-radius: 2rem;
  border: 1px solid rgba(59, 130, 246, 0.1);
}

/* 头部样式 */
.download-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.title-icon {
  font-size: 2rem;
}

.section-description {
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

/* 下载选项 */
.download-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.download-card {
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.download-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.card-content {
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  z-index: 2;
}

.download-icon {
  color: #3b82f6;
  flex-shrink: 0;
}

.pdf-card .download-icon { color: #dc2626; }
.word-card .download-icon { color: #2563eb; }
.english-card .download-icon { color: #059669; }

.download-info {
  flex: 1;
}

.download-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.download-info p {
  color: #6b7280;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.file-meta {
  display: flex;
  gap: 1rem;
}

.file-size,
.file-pages {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
}

.download-action {
  flex-shrink: 0;
}

.download-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.download-card:hover .download-btn {
  transform: scale(1.05);
}

.card-hover-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.download-card:hover .card-hover-effect {
  left: 100%;
}

/* 预览部分 */
.preview-section {
  margin-bottom: 4rem;
}

.subsection-title {
  font-size: 2rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 2rem;
  text-align: center;
}

.preview-container {
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.preview-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.preview-title {
  font-weight: 600;
  color: #1f2937;
}

.toolbar-right {
  display: flex;
  gap: 1rem;
}

.preview-mode-btn,
.print-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.preview-mode-btn:hover,
.print-btn:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.preview-content {
  height: 600px;
  overflow-y: auto;
  padding: 2rem;
}

.preview-content.fullscreen {
  height: 80vh;
}

.resume-preview {
  max-width: 800px;
  margin: 0 auto;
}

.resume-page {
  background: white;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  font-family: 'Times New Roman', serif;
  line-height: 1.5;
}

.resume-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #3b82f6;
}

.personal-info h1 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.personal-info .title {
  font-size: 1.25rem;
  color: #3b82f6;
  font-weight: 600;
  margin-bottom: 1rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-info span {
  font-size: 0.95rem;
  color: #4b5563;
}

.profile-photo {
  width: 100px;
  height: 120px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 0.9rem;
}

.resume-section {
  margin-bottom: 2rem;
}

.resume-section h2 {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.skills-grid {
  display: grid;
  gap: 0.75rem;
}

.skill-category {
  font-size: 0.95rem;
  color: #4b5563;
}

.skill-category strong {
  color: #1f2937;
}

.experience-item {
  margin-bottom: 1.5rem;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.experience-header h3 {
  font-size: 1.1rem;
  color: #1f2937;
  margin: 0;
}

.duration {
  font-size: 0.9rem;
  color: #6b7280;
  font-weight: 600;
}

.company {
  color: #3b82f6;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.description {
  color: #4b5563;
  font-size: 0.95rem;
}

.certificates-list {
  display: grid;
  gap: 0.75rem;
}

.certificate-item {
  font-size: 0.95rem;
  color: #4b5563;
}

.certificate-item strong {
  color: #1f2937;
}

/* 下载统计 */
.download-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.stats-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #3b82f6;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: #6b7280;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .resume-download {
    margin: 2rem 0;
    padding: 2rem;
  }
  
  .download-options {
    grid-template-columns: 1fr;
  }
  
  .card-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .download-stats {
    flex-direction: column;
    gap: 2rem;
  }
  
  .preview-toolbar {
    flex-direction: column;
    gap: 1rem;
  }
  
  .toolbar-right {
    width: 100%;
    justify-content: center;
  }
  
  .resume-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .contact-info {
    align-items: center;
  }
}

/* 打印样式 */
@media print {
  .resume-download {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
  }
  
  .download-header,
  .download-options,
  .preview-toolbar,
  .download-stats {
    display: none;
  }
  
  .preview-content {
    height: auto;
    padding: 0;
  }
  
  .resume-page {
    box-shadow: none;
    padding: 1rem;
  }
}
</style>