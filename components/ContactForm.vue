<template>
  <div class="contact-form">
    <div class="form-header">
      <h2 class="section-title">
        <span class="title-icon">💬</span>
        联系我
      </h2>
      <p class="section-description">
        有项目合作或技术交流想法？欢迎通过以下方式联系我，我会尽快回复您。
      </p>
    </div>

    <div class="contact-container">
      <!-- 联系信息卡片 -->
      <div class="contact-info-cards">
        <div class="info-card email-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div class="card-content">
            <h3>邮箱联系</h3>
            <p>375006500@qq.com</p>
            <a :href="`mailto:375006500@qq.com`" class="contact-link">发送邮件</a>
          </div>
        </div>

        <div class="info-card phone-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div class="card-content">
            <h3>电话/微信</h3>
            <p>17521300512</p>
            <a :href="`tel:17521300512`" class="contact-link">拨打电话</a>
          </div>
        </div>

        <div class="info-card location-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div class="card-content">
            <h3>工作地点</h3>
            <p>上海，中国</p>
            <span class="contact-link">现场面谈</span>
          </div>
        </div>
      </div>

      <!-- 联系表单 -->
      <div class="form-wrapper">
        <form @submit.prevent="submitForm" class="contact-form-element">
          <div class="form-group">
            <label for="name" class="form-label">
              <span class="label-text">姓名</span>
              <span class="required">*</span>
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="form-input"
              :class="{ error: errors.name }"
              placeholder="请输入您的姓名"
              required
            />
            <div v-if="errors.name" class="error-message">{{ errors.name }}</div>
          </div>

          <div class="form-group">
            <label for="email" class="form-label">
              <span class="label-text">邮箱</span>
              <span class="required">*</span>
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-input"
              :class="{ error: errors.email }"
              placeholder="请输入您的邮箱地址"
              required
            />
            <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
          </div>

          <div class="form-group">
            <label for="company" class="form-label">
              <span class="label-text">公司/组织</span>
            </label>
            <input
              id="company"
              v-model="form.company"
              type="text"
              class="form-input"
              placeholder="请输入您的公司或组织名称（可选）"
            />
          </div>

          <div class="form-group">
            <label for="subject" class="form-label">
              <span class="label-text">主题</span>
              <span class="required">*</span>
            </label>
            <select
              id="subject"
              v-model="form.subject"
              class="form-select"
              :class="{ error: errors.subject }"
              required
            >
              <option value="">请选择联系主题</option>
              <option value="job">工作机会</option>
              <option value="project">项目合作</option>
              <option value="consulting">技术咨询</option>
              <option value="speaking">演讲邀请</option>
              <option value="other">其他</option>
            </select>
            <div v-if="errors.subject" class="error-message">{{ errors.subject }}</div>
          </div>

          <div class="form-group">
            <label for="message" class="form-label">
              <span class="label-text">详细信息</span>
              <span class="required">*</span>
            </label>
            <textarea
              id="message"
              v-model="form.message"
              class="form-textarea"
              :class="{ error: errors.message }"
              placeholder="请详细描述您的需求或想法..."
              rows="6"
              required
            ></textarea>
            <div class="character-count">{{ form.message.length }}/500</div>
            <div v-if="errors.message" class="error-message">{{ errors.message }}</div>
          </div>

          <div class="form-group">
            <label class="checkbox-label">
              <input
                v-model="form.newsletter"
                type="checkbox"
                class="form-checkbox"
              />
              <span class="checkbox-custom"></span>
              <span class="checkbox-text">订阅我的技术博客更新通知</span>
            </label>
          </div>

          <div class="form-actions">
            <button
              type="submit"
              class="submit-btn"
              :class="{ loading: isSubmitting }"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting" class="btn-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
                </svg>
                发送消息
              </span>
              <span v-else class="btn-loading">
                <div class="loading-spinner"></div>
                发送中...
              </span>
            </button>
            
            <button
              type="button"
              @click="resetForm"
              class="reset-btn"
              :disabled="isSubmitting"
            >
              重置表单
            </button>
          </div>
        </form>

        <!-- 成功/错误提示 -->
        <div v-if="submitStatus" class="submit-feedback" :class="submitStatus.type">
          <div class="feedback-icon">
            <svg v-if="submitStatus.type === 'success'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </div>
          <div class="feedback-content">
            <h4>{{ submitStatus.title }}</h4>
            <p>{{ submitStatus.message }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 社交媒体链接 -->
    <div class="social-section">
      <h3>其他联系方式</h3>
      <div class="social-links">
        <a href="https://github.com/Bovia" target="_blank" class="social-link github">
          <div class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <span>GitHub</span>
        </a>
        
        <a href="https://linkedin.com/in/dandanzhan" target="_blank" class="social-link linkedin">
          <div class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </div>
          <span>LinkedIn</span>
        </a>
        
        <a href="/tech-blog" class="social-link blog">
          <div class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
              <polyline points="14,2 14,8 20,8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10,9 9,9 8,9"></polyline>
            </svg>
          </div>
          <span>技术博客</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// 表单数据
const form = reactive({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
  newsletter: false
})

// 错误信息
const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// 表单状态
const isSubmitting = ref(false)
const submitStatus = ref(null)

// 表单验证
function validateForm() {
  // 清空之前的错误
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })

  let isValid = true

  // 验证姓名
  if (!form.name.trim()) {
    errors.name = '请输入您的姓名'
    isValid = false
  } else if (form.name.trim().length < 2) {
    errors.name = '姓名至少需要2个字符'
    isValid = false
  }

  // 验证邮箱
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = '请输入您的邮箱地址'
    isValid = false
  } else if (!emailRegex.test(form.email)) {
    errors.email = '请输入有效的邮箱地址'
    isValid = false
  }

  // 验证主题
  if (!form.subject) {
    errors.subject = '请选择联系主题'
    isValid = false
  }

  // 验证消息
  if (!form.message.trim()) {
    errors.message = '请输入详细信息'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = '详细信息至少需要10个字符'
    isValid = false
  } else if (form.message.length > 500) {
    errors.message = '详细信息不能超过500个字符'
    isValid = false
  }

  return isValid
}

