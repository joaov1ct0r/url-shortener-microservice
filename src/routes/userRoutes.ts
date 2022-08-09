import express from "express";

import { handleShortUrl } from "../controllers/userController.js";

import CreateNewUrlController from "../controllers/CreateNewUrlController.js";

import ICreateNewUrlController from "../interfaces/ICreateNewUrlController.js";

const userRouter: express.Router = express.Router();

const createNewUrlController: ICreateNewUrlController =
  new CreateNewUrlController();

userRouter.get("/shorturl/:url", handleShortUrl);

userRouter.post("/shorturl", createNewUrlController.handle);

export default userRouter;
