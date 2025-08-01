import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import contactRoutes from './routes/contact.routes.js';
import projectRoutes from './routes/project.routes.js';
import qualificationRoutes from './routes/qualification.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/users', userRoutes);

export default app;
