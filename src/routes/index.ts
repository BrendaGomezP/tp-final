import { Router } from "express";
import subject from "./subjects";
import auth from "./auth";
import user from "./users";

const router = Router()
router.use("/subjects", subject)
router.use("/auth", auth)
router.use("/user", user)

export default router