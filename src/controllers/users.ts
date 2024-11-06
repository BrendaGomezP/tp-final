import { NextFunction, Request, Response } from "express";
import UserService from "../services/users";
import Logger from "../lib/winston";

class UserController {
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
        await UserService.update(req.body, req.params.id)
        res.status(200).json({message: "Datos actualizados"})
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
        await UserService.delete(req.query.username)
        Logger.info("Se eliminó un usuario");
        res.status(200).json({message: "Se eliminó el usuario"})

    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
