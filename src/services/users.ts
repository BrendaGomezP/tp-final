import User from "../models/users";
import { v4 as uuidv4 } from "uuid";

class UserService {
  static async getEmail(email) {
    try {
      const user = await User.findOne({ where: { email: email } })
      return user

    } catch (error) {
      throw error;
    }
  }
  static async create(data) {
    try {
      const user = await User.create()
      return user

    } catch (error) {
      throw error;
    }
  }

}

export default UserService;
