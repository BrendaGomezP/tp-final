import Auth from "../models/auth";
import { v4 as uuidv4 } from "uuid";
import UserService from "./users";
import { authValidator } from "../schemas/auth";

class AuthService {
  static async register(data) {
    try {
      const result = authValidator(data)
      if (!result.success) {
        const error = new Error("Datos inválidos");
        error["statusCode"] = 400

        throw error
      }
      const { password, ...user } = result.data
      
      const findEmail = await UserService.getEmail(user.email)
      if (findEmail) {
        const error = new Error("El email ya existe");
        error["statusCode"] = 400

        throw error
      }

      const userId = await UserService.create(user)
      const id = uuidv4()
      const authDb = await Auth.create({id: id, UserId: userId, password: password})
      return authDb      

    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;