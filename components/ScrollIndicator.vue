<template>
  <div 
    ref="indicator" 
    class="scroll-indicator"
    :class="{ visible: isVisible }"
  >
    <svg class="indicator-svg" viewBox="0 0 100 100">
      <circle
        class="indicator-track"
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="rgba(59, 130, 246, 0.2)"
        stroke-width="2"
      />
      <circle
        ref="progressCircle"
        class="indicator-progress"
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="url(#progressGradient)"
        stroke-width="3"
        stroke-linecap="round"
        :style="{ strokeDasharray: circumference, strokeDashoffset: offset }"
      />
      <defs>
        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#60a5fa;stop-opacity:1" />
        </linearGradient>
      </defs>
    </svg>
    
    <div class="indicator-content">
      <div class="indicator-percentage">{{ Math.round(scrollPercentage) }}%</div>
      <div class="indicator-dots">
        <div 
          v-for="i in 3" 
          :key="i"
          class="dot"
          :style="{ animationDelay: `${i * 0.2}s` }"
        ></div>
      </div>
    </div>
    
    <button 
      @click="scrollToTop" 
      class="scroll-top-btn"
      :class="{ active: scrollPercentage > 20 }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
const indicator = ref(null)
const progressCircle = ref(null)
const scrollPercentage = ref(0)
const isVisible = ref(false)

const circumference = 2 * Math.PI * 45
const offset = computed(() => circumference - (scrollPercentage.value / 100) * circumference)

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  
  scrollPercentage.value = Math.min((scrollTop / scrollHeight) * 100, 100)
  isVisible.value = scrollTop > 300
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.scroll-indicator {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  z-index: 999;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.scroll-indicator.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.indicator-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.indicator-progress {
  transition: stroke-dashoffset 0.3s ease;
  filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.4));
}

.indicator-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.indicator-percentage {
  font-size: 0.75rem;
  font-weight: 600;
  color: #3b82f6;
  line-height: 1;
  margin-bottom: 2px;
}

.indicator-dots {
  display: flex;
  gap: 2px;
}

.dot {
  width: 3px;
  height: 3px;
  background: #3b82f6;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.scroll-top-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32px;
  height: 32px;
  background: rgba(59, 130, 246, 0.1);
  border: none;
  border-radius: 50%;
  color: #3b82f6;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.scroll-top-btn.active {
  opacity: 1;
}

.scroll-top-btn:hover {
  background: rgba(59, 130, 246, 0.2);
  transform: translate(-50%, -50%) scale(1.1);
}

@media (max-width: 768px) {
  .scroll-indicator {
    bottom: 1rem;
    right: 1rem;
    width: 50px;
    height: 50px;
  }
  
  .indicator-percentage {
    font-size: 0.6rem;
  }
  
  .scroll-top-btn {
    width: 28px;
    height: 28px;
  }
}
</style>