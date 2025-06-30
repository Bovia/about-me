<template>
  <div class="profile-page">
    <div class="page-header">
      <h1 class="section-title">个人简历</h1>
      <div class="decoration-dots"></div>
      <div class="decoration-circle"></div>
    </div>
    
    <div v-if="pending" class="loading">
      <p>加载中...</p>
      <div class="loading-animation">
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
      </div>
    </div>
    
    <div v-else-if="error" class="error">
      <p>加载失败: {{ error.message }}</p>
    </div>
    
    <div v-else class="profile-content">
      <div class="profile-header">
        <div class="profile-avatar-container">
          <div class="profile-avatar">
            <img :src="profile.avatar" alt="用户头像" />
          </div>
          <div class="avatar-decoration"></div>
        </div>
        <div class="profile-info">
          <h2>{{ profile.name }}</h2>
          <p class="profile-title">{{ profile.title }}</p>
          <div class="profile-basic-info">
            <p>{{ profile.age }} | {{ profile.gender }} | {{ profile.status }}</p>
            <p>{{ profile.workYears }} | {{ profile.education }}</p>
          </div>
          <div class="profile-contact">
            <p class="profile-location">
              <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></span>
              {{ profile.location }}
            </p>
            <p class="profile-phone">
              <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
              <a :href="`tel:${profile.phone}`">{{ profile.phone }}</a> （微信同号）
            </p>
            <p class="profile-email">
              <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
              <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
            </p>
          </div>
          <div class="profile-social">
            <a :href="profile.github" target="_blank" class="social-link">
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </span>
              GitHub
            </a>
            <a :href="profile.linkedin" target="_blank" class="social-link">
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <div class="profile-about animate-section">
        <h3>个人概述</h3>
        <p>{{ profile.about }}</p>
      </div>
      
      <div class="profile-skills animate-section">
        <h3 class="section-header">
          <span class="section-icon">🔧</span>
          专业技能
        </h3>
        <div class="skills-list">
          <span v-for="(skill, index) in profile.skills" :key="skill" 
                class="skill-tag" 
                :style="{animationDelay: `${index * 0.05}s`}">
            {{ skill }}
          </span>
        </div>
      </div>
      
      <div class="profile-experience animate-section">
        <h3 class="section-header">
          <span class="section-icon">💼</span>
          工作经历
        </h3>
        <div class="timeline">
          <div v-for="(job, index) in profile.experience" :key="job.company" 
               class="timeline-item"
               :style="{animationDelay: `${index * 0.1}s`}">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h4>{{ job.title }}</h4>
              <div class="timeline-company">{{ job.company }}</div>
              <p class="timeline-period">{{ job.period }}</p>
              <p class="timeline-description">{{ job.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="profile-projects animate-section">
        <h3 class="section-header">
          <span class="section-icon">🚀</span>
          项目经验
        </h3>
        <div class="projects-grid">
          <div v-for="(project, index) in profile.projects" 
               :key="project.name" 
               class="project-item"
               :style="{animationDelay: `${index * 0.1}s`}">
            <h4>{{ project.name }}</h4>
            <p class="project-company">所属公司: {{ project.company }}</p>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">
              <p class="tech-title">技术栈:</p>
              <div class="tech-list">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag mini">{{ tech }}</span>
              </div>
            </div>
            <div class="project-details">
              <p class="project-role"><strong>个人职责:</strong> {{ project.role }}</p>
              <p v-if="project.challenge" class="project-challenge"><strong>技术难点:</strong> {{ project.challenge }}</p>
              <p v-if="project.achievement" class="project-achievement"><strong>成就:</strong> {{ project.achievement }}</p>
            </div>
            <a v-if="project.link" :href="project.link" target="_blank" class="project-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              查看项目
            </a>
          </div>
        </div>
      </div>
      
      <div class="profile-education animate-section">
        <h3 class="section-header">
          <span class="section-icon">🎓</span>
          教育背景
        </h3>
        <div class="education-container">
          <div v-for="(edu, index) in profile.education" 
               :key="edu.school" 
               class="education-item"
               :style="{animationDelay: `${index * 0.1}s`}">
            <div class="education-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <div class="education-content">
              <h4>{{ edu.degree }}</h4>
              <p v-if="edu.school" class="education-school">{{ edu.school }}</p>
              <p v-if="edu.period" class="education-period">{{ edu.period }}</p>
              <p class="education-description">{{ edu.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="profile-languages">
        <h3>语言能力</h3>
        <div class="languages-list">
          <div v-for="lang in profile.languages" :key="lang.name" class="language-item">
            <span class="language-name">{{ lang.name }}</span>
            <span class="language-level">{{ lang.level }}</span>
          </div>
        </div>
      </div>
      
      <div class="profile-interests">
        <h3>兴趣爱好</h3>
        <div class="interests-list">
          <span v-for="interest in profile.interests" :key="interest" class="interest-tag">
            {{ interest }}
          </span>
        </div>
      </div>
      
      <div class="profile-bottom animate-section">
        <div class="profile-languages">
          <h3 class="section-header small">
            <span class="section-icon">🗣️</span>
            语言能力
          </h3>
          <div class="languages-list">
            <div v-for="lang in profile.languages" 
                 :key="lang.name" 
                 class="language-item">
              <span class="language-name">{{ lang.name }}</span>
              <span class="language-level">{{ lang.level }}</span>
            </div>
          </div>
        </div>
        
        <div class="profile-interests">
          <h3 class="section-header small">
            <span class="section-icon">❤️</span>
            兴趣爱好
          </h3>
          <div class="interests-list">
            <span v-for="interest in profile.interests" 
                  :key="interest" 
                  class="interest-tag">
              {{ interest }}
            </span>
          </div>
        </div>
      </div>
      
      <div class="profile-download animate-section">
        <a href="/Web前端开发 6年 詹丹丹Bovia简历.pdf" target="_blank" class="download-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          下载完整简历
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// 服务端数据获取
const { data: profile, pending, error } = await useFetch('/api/profile')

// 页面元数据
useHead({
  title: '个人简历 - 詹丹丹',
  meta: [
    { name: 'description', content: '詹丹丹的个人简历，前端开发工程师，6年工作经验' }
  ]
})

// 页面加载后的动画
onMounted(() => {
  const sections = document.querySelectorAll('.animate-section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    observer.observe(section);
  });
})
</script>

<style scoped>
.profile-page {
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 5rem;
  position: relative;
}

.page-header {
  margin-bottom: 3rem;
  position: relative;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2d3748;
  position: relative;
  font-weight: 800;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  border-radius: 2px;
}

.decoration-dots {
  position: absolute;
  top: -30px;
  right: 10%;
  width: 100px;
  height: 100px;
  background-image: radial-gradient(#3b82f6 2px, transparent 2px);
  background-size: 15px 15px;
  z-index: -1;
}

.decoration-circle {
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(96, 165, 250, 0.05));
  top: -100px;
  left: -100px;
  z-index: -1;
}

.loading, .error {
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  animation: fadeIn 0.5s ease-out;
}

.loading-animation {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 1rem;
}

.loading-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #3b82f6;
  animation: bounce 1.4s infinite ease-in-out both;
}

.loading-dot:nth-child(1) {
  animation-delay: -0.32s;
}

.loading-dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  } 
  40% {
    transform: scale(1);
  }
}

