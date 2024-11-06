import morgan, { StreamOptions } from "morgan";
import Logger from "../lib/winston";
import { Request, Response } from "express";

const stream: StreamOptions = {
  write: (message) => Logger.http(message),
};

morgan.token("body", (req: Request, res: Response) => JSON.stringify(req.body));
morgan.token("token", (req: Request, res: Response) =>
  JSON.stringify(req.headers.authorization)
);

const morganMiddleware = morgan(
  ":method :url :body :token :status - :response-time",
  {
    stream,
  }
);

export default morganMiddleware;