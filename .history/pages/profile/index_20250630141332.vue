<template>
  <div class="profile-page">
    <h1>个人简介</h1>
    
    <div v-if="pending" class="loading">
      <p>加载中...</p>
    </div>
    
    <div v-else-if="error" class="error">
      <p>加载失败: {{ error.message }}</p>
    </div>
    
    <div v-else class="profile-content">
      <div class="profile-header">
        <div class="profile-avatar">
          <img :src="profile.avatar" alt="用户头像" />
        </div>
        <div class="profile-info">
          <h2>{{ profile.name }}</h2>
          <p class="profile-title">{{ profile.title }}</p>
          <p class="profile-location">
            <span class="icon">📍</span> {{ profile.location }}
          </p>
          <p class="profile-email">
            <span class="icon">✉️</span> {{ profile.email }}
          </p>
          <div class="profile-social">
            <a :href="profile.github" target="_blank" class="social-link">
              <span class="icon">🔗</span> GitHub
            </a>
            <a :href="profile.linkedin" target="_blank" class="social-link">
              <span class="icon">🔗</span> LinkedIn
            </a>
          </div>
          <div class="profile-stats">
            <div class="stat">
              <span class="stat-value">{{ profile.followers }}</span>
              <span class="stat-label">关注者</span>
            </div>
            <div class="stat">
              <span class="stat-value">{{ profile.following }}</span>
              <span class="stat-label">关注中</span>
            </div>
            <div class="stat">
              <span class="stat-value">{{ profile.posts }}</span>
              <span class="stat-label">文章</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="profile-about">
        <h3>关于我</h3>
        <p>{{ profile.about }}</p>
      </div>
      
      <div class="profile-skills">
        <h3>技能</h3>
        <div class="skills-list">
          <span v-for="skill in profile.skills" :key="skill" class="skill-tag">
            {{ skill }}
          </span>
        </div>
      </div>
      
      <div class="profile-experience">
        <h3>工作经历</h3>
        <div v-for="job in profile.experience" :key="job.company" class="experience-item">
          <h4>{{ job.title }} @ {{ job.company }}</h4>
          <p class="experience-period">{{ job.period }}</p>
          <p class="experience-description">{{ job.description }}</p>
        </div>
      </div>
      
      <div class="profile-education">
        <h3>教育背景</h3>
        <div v-for="edu in profile.education" :key="edu.school" class="education-item">
          <h4>{{ edu.degree }} - {{ edu.school }}</h4>
          <p class="education-period">{{ edu.period }}</p>
          <p class="education-description">{{ edu.description }}</p>
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
    </div>
  </div>
</template>

<script setup>
// 服务端数据获取
const { data: profile, pending, error } = await useFetch('/api/profile')

// 页面元数据
useHead({
  title: '个人简介 - 个人网站',
  meta: [
    { name: 'description', content: '我的个人简介、技能和经验' }
  ]
})
</script>

<style scoped>
.profile-page {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2d3748;
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

.profile-content {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  text-align: center;
}

@media (min-width: 640px) {
  .profile-header {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
  }
  
  .profile-avatar {
    margin-right: 2rem;
    margin-bottom: 0;
  }
}

.profile-avatar {
  margin-bottom: 1rem;
}

.profile-avatar img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #3182ce;
}

.profile-info h2 {
  margin-top: 0;
  margin-bottom: 0.25rem;
  font-size: 1.8rem;
  color: #2d3748;
}

.profile-title {
  color: #4a5568;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.profile-location, .profile-email {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #4a5568;
}

.profile-social {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  color: #3182ce;
  text-decoration: none;
}

.social-link:hover {
  text-decoration: underline;
}

.icon {
  margin-right: 0.5rem;
}

.profile-stats {
  display: flex;
  margin-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
  padding-top: 1rem;
}

.stat {
  flex: 1;
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #3182ce;
}

.stat-label {
  font-size: 0.875rem;
  color: #4a5568;
}

.profile-about, .profile-skills, .profile-experience, .profile-education, .profile-languages, .profile-interests {
  margin-bottom: 2rem;
}

.profile-about h3, .profile-skills h3, .profile-experience h3, .profile-education h3, .profile-languages h3, .profile-interests h3 {
  color: #3182ce;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.skills-list, .interests-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag, .interest-tag {
  background-color: #ebf4ff;
  color: #3182ce;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
}

.experience-item, .education-item {
  margin-bottom: 1.5rem;
}

.experience-item h4, .education-item h4 {
  margin-top: 0;
  margin-bottom: 0.25rem;
  color: #2d3748;
}

.experience-period, .education-period {
  color: #718096;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.experience-description, .education-description {
  color: #4a5568;
  line-height: 1.5;
}

.languages-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.language-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.language-name {
  font-weight: bold;
  color: #2d3748;
}

.language-level {
  color: #4a5568;
}
</style> 