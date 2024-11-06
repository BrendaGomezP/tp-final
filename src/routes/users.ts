import { Router } from "express";
import UserController from "../controllers/users";
import checkJWT from "../middlewares/verify-jwt";

const user = Router()
user.patch("/:id", checkJWT, UserController.update)
user.delete("/", checkJWT, UserController.delete)


export default user