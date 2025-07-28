import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// 路由导入
import contactRoutes from './routes/contact.routes.js';
import projectRoutes from './routes/project.routes.js';
import qualificationRoutes from './routes/qualification.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();

// 中间件
app.use(cors());
app.use(bodyParser.json());

// 所有 API 路由挂载前缀为 /api
app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/users', userRoutes);

export default app;