.error {
  color: #e53e3e;
}

.profile-content {
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 2.5rem;
  animation: fadeIn 0.5s ease-out;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
}

.profile-avatar-container {
  position: relative;
  margin-bottom: 1.5rem;
}

.avatar-decoration {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid #3b82f6;
  border-radius: 50%;
  z-index: 0;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.4;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
}

@media (min-width: 640px) {
  .profile-header {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
  }
  
  .profile-avatar-container {
    margin-right: 2.5rem;
    margin-bottom: 0;
  }
}

.profile-avatar {
  position: relative;
  z-index: 1;
}

.profile-avatar img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2);
  transition: transform 0.3s ease;
}

.profile-avatar img:hover {
  transform: scale(1.05);
}

.profile-info h2 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  color: #2d3748;
  font-weight: 700;
}

.profile-title {
  color: #3b82f6;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.profile-basic-info {
  margin-bottom: 1.5rem;
  color: #4a5568;
  font-size: 1rem;
}

.profile-contact {
  margin-bottom: 1.5rem;
}

.profile-location, .profile-email, .profile-phone {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  color: #4a5568;
  font-size: 1rem;
}

.profile-location .icon, .profile-email .icon, .profile-phone .icon {
  color: #3b82f6;
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
}

.profile-phone a, .profile-email a {
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.2s ease;
}

