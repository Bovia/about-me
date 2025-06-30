export default defineEventHandler(() => {
  // 博客数据
  return {
    // 摄影作品数据
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc',
        title: '山间日出',
        description: '清晨在黄山拍摄的日出，云海翻腾，远处群山若隐若现，光线穿透云层形成金色光柱'
      },
      {
        url: 'https://images.unsplash.com/photo-1516571748831-5d81767b788d',
        title: '城市夜景',
        description: '上海外滩的璀璨夜景，东方明珠与周围高楼灯光在黄浦江上倒映，形成绚丽光影'
      },
      {
        url: 'https://images.unsplash.com/photo-1546514355-7fdc90ccbd03',
        title: '花卉特写',
        description: '春天里盛开的木兰花特写，每一片花瓣都清晰可见，展现大自然的精致与美丽'
      },
      {
        url: 'https://images.unsplash.com/photo-1502943693086-33b5b1cfdf2f',
        title: '海滩日落',
        description: '三亚海滩的迷人日落景色，金色的阳光洒在海面上，椰树剪影勾勒出热带风情'
      },
      {
        url: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1',
        title: '雨后森林',
        description: '雨后的森林，空气清新，阳光透过树叶间隙，形成斑驳的光影，苔藓和蘑菇在潮湿的土壤上生长'
      },
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
        title: '雪山之巅',
        description: '阿尔卑斯山脉的壮观雪景，白雪皑皑的山峰直插云霄，蓝天映衬下显得格外纯净'
      }
    ],

    // 绘画作品数据
    drawings: [
      {
        url: 'https://images.unsplash.com/photo-1574182245530-967d9b3831af',
        title: '水彩风景',
        description: '水彩技法创作的山水画作品，色彩柔和，意境悠远，展现东方美学的韵味'
      },
      {
        url: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458',
        title: '人物素描',
        description: '铅笔素描的人物肖像，细腻地刻画了人物的面部表情和情感，栩栩如生'
      },
      {
        url: 'https://images.unsplash.com/photo-1579762593175-20226054cad0',
        title: '数字插画',
        description: '使用iPad Pro创作的数字插画，融合了传统绘画和现代科技的特点，色彩鲜明'
      },
      {
        url: 'https://images.unsplash.com/photo-1566765790386-c43812572bc2',
        title: '油画作品',
        description: '油彩创作的抽象艺术，层次丰富，质感强烈，表达内心情感与思考'
      },
      {
        url: 'https://images.unsplash.com/photo-1549887534-1541e9326642',
        title: '国画山水',
        description: '传统中国画技法创作的山水画，墨色渲染，意境深远，展现东方艺术的精髓'
      }
    ],

    // 猫咪数据
    cats: [
      {
        name: '奶糖',
        breed: '英国短毛猫',
        photo: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
        description: '一只活泼好动的英短猫，毛色为奶油色，有着圆圆的大眼睛，喜欢在家里到处探险。性格好奇，总是对新事物充满兴趣，喜欢追逐玩具和光点。'
      },
      {
        name: '豆包',
        breed: '美国短毛猫',
        photo: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987',
        description: '一只安静乖巧的美短，银灰色的虎斑纹，非常喜欢睡觉和晒太阳，是家里的"暖炉"。平时喜欢趴在窗台上看窗外的鸟儿，偶尔会发出可爱的咕噜声。'
      },
      {
        name: '小黑',
        breed: '混血猫',
        photo: 'https://images.unsplash.com/photo-1548366086-7f1b76106622',
        description: '一只全身黑色的混血猫，性格独立且聪明，总是能找到最舒适的位置休息。爱干净，经常自己梳理毛发，在家中有自己的专属领地，但也喜欢在晚上依偎在主人身边。'
      }
    ],

    // 博客简介
    intro: {
      title: "我的创意空间",
      description: "欢迎来到我的个人博客！这里是我展示创意、分享生活的天地。作为一名前端开发工程师，我的生活不仅限于代码的世界。在工作之外，我热爱摄影、绘画和与我的猫咪们相处。希望通过这个空间，能与大家分享我生活中的美好瞬间和创作灵感。"
    }
  }
}) 