import { Request, Response } from "express";

import CreateNewUrlService from "../services/CreateNewUrlService";

import ICreateNewUrlService from "../interfaces/ICreateNewUrlService";

export default class CreateNewUrlController {
  public handle(req: Request, res: Response): Response {
    const url: string = req.body.url;

    const createNewUrlService: ICreateNewUrlService = new CreateNewUrlService();

    try {
      const link: Object = createNewUrlService.execute(url);

      return res.status(201).json({ link });
    } catch (err: any) {
      return res.status(err.statusCode).json({ error: err.message });
    }
  }
}
