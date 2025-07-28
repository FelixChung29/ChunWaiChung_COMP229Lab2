import express from 'express';
import userCtrl from '../controllers/user.controller.js';

const router = express.Router();

// RESTful root: /api/users
router.route('/')
  .post(userCtrl.create)
  .get(userCtrl.list);

// 單筆查詢/更新/刪除: /api/users/:userId
router.route('/:userId')
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove);

// 路由參數中介
router.param('userId', userCtrl.userByID);

export default router;
