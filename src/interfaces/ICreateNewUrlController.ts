import { Request, Response } from "express";

export default interface ICreateNewUrlController {
  handle(req: Request, res: Response): Response;
}
