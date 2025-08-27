<template>
  <div ref="container" class="skill-bubbles">
    <slot></slot>
  </div>
</template>

<script setup>
import * as d3 from 'd3'

const container = ref(null)
let svg, simulation

const props = defineProps({
  skills: {
    type: Array,
    default: () => []
  }
})

onMounted(() => {
  if (props.skills.length > 0) {
    initBubbles()
  }
})

onUnmounted(() => {
  if (simulation) {
    simulation.stop()
  }
})

function initBubbles() {
  const width = 300
  const height = 200
  
  svg = d3.select(container.value)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('position', 'absolute')
    .style('top', 0)
    .style('right', 0)
    .style('pointer-events', 'none')
    .style('z-index', 1)
    .style('opacity', 0.6)

  const bubbleData = props.skills.map((skill, i) => ({
    id: i,
    name: skill,
    radius: 8 + Math.random() * 6,
    x: width * 0.2 + Math.random() * width * 0.6,
    y: height * 0.2 + Math.random() * height * 0.6,
    color: d3.schemeCategory10[i % 10]
  }))

  simulation = d3.forceSimulation(bubbleData)
    .force('charge', d3.forceManyBody().strength(-50))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(d => d.radius + 2))
    .on('tick', tick)

  const bubbles = svg.selectAll('.skill-bubble')
    .data(bubbleData)
    .enter()
    .append('g')
    .attr('class', 'skill-bubble')

  bubbles.append('circle')
    .attr('r', d => d.radius)
    .attr('fill', d => d.color)
    .attr('opacity', 0.7)
    .style('filter', 'blur(1px)')

  function tick() {
    bubbles.attr('transform', d => `translate(${d.x},${d.y})`)
  }

  // 添加鼠标交互
  container.value.addEventListener('mouseenter', () => {
    simulation.alpha(0.3).restart()
  })
}
</script>

<style scoped>
.skill-bubbles {
  position: relative;
  overflow: hidden;
}
</style>