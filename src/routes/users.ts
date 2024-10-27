import { Router } from "express";
import UserController from "../controllers/users";

const user = Router()
user.patch("/:id", UserController.update)


export default user