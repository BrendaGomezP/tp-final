import { NextFunction, Request, Response } from "express";
import UserSubjectService from "../services/UserSubjects";
import Logger from "../lib/winston";

class UserSubjectController{
    static async joinSubject(req: Request, res: Response, next: NextFunction) {
        try {
            await UserSubjectService.joinSubject(req.query.username, req.query.name)
            res.status(201).json({message: "Vinculaciòn exitosa"})
        } catch (error) {
          Logger.error(error.message);
          next(error);
        }
      }

      static async dropSubject(req: Request, res: Response, next: NextFunction) {
        try {
            await UserSubjectService.dropSubject(req.query.username, req.query.name)
            res.status(200).json({message: "Desvinculaciòn exitosa"})
        } catch (error) {
          Logger.error(error.message);
          next(error);
        }
      }
}

export default UserSubjectController