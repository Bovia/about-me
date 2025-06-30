<template>
  <div>重定向中...</div>
</template>

<script setup>
// 重定向到projects页面
const router = useRouter()

onMounted(() => {
  router.push('/projects')
})
</script> 