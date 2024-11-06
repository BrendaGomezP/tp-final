import { Router } from "express";
import UserSubjectController from "../controllers/UserSubject";
import checkJWT from "../middlewares/verify-jwt";

const userSubject = Router()
userSubject.post("/join", checkJWT, UserSubjectController.joinSubject)
userSubject.delete("/drop", checkJWT, UserSubjectController.dropSubject)


export default userSubject