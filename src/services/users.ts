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
      const id = uuidv4();
      const user = await User.create({
        id: id, 
        username: data.username, 
        fullname: data.fullname,
        email: data.email,
        birthdate: data.birthdate,
        nationality: data.nationality,
      })
      console.log("Llego hasta aca");
      
      return user

    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
