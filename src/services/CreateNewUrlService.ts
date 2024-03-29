import Links from "../utils/Links";

import Id from "../utils/Id";

import isUrl from "is-url";

import BadRequestError from "../errors/BadRequestError";

import ILinks from "../interfaces/ILinks";

export default class CreateNewUrlService {
  public execute(url: string): Object {
    if (!isUrl(url)) {
      throw new BadRequestError("Invalid URL");
    }

    let id = Id;

    id++;

    const link: ILinks = {
      original_url: url,
      short_url: `${id}`,
    };

    Links.push(link);

    return link;
  }
}
