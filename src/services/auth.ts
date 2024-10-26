import Auth from "../models/auth";
import { v4 as uuidv4 } from "uuid";
import UserService from "./users";

class AuthService {
  static async register(data) {
    try {
      const { email } = data
      const findEmail = await UserService.getEmail(email)
      if (findEmail) {
        const error = new Error("El email ya existe");
        error["statusCode"] = 400

        throw error
      }

    } catch (error) {
      throw error;
    }
  }

}

export default AuthService;
