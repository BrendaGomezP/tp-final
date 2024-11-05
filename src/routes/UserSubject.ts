import { Router } from "express";
import UserSubjectController from "../controllers/UserSubject";

const userSubject = Router()
userSubject.post("/join", UserSubjectController.joinSubject)
userSubject.delete("/drop", UserSubjectController.dropSubject)


export default userSubject