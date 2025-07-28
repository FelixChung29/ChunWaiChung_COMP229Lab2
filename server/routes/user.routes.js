import express from 'express';
import userCtrl from '../controllers/user.controller.js';

const router = express.Router();

router.route('/')
  .post(userCtrl.create)
  .get(userCtrl.list);

router.route('/:userId')
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove);

router.param('userId', userCtrl.userByID);

export default router;
