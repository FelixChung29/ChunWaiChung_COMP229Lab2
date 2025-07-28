import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import errorHandler from './error.controller.js';

dotenv.config();

// 登录：生成 JWT
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. 查找用户
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        error: 'User not found'
      });
    }

    // 2. 验证密码
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: 'Email and password do not match'
      });
    }

    // 3. 生成 token
    const token = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // 4. 返回基本用户信息与 token
    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (err) {
    return res.status(401).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// 登出（客户端行为，返回状态）
const signout = (req, res) => {
  return res.status(200).json({ message: 'Signed out successfully' });
};

export default { signin, signout };
