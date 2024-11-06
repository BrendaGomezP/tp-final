import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth";
import Logger from "../lib/winston";

class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      await AuthService.register(req.body);
      res.status(201).json({ message: "Usuario registrado con éxito" });
    } catch (error) {
      Logger.error(error.message);
      next(error);
    }
  }
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
     const token = await AuthService.login(req.body);
      res.status(200).json({ message: "Bienvenido", token });
    } catch (error) {
      Logger.error(error.message);
      next(error);
    }
  }
}

export default AuthController;
