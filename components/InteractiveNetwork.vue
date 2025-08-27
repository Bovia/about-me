<template>
  <div ref="container" class="interactive-network"></div>
</template>

<script setup>
import * as d3 from 'd3'

const container = ref(null)
let svg, simulation, nodes, links

const props = defineProps({
  width: {
    type: Number,
    default: 400
  },
  height: {
    type: Number,
    default: 300
  },
  nodeCount: {
    type: Number,
    default: 20
  }
})

onMounted(() => {
  initNetwork()
})

onUnmounted(() => {
  if (simulation) {
    simulation.stop()
  }
})

function initNetwork() {
  const { width, height, nodeCount } = props

  svg = d3.select(container.value)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('opacity', 0.4)

  // 生成节点数据
  const nodeData = Array.from({ length: nodeCount }, (_, i) => ({
    id: i,
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 2 + Math.random() * 3
  }))

  // 生成连接数据（连接距离较近的节点）
  const linkData = []
  for (let i = 0; i < nodeData.length; i++) {
    for (let j = i + 1; j < nodeData.length; j++) {
      const distance = Math.sqrt(
        Math.pow(nodeData[i].x - nodeData[j].x, 2) +
        Math.pow(nodeData[i].y - nodeData[j].y, 2)
      )
      if (distance < 80 && Math.random() > 0.5) {
        linkData.push({
          source: nodeData[i],
          target: nodeData[j]
        })
      }
    }
  }

  // 创建力模拟
  simulation = d3.forceSimulation(nodeData)
    .force('link', d3.forceLink(linkData).distance(50).strength(0.1))
    .force('charge', d3.forceManyBody().strength(-30))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(d => d.radius + 2))
    .on('tick', tick)

  // 创建连线
  links = svg.selectAll('.network-link')
    .data(linkData)
    .enter()
    .append('line')
    .attr('class', 'network-link')
    .attr('stroke', '#3b82f6')
    .attr('stroke-width', 0.5)
    .attr('opacity', 0.3)

  // 创建节点
  nodes = svg.selectAll('.network-node')
    .data(nodeData)
    .enter()
    .append('circle')
    .attr('class', 'network-node')
    .attr('r', d => d.radius)
    .attr('fill', '#3b82f6')
    .attr('opacity', 0.6)
    .style('filter', 'blur(0.5px)')

  function tick() {
    links
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y)

    nodes
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
  }

  // 鼠标交互
  container.value.addEventListener('mouseenter', () => {
    svg.transition()
      .duration(300)
      .style('opacity', 0.7)
    
    simulation.alpha(0.3).restart()
  })

  container.value.addEventListener('mouseleave', () => {
    svg.transition()
      .duration(300)
      .style('opacity', 0.4)
  })
}
</script>

<style scoped>
.interactive-network {
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: auto;
  cursor: pointer;
  z-index: 1;
}
</style>