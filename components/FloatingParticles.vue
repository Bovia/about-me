<template>
  <div ref="container" class="floating-particles"></div>
</template>

<script setup>
import * as d3 from 'd3'

const container = ref(null)
let svg, particles, simulation

const props = defineProps({
  particleCount: {
    type: Number,
    default: 30
  },
  particleSize: {
    type: Number,
    default: 2
  },
  opacity: {
    type: Number,
    default: 0.3
  },
  color: {
    type: String,
    default: '#3b82f6'
  }
})

onMounted(() => {
  initParticles()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (simulation) {
    simulation.stop()
  }
  window.removeEventListener('resize', handleResize)
})

function initParticles() {
  const width = container.value.clientWidth
  const height = container.value.clientHeight

  // 创建 SVG
  svg = d3.select(container.value)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('position', 'absolute')
    .style('top', 0)
    .style('left', 0)
    .style('pointer-events', 'none')

  // 生成粒子数据
  particles = Array.from({ length: props.particleCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    radius: props.particleSize + Math.random() * props.particleSize
  }))

  // 创建力模拟
  simulation = d3.forceSimulation(particles)
    .force('collision', d3.forceCollide().radius(d => d.radius + 2))
    .force('x', d3.forceX().strength(0.01))
    .force('y', d3.forceY().strength(0.01))
    .on('tick', tick)

  // 创建粒子元素
  const particleElements = svg.selectAll('.particle')
    .data(particles)
    .enter()
    .append('circle')
    .attr('class', 'particle')
    .attr('r', d => d.radius)
    .attr('fill', props.color)
    .attr('opacity', props.opacity)
    .style('filter', 'blur(0.5px)')

  function tick() {
    // 边界检测
    particles.forEach(d => {
      if (d.x < 0 || d.x > width) d.vx *= -1
      if (d.y < 0 || d.y > height) d.vy *= -1
      d.x = Math.max(0, Math.min(width, d.x))
      d.y = Math.max(0, Math.min(height, d.y))
    })

    particleElements
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
  }
}

function handleResize() {
  if (!svg) return
  
  const width = container.value.clientWidth
  const height = container.value.clientHeight
  
  svg.attr('width', width).attr('height', height)
  
  // 重新分布粒子
  particles.forEach(d => {
    d.x = Math.min(d.x, width)
    d.y = Math.min(d.y, height)
  })
}
</script>

<style scoped>
.floating-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}
</style>