// 提交表单
async function submitForm() {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  submitStatus.value = null

  try {
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // 模拟成功响应
    if (Math.random() > 0.1) { // 90% 成功率
      submitStatus.value = {
        type: 'success',
        title: '消息发送成功！',
        message: '感谢您的联系，我会在24小时内回复您。期待与您的进一步交流！'
      }
      
      // 清空表单
      resetForm()
    } else {
      // 模拟错误响应
      throw new Error('发送失败')
    }
  } catch (error) {
    submitStatus.value = {
      type: 'error',
      title: '发送失败',
      message: '抱歉，消息发送时遇到了问题。请稍后重试或直接发送邮件至 375006500@qq.com'
    }
  } finally {
    isSubmitting.value = false
    
    // 5秒后自动隐藏提示
    setTimeout(() => {
      submitStatus.value = null
    }, 5000)
  }
}

// 重置表单
function resetForm() {
  Object.keys(form).forEach(key => {
    if (typeof form[key] === 'boolean') {
      form[key] = false
    } else {
      form[key] = ''
    }
  })
  
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })
}

// 限制消息长度
watch(() => form.message, (newValue) => {
  if (newValue.length > 500) {
    form.message = newValue.substring(0, 500)
  }
})
</script>

<style scoped>
.contact-form {
  margin: 4rem 0;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(168, 85, 247, 0.02));
  border-radius: 2rem;
  border: 1px solid rgba(168, 85, 247, 0.1);
}

/* 头部样式 */
.form-header {
  text-align: center;
  margin-bottom: 4rem;
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
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* 联系容器 */
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

/* 联系信息卡片 */
.contact-info-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.email-card .card-icon { background: linear-gradient(135deg, #3b82f6, #2563eb); }
.phone-card .card-icon { background: linear-gradient(135deg, #10b981, #059669); }
.location-card .card-icon { background: linear-gradient(135deg, #f59e0b, #d97706); }

.card-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.card-content p {
  color: #4b5563;
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.contact-link {
  color: #a855f7;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #9333ea;
}

/* 表单样式 */
.form-wrapper {
  background: white;
  border-radius: 1.5rem;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  position: relative;
}

.contact-form-element {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-group {
  position: relative;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: #374151;
}

.required {
  color: #ef4444;
  font-size: 1.1rem;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #a855f7;
  background: white;
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

.form-input.error,
.form-select.error,
.form-textarea.error {
  border-color: #ef4444;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.character-count {
  position: absolute;
  bottom: -1.5rem;
  right: 0;
  font-size: 0.8rem;
  color: #9ca3af;
}

.error-message {
  color: #ef4444;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

/* 复选框样式 */
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 0.95rem;
  color: #4b5563;
}

.form-checkbox {
  display: none;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #d1d5db;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
}

.form-checkbox:checked + .checkbox-custom {
  background: #a855f7;
  border-color: #a855f7;
}

.form-checkbox:checked + .checkbox-custom::after {
  content: '✓';
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
}

/* 表单操作按钮 */
.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.submit-btn,
.reset-btn {
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-btn {
  background: linear-gradient(135deg, #a855f7, #9333ea);
  color: white;
  flex: 1;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(168, 85, 247, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.reset-btn {
  background: #f3f4f6;
  color: #6b7280;
  border: 2px solid #e5e7eb;
}

.reset-btn:hover:not(:disabled) {
  background: #e5e7eb;
  color: #374151;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* 提交反馈 */
.submit-feedback {
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 300px;
  z-index: 10;
  animation: slideDown 0.3s ease;
}

.submit-feedback.success {
  border-left: 4px solid #10b981;
}

.submit-feedback.error {
  border-left: 4px solid #ef4444;
}

.feedback-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.success .feedback-icon {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.error .feedback-icon {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.feedback-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.feedback-content p {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* 社交媒体部分 */
.social-section {
  text-align: center;
}

.social-section h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  text-decoration: none;
  color: #4b5563;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.social-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
}

.social-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.github .social-icon { background: #24292e; }
.linkedin .social-icon { background: #0077b5; }
.blog .social-icon { background: #a855f7; }

.social-link span {
  font-weight: 600;
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .contact-info-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .contact-form {
    margin: 2rem 0;
    padding: 2rem;
  }
  
  .form-wrapper {
    padding: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .social-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .social-link {
    flex-direction: row;
    padding: 1rem 2rem;
    width: 100%;
    max-width: 300px;
  }
  
  .submit-feedback {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    margin-top: 2rem;
  }
  
  .contact-info-cards {
    grid-template-columns: 1fr;
  }
  
  .info-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>