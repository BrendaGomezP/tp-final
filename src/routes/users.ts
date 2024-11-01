import { Router } from "express";
import UserController from "../controllers/users";

const user = Router()
user.patch("/:id", UserController.update)
user.delete("/", UserController.delete)


export default user