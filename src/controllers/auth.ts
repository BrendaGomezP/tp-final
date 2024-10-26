import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth";

class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
        const auth = await AuthService.register(req.body)
        res.status(200).json({data: auth})
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
