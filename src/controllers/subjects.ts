import { NextFunction, Request, Response } from "express";
import subjectService from "../services/subjects";

class subjectController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const subjects = await subjectService.getAll()
        res.status(200).json({data: subjects})
    } catch (error) {
      next(error);
    }
  }
}

export default subjectController;
