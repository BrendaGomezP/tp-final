import { Router } from "express";
import SubjectController from "../controllers/subjects";
import checkJWT from "../middlewares/verify-jwt";

const subject = Router()
subject.get("/", SubjectController.getAll)
subject.post("/", checkJWT, SubjectController.create)
subject.patch("/", checkJWT, SubjectController.update)
subject.delete("/", checkJWT, SubjectController.delete)

export default subject