import projects from '../projects';

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');

  // 查找对应ID的项目
  const project = projects.projects.find(p => p.id === id);

  // 如果找不到项目，返回404
  if (!project) {
    throw createError({
      statusCode: 404,
      statusMessage: '项目不存在'
    });
  }

  return project;
}); 