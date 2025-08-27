<template>
  <Teleport to="body">
    <div 
      v-if="isOpen" 
      class="modal-overlay"
      @click="closeModal"
    >
      <div 
        class="modal-content"
        @click.stop
        :class="{ 'modal-enter': isEntering }"
      >
        <!-- 关闭按钮 -->
        <button @click="closeModal" class="close-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- 证书内容 -->
        <div v-if="certificate" class="certificate-display">
          <!-- 证书头部 -->
          <div class="certificate-header">
            <div class="certificate-badge-large">
              <div class="badge-icon-large" v-html="certificate.icon"></div>
              <div class="badge-shine"></div>
            </div>
            <h2 class="certificate-title">{{ certificate.name }}</h2>
            <p class="certificate-issuer-large">{{ certificate.issuer }}</p>
          </div>

          <!-- 证书详情 -->
          <div class="certificate-details">
            <div class="detail-grid">
              <div class="detail-item">
                <div class="detail-label">获得时间</div>
                <div class="detail-value">{{ certificate.date }}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">证书类型</div>
                <div class="detail-value">{{ getCategoryName(certificate.category) }}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">有效期</div>
                <div class="detail-value">{{ certificate.validity || '长期有效' }}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">证书编号</div>
                <div class="detail-value">{{ certificate.certNumber || '请联系查询' }}</div>
              </div>
            </div>

            <div class="description-section">
              <h3>证书描述</h3>
              <p>{{ certificate.description }}</p>
              
              <h3>技能领域</h3>
              <div class="skills-tags">
                <span 
                  v-for="tag in certificate.tags" 
                  :key="tag" 
                  class="skill-tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- 证书价值 -->
            <div class="value-section">
              <h3>证书价值</h3>
              <div class="value-points">
                <div 
                  v-for="point in getCertificateValue(certificate.category)" 
                  :key="point"
                  class="value-point"
                >
                  <div class="point-icon">✓</div>
                  <div class="point-text">{{ point }}</div>
                </div>
              </div>
            </div>

            <!-- 操作按钮 -->
            <div class="modal-actions">
              <a 
                v-if="certificate.verifyUrl" 
                :href="certificate.verifyUrl" 
                target="_blank" 
                class="action-btn primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                验证证书真伪
              </a>
              <button @click="downloadCertificate" class="action-btn secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                下载证书
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  certificate: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

const isEntering = ref(false)

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    isEntering.value = true
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})

function closeModal() {
  emit('close')
}

function getCategoryName(category) {
  const categories = {
    finance: '金融证券',
    management: '项目管理',
    technology: '技术认证'
  }
  return categories[category] || '专业认证'
}

function getCertificateValue(category) {
  const values = {
    finance: [
      '具备证券从业基础资格',
      '了解金融市场运作机制',
      '掌握投资理财基本知识',
      '符合金融行业准入要求'
    ],
    management: [
      '掌握国际项目管理标准',
      '具备团队领导和协调能力',
      '熟练运用项目管理工具',
      '提升项目成功率和效率'
    ],
    technology: [
      '熟悉云计算基础概念',
      '掌握云服务部署和运维',
      '了解云安全最佳实践',
      '具备云架构设计能力'
    ]
  }
  return values[category] || ['专业技能认证', '行业标准掌握', '实践能力验证']
}

function downloadCertificate() {
  // 这里可以实现证书下载功能
  console.log('下载证书:', props.certificate?.name)
}

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 2rem;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  transform: scale(0.9) translateY(20px);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.modal-content.modal-enter {
  transform: scale(1) translateY(0);
  opacity: 1;
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.close-btn:hover {
  background: rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
}

.certificate-display {
  padding: 3rem;
}

/* 证书头部 */
.certificate-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.certificate-badge-large {
  width: 120px;
  height: 120px;
  margin: 0 auto 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05));
  border-radius: 50%;
  border: 3px solid rgba(16, 185, 129, 0.2);
}

.badge-icon-large {
  color: #10b981;
  transform: scale(1.5);
  position: relative;
  z-index: 2;
}

.badge-shine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  border-radius: 50%;
  animation: shine 3s ease-in-out infinite;
}

@keyframes shine {
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
}

.certificate-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.certificate-issuer-large {
  font-size: 1.5rem;
  color: #10b981;
  font-weight: 600;
}

/* 证书详情 */
.certificate-details {
  margin-top: 2rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.detail-item {
  background: rgba(16, 185, 129, 0.05);
  padding: 1.5rem;
  border-radius: 1rem;
  border-left: 4px solid #10b981;
}

.detail-label {
  font-size: 0.9rem;
  color: #6b7280;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-value {
  font-size: 1.1rem;
  color: #1f2937;
  font-weight: 700;
}

.description-section {
  margin-bottom: 3rem;
}

.description-section h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.description-section h3::before {
  content: '';
  width: 4px;
  height: 1.5rem;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 2px;
}

.description-section p {
  font-size: 1.1rem;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.skill-tag {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
}

/* 证书价值 */
.value-section {
  margin-bottom: 3rem;
}

.value-points {
  display: grid;
  gap: 1rem;
}

.value-point {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(16, 185, 129, 0.05);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.value-point:hover {
  background: rgba(16, 185, 129, 0.1);
  transform: translateX(5px);
}

.point-icon {
  width: 24px;
  height: 24px;
  background: #10b981;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.point-text {
  font-size: 1rem;
  color: #1f2937;
  font-weight: 500;
}

/* 操作按钮 */
.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(16, 185, 129, 0.2);
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.action-btn.primary {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
}

.action-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
}

.action-btn.secondary {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border: 2px solid rgba(16, 185, 129, 0.3);
}

.action-btn.secondary:hover {
  background: rgba(16, 185, 129, 0.2);
  transform: translateY(-2px);
}

/* 动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .modal-content {
    margin: 1rem;
    border-radius: 1.5rem;
  }
  
  .certificate-display {
    padding: 2rem;
  }
  
  .certificate-title {
    font-size: 2rem;
  }
  
  .certificate-issuer-large {
    font-size: 1.2rem;
  }
  
  .detail-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .modal-actions {
    flex-direction: column;
  }
  
  .action-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>