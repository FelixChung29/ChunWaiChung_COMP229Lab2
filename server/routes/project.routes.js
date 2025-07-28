import express from 'express';
import projectCtrl from '../controllers/project.controller.js';

const router = express.Router();

// 路由：获取全部、创建新项目
router.route('/')
  .get(projectCtrl.list)       // GET 所有项目
  .post(projectCtrl.create);   // POST 创建项目

// 路由：针对特定项目的操作
router.route('/:projectId')
  .get(projectCtrl.read)       // GET 根据 ID 获取
  .put(projectCtrl.update)     // PUT 更新
  .delete(projectCtrl.remove); // DELETE 删除

// 参数中间件：projectId
router.param('projectId', projectCtrl.projectByID);

export default router;
