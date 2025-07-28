import app from './server/express.js';
import mongoose from 'mongoose';
import config from './config/config.js';  

mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

app.listen(config.port, () => {
  console.log(`🚀 Server started on port ${config.port}`);
});
