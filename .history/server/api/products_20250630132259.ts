export default defineEventHandler(() => {
  // 模拟数据库中的产品数据
  return [
    {
      id: 1,
      name: "高性能笔记本电脑",
      description: "适合专业开发人员使用的高性能笔记本电脑，搭载最新处理器和高速固态硬盘。",
      price: 8999,
      image: "https://via.placeholder.com/300x200?text=笔记本电脑"
    },
    {
      id: 2,
      name: "智能手机",
      description: "最新款智能手机，拥有出色的摄像系统和长效电池续航。",
      price: 4999,
      image: "https://via.placeholder.com/300x200?text=智能手机"
    },
    {
      id: 3,
      name: "无线耳机",
      description: "高品质无线耳机，提供沉浸式音频体验和主动降噪功能。",
      price: 1299,
      image: "https://via.placeholder.com/300x200?text=无线耳机"
    },
    {
      id: 4,
      name: "智能手表",
      description: "功能丰富的智能手表，可监测健康数据并接收通知。",
      price: 1999,
      image: "https://via.placeholder.com/300x200?text=智能手表"
    },
    {
      id: 5,
      name: "平板电脑",
      description: "轻薄便携的平板电脑，适合工作和娱乐使用。",
      price: 3699,
      image: "https://via.placeholder.com/300x200?text=平板电脑"
    },
    {
      id: 6,
      name: "智能音箱",
      description: "具有语音助手功能的智能音箱，可控制家庭设备并播放音乐。",
      price: 699,
      image: "https://via.placeholder.com/300x200?text=智能音箱"
    }
  ]
}) 