.profile-phone a:hover, .profile-email a:hover {
  color: #2563eb;
  text-decoration: underline;
}

.profile-social {
  display: flex;
  gap: 1.5rem;
  margin-top: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  color: #3b82f6;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  background-color: rgba(59, 130, 246, 0.1);
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.social-link:hover {
  background-color: #3b82f6;
  color: white;
  transform: translateY(-2px);
}

.social-link .icon {
  margin-right: 0.5rem;
}

.animate-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animate-section.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.profile-about, .profile-skills, .profile-experience, .profile-projects, 
.profile-education, .profile-languages, .profile-interests {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e2e8f0;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  position: relative;
  font-size: 1.5rem;
  color: #2d3748;
  font-weight: 600;
}

.section-header::after {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  border-radius: 2px;
}

.section-icon {
  font-size: 1.5rem;
  margin-right: 0.75rem;
}

/* 技能标签样式 */
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  background-color: #ebf5ff;
  color: #3b82f6;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  animation: fadeInScale 0.5s forwards;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
  display: inline-block;
}

.skill-tag:hover {
  background-color: #3b82f6;
  color: white;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
}

@keyframes fadeInScale {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* 时间线样式 */
.timeline {
  position: relative;
  padding-left: 2rem;
  margin: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  height: 100%;
  width: 2px;
  background: linear-gradient(to bottom, #3b82f6 0%, #60a5fa 100%);
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: slideRight 0.5s forwards;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -2rem;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
  z-index: 1;
}

.timeline-content {
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.timeline-content h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #2d3748;
  font-size: 1.2rem;
  font-weight: 600;
}

.timeline-company {
  color: #3b82f6;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.timeline-period {
  color: #718096;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
  font-style: italic;
}

.timeline-description {
  color: #4a5568;
  margin: 0;
  line-height: 1.6;
  font-size: 0.95rem;
}

@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 项目部分 */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.project-item {
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s forwards;
}

.project-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.project-item h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #2d3748;
  font-size: 1.2rem;
  font-weight: 600;
}

.project-company {
  color: #3b82f6;
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.project-description {
  color: #4a5568;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
}

.tech-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-size: 0.95rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag.mini {
  padding: 0.3rem 0.75rem;
  font-size: 0.75rem;
}

.project-details {
  padding: 1rem;
  background-color: #f8fafc;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.5;
}

.project-role, .project-challenge, .project-achievement {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

.project-role:last-child, .project-challenge:last-child, .project-achievement:last-child {
  margin-bottom: 0;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: rgba(59, 130, 246, 0.1);
  border-radius: 0.5rem;
}

.project-link:hover {
  background-color: #3b82f6;
  color: white;
  transform: translateY(-2px);
}

/* 教育背景部分 */
.education-container {
  margin-top: 2rem;
}

.education-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeInUp 0.6s forwards;
}

.education-item:last-child {
  margin-bottom: 0;
}

.education-icon {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  background-color: #ebf5ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
}

.education-content {
  flex: 1;
}

.education-content h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #2d3748;
  font-size: 1.2rem;
}

.education-school {
  color: #3b82f6;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.education-period {
  color: #718096;
  font-size: 0.9rem;
  font-style: italic;
  margin-bottom: 0.5rem;
}

.education-description {
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
}

/* 底部区域 */
.profile-bottom {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  border-bottom: none;
}

@media (min-width: 768px) {
  .profile-bottom {
    grid-template-columns: 1fr 1fr;
  }
}

.section-header.small {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

/* 语言部分 */
.languages-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.language-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.language-item:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.language-name {
  font-weight: 600;
  color: #2d3748;
}

.language-level {
  color: #3b82f6;
  font-weight: 500;
}

/* 兴趣部分 */
.interests-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.interest-tag {
  padding: 0.5rem 1rem;
  background-color: #ebf5ff;
  color: #3b82f6;
  border-radius: 2rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.interest-tag:hover {
  background-color: #3b82f6;
  color: white;
  transform: scale(1.05);
}

/* 下载按钮 */
.profile-download {
  text-align: center;
  margin-top: 3rem;
}

.download-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #3b82f6;
  color: white;
  padding: 1rem 2rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
}

.download-button:hover {
  background-color: #2563eb;
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(59, 130, 246, 0.4);
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
</style> 