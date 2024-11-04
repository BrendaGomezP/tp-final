import { Router } from "express";
import SubjectController from "../controllers/subjects";

const subject = Router()
subject.get("/", SubjectController.getAll)
subject.post("/", SubjectController.create)
subject.patch("/", SubjectController.update)
subject.delete("/", SubjectController.delete)
subject.put("/join", SubjectController.joinSubject)

export default subject