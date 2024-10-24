import { number } from "zod";
import Subject from "../models/subjects";
import { subjectValidator } from "../schemas/subjects";
import { v4 as uuidv4 } from "uuid";

class subjectService {
  static async getAll() {
    try {
      const subject = await Subject.findAll();
      return subject;
    } catch (error) {
      throw error;
    }
  }
  static async create(data) {
    try {
      const result = subjectValidator(data);
      if (!result.success) {
        return "Datos Inválidos";
      }
      const id = uuidv4();
      const subject = await Subject.create({
        id: id,
        name: result.data.name,
        startDate: result.data.startDate,
        endDate: result.data.endDate,
      });
      return subject;
    } catch (error) {
      throw error;
    }
  }
}

export default subjectService;
