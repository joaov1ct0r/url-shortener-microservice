import { Request, Response } from "express";

export default interface IListShortUrlController {
  handle(req: Request, res: Response): void | Response;
}
