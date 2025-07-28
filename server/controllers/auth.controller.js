import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import errorHandler from './error.controller.js';

dotenv.config();

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        error: 'User not found'
      });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: 'Email and password do not match'
      });
    }

    const token = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

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

const signout = (req, res) => {
  return res.status(200).json({ message: 'Signed out successfully' });
};

export default { signin, signout };
