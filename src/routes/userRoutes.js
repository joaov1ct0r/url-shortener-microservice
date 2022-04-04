import express from 'express';

import { handleNewUrl, handleShortUrl } from '../controllers/userController.js';

const userRouter = express.Router();
