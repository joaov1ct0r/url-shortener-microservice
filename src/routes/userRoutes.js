import express from 'express';

import { handleNewUrl, handleShortUrl } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/shorturl/:url', handleShortUrl);

userRouter.post('/shorturl', handleNewUrl);

export default userRouter;
