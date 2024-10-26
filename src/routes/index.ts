import { Router } from "express";
import subject from "./subjects";
import auth from "./auth";

const router = Router()
router.use("/subjects", subject)
router.use("/auth", auth)

export default router