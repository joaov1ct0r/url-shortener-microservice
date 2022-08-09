import { Request, Response } from "express";

import ListShortUrlService from "../services/ListShortUrlService";

import IListShortUrlService from "../interfaces/IListShortUrlService";

import ILinks from "../interfaces/ILinks";

export default class ListShortUrlController {
  public handle(req: Request, res: Response): void | Response {
    const url: string = req.params.url;

    const listShortUrlService: IListShortUrlService = new ListShortUrlService();

    try {
      const link: string = listShortUrlService.execute(url);

      return res.redirect(link);
    } catch (err: any) {
      return res.status(err.statusCode).json({ error: err.message });
    }
  }
}
