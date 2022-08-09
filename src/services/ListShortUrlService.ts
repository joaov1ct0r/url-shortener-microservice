import Links from "../utils/Links";

import BadRequestError from "../errors/BadRequestError";

import NotFoundError from "../errors/NotFoundError";

export default class ListShortUrlService {
  public execute(url: string): string {
    if (!url) throw new BadRequestError("Invalid URL");

    const existedLink = Links.find((link) => link.short_url === url);

    if (!existedLink) {
      throw new NotFoundError("Not Found");
    }
    return existedLink.original_url;
  }
}
