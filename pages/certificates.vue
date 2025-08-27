<template>
  <div class="certificates-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <FloatingParticles :particle-count="15" :opacity="0.12" color="#10b981" />
      <h1 class="section-title">专业证书</h1>
      <p class="description">
        持续学习，不断提升专业能力。以下是我获得的各项专业认证，体现了跨领域的复合型技能。
      </p>
      <div class="stats-overview">
        <div class="stat-item">
          <div class="stat-number">{{ certificates.length }}</div>
          <div class="stat-label">已获证书</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ plannedCertificates.length }}</div>
          <div class="stat-label">规划中</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">3</div>
          <div class="stat-label">专业领域</div>
        </div>
      </div>
    </div>

    <!-- 已获得证书 -->
    <section class="certificates-section">
      <h2 class="section-subtitle">
        <span class="subtitle-icon">🏆</span>
        已获得证书
      </h2>
      
      <div class="certificates-grid">
        <div 
          v-for="(cert, index) in certificates" 
          :key="cert.id"
          class="certificate-card"
          :class="`category-${cert.category}`"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="certificate-inner">
            <!-- 证书图标/徽章 -->
            <div class="certificate-badge">
              <div class="badge-icon" v-html="cert.icon"></div>
              <div class="badge-glow"></div>
            </div>
            
            <!-- 证书信息 -->
            <div class="certificate-info">
              <h3 class="certificate-name">{{ cert.name }}</h3>
              <p class="certificate-issuer">{{ cert.issuer }}</p>
              <p class="certificate-date">获得时间：{{ cert.date }}</p>
              <p class="certificate-description">{{ cert.description }}</p>
              
              <!-- 证书标签 -->
              <div class="certificate-tags">
                <span 
                  v-for="tag in cert.tags" 
                  :key="tag" 
                  class="cert-tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            
            <!-- 验证链接 -->
            <div class="certificate-actions">
              <a 
                v-if="cert.verifyUrl" 
                :href="cert.verifyUrl" 
                target="_blank" 
                class="verify-btn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                验证证书
              </a>
              <button 
                @click="viewCertificate(cert)" 
                class="view-btn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                查看详情
              </button>
            </div>
            
            <!-- 3D效果装饰 -->
            <div class="certificate-decoration">
              <div class="decoration-element"></div>
              <div class="decoration-element"></div>
              <div class="decoration-element"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 规划中的证书 -->
    <section class="planned-section">
      <h2 class="section-subtitle">
        <span class="subtitle-icon">🎯</span>
        规划中的证书
      </h2>
      
      <div class="planned-grid">
        <div 
          v-for="(cert, index) in plannedCertificates" 
          :key="cert.id"
          class="planned-card"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div class="planned-inner">
            <div class="planned-badge">
              <div class="badge-icon" v-html="cert.icon"></div>
              <div class="progress-ring">
                <svg class="ring-svg" viewBox="0 0 36 36">
                  <path
                    class="ring-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="rgba(16, 185, 129, 0.2)"
                    stroke-width="2"
                  />
                  <path
                    class="ring-progress"
                    :stroke-dasharray="`${cert.progress}, 100`"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#10b981"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <div class="progress-text">{{ cert.progress }}%</div>
              </div>
            </div>
            
            <div class="planned-info">
              <h3 class="planned-name">{{ cert.name }}</h3>
              <p class="planned-issuer">{{ cert.issuer }}</p>
              <p class="planned-target">预计获得：{{ cert.targetDate }}</p>
              <p class="planned-status">{{ cert.status }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 证书价值说明 -->
    <section class="value-section">
      <AnimationShowcase />
    </section>

    <!-- 证书详情模态框 -->
    <CertificateModal 
      :is-open="isModalOpen"
      :certificate="selectedCertificate"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
// 页面数据
const certificates = ref([
  {
    id: 1,
    name: '证券从业资格证',
    issuer: '中国证券业协会',
    date: '2025年8月',
    category: 'finance',
    description: '证券市场基础知识和证券交易的专业资格认证，具备证券从业的基本条件。通过考试证明了对证券市场法律法规、基本业务、职业道德等方面的掌握。',
    tags: ['金融', '证券', '投资', '合规'],
    validity: '长期有效',
    certNumber: 'SAC***********',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    verifyUrl: 'https://person.sac.net.cn/pages/registration/train-quiz!queryTrainQuizInfo.action'
  },
  {
    id: 2,
    name: 'PMP项目管理专业人士认证',
    issuer: 'PMI (Project Management Institute)',
    date: '2024年11月',
    category: 'management',
    description: '全球权威的项目管理专业认证，证明具备领导和指导项目团队的知识和技能。掌握了项目管理五大过程组和十大知识领域，能够有效管理复杂项目。',
    tags: ['项目管理', '团队协作', '敏捷开发', 'PMBOK'],
    validity: '3年（需要PDU维护）',
    certNumber: 'PMP***********',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14,2 14,8 20,8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10,9 9,9 8,9"></polyline></svg>`,
    verifyUrl: 'https://www.pmi.org/certifications/certification-resources/registry'
  },
  {
    id: 3,
    name: '腾讯云从业者认证',
    issuer: '腾讯云',
    date: '2022年',
    category: 'technology',
    description: '腾讯云平台的基础服务和解决方案认证，具备云计算基础知识和实践能力。涵盖云服务器、数据库、存储、网络等核心产品的使用和最佳实践。',
    tags: ['云计算', '腾讯云', '基础架构', 'DevOps'],
    validity: '2年',
    certNumber: 'TCP***********',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
    verifyUrl: 'https://cloud.tencent.com/edu/cert/verify'
  }
])

const plannedCertificates = ref([
  {
    id: 4,
    name: '投资顾问资格证',
    issuer: '中国证券业协会',
    targetDate: '2025年Q4',
    category: 'finance',
    status: '准备中',
    progress: 35,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"></path><path d="M7 12l4-4 4 4 6-6"></path></svg>`
  },
  {
    id: 5,
    name: '高级项目管理师',
    issuer: '工信部',
    targetDate: '2026年Q2',
    category: 'management',
    status: '资料收集中',
    progress: 20,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9 17 14.74 18.18 21.02 12 17.77 5.82 21.02 7 14.74 2 9 8.91 8.26 12 2"></polygon></svg>`
  }
])

const selectedCertificate = ref(null)
const isModalOpen = ref(false)

function viewCertificate(cert) {
  selectedCertificate.value = cert
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
  selectedCertificate.value = null
}

// 页面元数据
useHead({
  title: '专业证书 - 詹丹丹',
  meta: [
    { name: 'description', content: '詹丹丹的专业证书展示，包含金融、项目管理、技术认证等多个领域的资质证明' }
  ]
})
</script>

<style scoped>
.certificates-page {
  max-width: 1300px;
  margin: 0 auto;
  padding-bottom: 5rem;
}

/* 页面头部 */
.page-header {
  position: relative;
  text-align: center;
  margin-bottom: 5rem;
  padding: 3rem 0;
  overflow: hidden;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
}

.description {
  font-size: 1.2rem;
  color: #6b7280;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.7;
  position: relative;
  z-index: 2;
}

.stats-overview {
  display: flex;
  justify-content: center;
  gap: 4rem;
  position: relative;
  z-index: 2;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #10b981;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: #6b7280;
  font-weight: 500;
}

/* 证书部分 */
.certificates-section, .planned-section {
  margin-bottom: 5rem;
}

.section-subtitle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 3rem;
  text-align: center;
}

