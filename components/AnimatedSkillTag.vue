<template>
  <span 
    ref="tagRef"
    class="skill-tag animated-tag"
    @mouseenter="handleHover"
    @mouseleave="handleLeave"
  >
    <slot></slot>
    <svg 
      ref="svgRef" 
      class="tag-animation" 
      width="100%" 
      height="100%"
    ></svg>
  </span>
</template>

<script setup>
import * as d3 from 'd3'

const tagRef = ref(null)
const svgRef = ref(null)
let svg, particles

onMounted(() => {
  initAnimation()
})

function initAnimation() {
  svg = d3.select(svgRef.value)
    .style('position', 'absolute')
    .style('top', 0)
    .style('left', 0)
    .style('pointer-events', 'none')
    .style('z-index', -1)
}

function handleHover() {
  if (!tagRef.value) return
  
  const rect = tagRef.value.getBoundingClientRect()
  const width = rect.width
  const height = rect.height
  
  // 清除之前的动画
  svg.selectAll('*').remove()
  
  // 创建粒子数据
  const particleData = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: width / 2,
    y: height / 2,
    angle: (i / 8) * 2 * Math.PI,
    radius: 15 + Math.random() * 10
  }))
  
  // 创建粒子
  particles = svg.selectAll('.hover-particle')
    .data(particleData)
    .enter()
    .append('circle')
    .attr('class', 'hover-particle')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', 1)
    .attr('fill', '#3b82f6')
    .attr('opacity', 0)
  
  // 动画粒子向外扩散
  particles
    .transition()
    .duration(600)
    .ease(d3.easeQuadOut)
    .attr('cx', d => d.x + Math.cos(d.angle) * d.radius)
    .attr('cy', d => d.y + Math.sin(d.angle) * d.radius)
    .attr('r', 2)
    .attr('opacity', 0.8)
    .transition()
    .duration(400)
    .attr('opacity', 0)
    .remove()
  
  // 创建波纹效果
  const ripple = svg.append('circle')
    .attr('cx', width / 2)
    .attr('cy', height / 2)
    .attr('r', 0)
    .attr('fill', 'none')
    .attr('stroke', '#3b82f6')
    .attr('stroke-width', 1)
    .attr('opacity', 0.6)
  
  ripple
    .transition()
    .duration(800)
    .ease(d3.easeQuadOut)
    .attr('r', Math.max(width, height) / 2)
    .attr('opacity', 0)
    .remove()
}

function handleLeave() {
  // 清除所有动画
  if (svg) {
    svg.selectAll('*').interrupt().remove()
  }
}
</script>

<style scoped>
.animated-tag {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.animated-tag:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.tag-animation {
  border-radius: inherit;
}
</style>