import { Router } from "express";
import subjectController from "../controllers/subjects";

const subject = Router()
subject.get("/", subjectController.getAll)
subject.post("/", subjectController.create)


export default subject