.subtitle-icon {
  font-size: 2rem;
}

/* 证书网格 */
.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
}

.certificate-card {
  opacity: 0;
  animation: slideInUp 0.8s forwards;
  perspective: 1000px;
}

.certificate-inner {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1.5rem;
  padding: 2.5rem;
  position: relative;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  transform-style: preserve-3d;
}

.certificate-card:hover .certificate-inner {
  transform: translateY(-10px) rotateX(5deg);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}

/* 证书徽章 */
.certificate-badge {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-icon {
  color: #10b981;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.certificate-card:hover .badge-icon {
  transform: scale(1.1) rotateY(10deg);
}

.badge-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.2), transparent);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.certificate-card:hover .badge-glow {
  opacity: 1;
}

/* 证书信息 */
.certificate-info {
  text-align: center;
  margin-bottom: 2rem;
}

.certificate-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.certificate-issuer {
  font-size: 1.1rem;
  color: #10b981;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.certificate-date {
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.certificate-description {
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* 证书标签 */
.certificate-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.cert-tag {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.cert-tag:hover {
  background: #10b981;
  color: white;
  transform: translateY(-2px);
}

/* 证书操作按钮 */
.certificate-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.verify-btn, .view-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
}

.verify-btn {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
}

.verify-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
}

.view-btn {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.view-btn:hover {
  background: rgba(16, 185, 129, 0.2);
  transform: translateY(-2px);
}

/* 3D装饰元素 */
.certificate-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.decoration-element {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.05), transparent);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.decoration-element:nth-child(1) {
  top: -50px;
  right: -50px;
  animation: float 6s ease-in-out infinite;
}

.decoration-element:nth-child(2) {
  bottom: -50px;
  left: -50px;
  animation: float 8s ease-in-out infinite reverse;
}

.decoration-element:nth-child(3) {
  top: 50%;
  right: -50px;
  animation: float 7s ease-in-out infinite;
}

.certificate-card:hover .decoration-element {
  opacity: 1;
}

/* 规划中的证书 */
.planned-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.planned-card {
  opacity: 0;
  animation: fadeInUp 0.8s forwards;
}

.planned-inner {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.02));
  border: 2px dashed rgba(16, 185, 129, 0.3);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.planned-card:hover .planned-inner {
  transform: translateY(-5px);
  border-color: rgba(16, 185, 129, 0.5);
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05));
}

.planned-badge {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-ring {
  position: absolute;
  width: 80px;
  height: 80px;
}

.ring-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8rem;
  font-weight: 600;
  color: #10b981;
}

.planned-info h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.planned-issuer {
  color: #10b981;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.planned-target, .planned-status {
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

/* 分类样式 */
.category-finance .certificate-inner {
  border-left: 4px solid #f59e0b;
}

.category-management .certificate-inner {
  border-left: 4px solid #8b5cf6;
}

.category-technology .certificate-inner {
  border-left: 4px solid #06b6d4;
}

/* 动画 */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .certificates-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .planned-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-overview {
    gap: 2rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .certificate-actions {
    flex-direction: column;
  }
}
</style>