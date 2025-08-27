<template>
  <div ref="container" class="timeline-progress"></div>
</template>

<script setup>
import * as d3 from 'd3'

const container = ref(null)
let svg, progressLine

const props = defineProps({
  progress: {
    type: Number,
    default: 0
  },
  height: {
    type: Number,
    default: 400
  }
})

onMounted(() => {
  initProgress()
  
  // 使用 Intersection Observer 触发动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateProgress()
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.3 })
  
  observer.observe(container.value)
})

function initProgress() {
  const width = 4
  const height = props.height

  svg = d3.select(container.value)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('position', 'absolute')
    .style('left', '1.5rem')
    .style('top', 0)
    .style('transform', 'translateX(-50%)')

  // 背景线
  svg.append('line')
    .attr('x1', width / 2)
    .attr('y1', 0)
    .attr('x2', width / 2)
    .attr('y2', height)
    .attr('stroke', '#e2e8f0')
    .attr('stroke-width', 3)

  // 进度线
  progressLine = svg.append('line')
    .attr('x1', width / 2)
    .attr('y1', 0)
    .attr('x2', width / 2)
    .attr('y2', 0)
    .attr('stroke', 'url(#progressGradient)')
    .attr('stroke-width', 3)
    .attr('stroke-linecap', 'round')

  // 创建渐变定义
  const gradient = svg.append('defs')
    .append('linearGradient')
    .attr('id', 'progressGradient')
    .attr('x1', '0%')
    .attr('y1', '0%')
    .attr('x2', '0%')
    .attr('y2', '100%')

  gradient.append('stop')
    .attr('offset', '0%')
    .attr('stop-color', '#3b82f6')
    .attr('stop-opacity', 1)

  gradient.append('stop')
    .attr('offset', '100%')
    .attr('stop-color', '#60a5fa')
    .attr('stop-opacity', 0.8)

  // 添加发光效果
  svg.append('defs')
    .append('filter')
    .attr('id', 'glow')
    .append('feGaussianBlur')
    .attr('stdDeviation', '2')
    .attr('result', 'coloredBlur')

  const feMerge = svg.select('#glow')
    .append('feMerge')

  feMerge.append('feMergeNode')
    .attr('in', 'coloredBlur')
  feMerge.append('feMergeNode')
    .attr('in', 'SourceGraphic')

  progressLine.style('filter', 'url(#glow)')
}

function animateProgress() {
  const height = props.height
  const targetY = height * (props.progress / 100)

  progressLine
    .transition()
    .duration(2000)
    .ease(d3.easeQuadInOut)
    .attr('y2', targetY)

  // 添加粒子效果
  const particles = svg.selectAll('.progress-particle')
    .data(d3.range(5))
    .enter()
    .append('circle')
    .attr('class', 'progress-particle')
    .attr('cx', 2)
    .attr('cy', 0)
    .attr('r', 1.5)
    .attr('fill', '#3b82f6')
    .attr('opacity', 0)

  particles
    .transition()
    .delay((d, i) => i * 400)
    .duration(1500)
    .ease(d3.easeLinear)
    .attr('cy', targetY)
    .attr('opacity', 1)
    .transition()
    .duration(500)
    .attr('opacity', 0)
    .remove()
}
</script>

<style scoped>
.timeline-progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  pointer-events: none;
}
</style>