export default class NotFoundError extends Error {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 404) {
    super(message);

    this.message = message;

    this.statusCode = statusCode;
  }
}
