import express from "express";

import CreateNewUrlController from "../controllers/CreateNewUrlController.js";

import ICreateNewUrlController from "../interfaces/ICreateNewUrlController.js";

import ListShortUrlController from "../controllers/ListShortUrlController.js";

import IListShortUrlController from "../interfaces/IListShortUrlController.js";

const userRouter: express.Router = express.Router();

const createNewUrlController: ICreateNewUrlController =
  new CreateNewUrlController();

const listShortUrlController: IListShortUrlController =
  new ListShortUrlController();

userRouter.get("/shorturl/:url", listShortUrlController.handle);

userRouter.post("/shorturl", createNewUrlController.handle);

export default userRouter;
