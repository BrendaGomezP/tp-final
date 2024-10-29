import { Router } from "express";
import AuthController from "../controllers/auth";

const auth = Router()
auth.post("/register", AuthController.register)
auth.post("/login", AuthController.login)


export default auth