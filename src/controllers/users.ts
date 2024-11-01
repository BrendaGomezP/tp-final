import { NextFunction, Request, Response } from "express";
import UserService from "../services/users";

class UserController {
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await UserService.update(req.body, req.params.id)
        res.status(200).json({data: user})
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await UserService.delete(req.query.name)
        res.status(200).json({data: user})
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
