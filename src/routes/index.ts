import { Router } from "express";
import subject from "./subjects";

const router = Router()
router.use("/subjects", subject)


export default router