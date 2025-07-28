import express from 'express';
import qualificationCtrl from '../controllers/qualification.controller.js';

const router = express.Router();

// 路由：获取所有 qualifications，或创建一个新条目
router.route('/')
  .get(qualificationCtrl.list)       // GET 所有
  .post(qualificationCtrl.create);   // POST 新建

// 路由：通过 ID 操作特定 qualification
router.route('/:qualificationId')
  .get(qualificationCtrl.read)       // GET 通过 ID
  .put(qualificationCtrl.update)     // PUT 更新
  .delete(qualificationCtrl.remove); // DELETE 删除

// 参数中间件：qualificationId
router.param('qualificationId', qualificationCtrl.qualificationByID);

export default router;
