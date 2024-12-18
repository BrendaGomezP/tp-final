import User from "../models/users";
import { v4 as uuidv4 } from "uuid";
import { userValidator } from "../schemas/users";
import { Op } from "@sequelize/core"; 

class UserService {
  static async getEmail(email) {
    try {
      const user = await User.findOne({ where: { email: email } });
      if (!user) { 
        return user        
      }
      return user.dataValues;
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
      });
      
      return user.dataValues.id;
    } catch (error) {
      throw error;
    }
  }
  static async update(data, id) {
    try {
      const result = userValidator(data);
      if (!result.success) {
        return "Datos Inválidos";
      }
      const user = await User.update(result.data, { where: { id: id } });
      return user;
    } catch (error) {
      throw error;
    }
  }
  static async delete(username) {
    try {
      if (!username) {
        const error = new Error("Datos inválidos: ingrese el nombre del usuario");
        error["statusCode"] = 400;

        throw error;
      }
      const user = await User.destroy({
        where: { username: { [Op.iLike]: username } },
      });

      if (user[0] == 0) {
        const error = new Error("El nombre ingresado es inválido");
        error["statusCode"] = 400;

        throw error;
      }
      return user;
      
    } catch (error) {
      throw error;
    }
  }
  static async getUsername(username) {
    try {
      const user = await User.findOne({ where: { username: username } });
      if (!user) {
        return user;
      }
      
      return user.dataValues;
    } catch (error) {
      throw error;
    }
  }

}

export default UserService;