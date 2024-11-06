import express, { json } from "express";
import router from "./routes";
import errorHandler from "./middlewares/error-handler";
import helmet from "helmet"
import morgan from "./middlewares/morgan";

const app = express();
app.use(helmet())
app.use(morgan)
app.use(json());
app.use("/", router)
app.use(errorHandler)


export default app;
