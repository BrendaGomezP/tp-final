import SubjectService from "./subjects";
import UserService from "./users";
import UserSubject from "../models/UserSubject";
import { v4 as uuidv4 } from "uuid";

class UserSubjectService {
  static async joinSubject(username, name) {
    try {
      const user = await UserService.getUsername(username);
      const newSubject = await SubjectService.getName(name);
      if (!user || !newSubject) {
        const error = new Error("Datos inválidos");
        error["statusCode"] = 400;

        throw error;
      }
      const id = uuidv4();
      await UserSubject.create({
        id: id,
        SubjectId: newSubject.id,
        UserId: user.id,
      });
    } catch (error) {
      throw error;
    }
  }

  static async dropSubject(username, name) {
    try {
      const user = await UserService.getUsername(username);
      const newSubject = await SubjectService.getName(name);
      if (!user || !newSubject) {
        const error = new Error("Datos inválidos");
        error["statusCode"] = 400;

        throw error;
      }
      await UserSubject.destroy({where: {SubjectId: newSubject.id, UserId: user.id}})
    } catch (error) {
      throw error;
    }
  }
}

export default UserSubjectService;