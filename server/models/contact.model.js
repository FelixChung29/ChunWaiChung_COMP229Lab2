import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    required: 'First name is required',
  },
  lastname: {
    type: String,
    trim: true,
    required: 'Last name is required',
  },
  email: {
    type: String,
    trim: true,
    unique: 'Email already exists',
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required',
  },

}, {
  timestamps: true  // 自动添加 createdAt 和 updatedAt
});

export default mongoose.model('Contact', ContactSchema);
