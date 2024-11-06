import { NextFunction, Request, Response } from "express";
import SubjectService from "../services/subjects";
import Logger from "../lib/winston";

class SubjectController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const subjects = await SubjectService.getAll(req.query)
        res.status(200).json({data: subjects})
    } catch (error) {
      next(error);
    }
  }
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
        const subjects = await SubjectService.create(req.body)
        Logger.info("Se creó una nueva clase");
        res.status(201).json({data: subjects})
    } catch (error) {
      next(error);
    }
  }
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
        await SubjectService.update(req.body, req.query.name)
        res.status(200).json({message: "Datos actualizados"})
    } catch (error) {
      next(error);
    }
  }
  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
        await SubjectService.delete(req.query.name)
        Logger.info("Se eliminó una clase");
        res.status(200).json({message: "Se eliminó la clase"})
    } catch (error) {
      next(error);
    }
  }

}

export default SubjectController;
