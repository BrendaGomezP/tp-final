import { Router } from "express";
import SubjectController from "../controllers/subjects";

const subject = Router()
subject.get("/", SubjectController.getAll)
subject.post("/", SubjectController.create)


export default subject