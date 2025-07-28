import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Project title is required'
  },
  firstname: {
    type: String,
    required: 'First name is required'
  },
  lastname: {
    type: String,
    required: 'Last name is required'
  },
  email: {
    type: String,
    required: 'Email is required',
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  completion: {
    type: Date,
    required: 'Completion date is required'
  },
  description: {
    type: String,
    required: 'Project description is required'
  }
}, {
  timestamps: true
});

export default mongoose.model('Project', ProjectSchema);
