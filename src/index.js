import 'dotenv/config';

import express from 'express';

import cors from 'cors';

import userRouter from './routes/userRoutes.js';

const app = express();

app.use(cors());

app.use('/api', express.json(), userRouter);

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server running');
});
