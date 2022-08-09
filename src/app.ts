import express from "express";

import cors from "cors";

import userRouter from "./routes/userRoutes.js";

import swaggerUi from "swagger-ui-express";

export default class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.middlewares();

    this.userRoutes();
  }

  private userRoutes() {
    this.server.use("/api", userRouter);
  }

  private middlewares() {
    this.server.use(cors());

    this.server.use(express.json());

    this.server.use(express.urlencoded({ extended: true }));
  }
}
