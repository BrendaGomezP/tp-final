import { number } from "zod";
import Subject from "../models/subjects";
import { subjectValidator, updateValidator } from "../schemas/subjects";
import { v4 as uuidv4 } from "uuid";
import { where } from "sequelize";

class SubjectService {
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
        const error = new Error("Datos inválidos");
        error["statusCode"] = 400;

        throw error;
      }
      const name = await this.getName(result.data.name)
      if (name) {
        const error = new Error("La materia ya existe");
        error["statusCode"] = 400;

        throw error;
        
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
  static async update(data, name) {
    try {
      const result = updateValidator(data) 
      if (!result.success) {
        const error = new Error("Datos inválidos");
        error["statusCode"] = 400;

        throw error;
      }
      const subject = await Subject.update(result.data, { where: {name: name.toLowerCase()} }); //--->VER
      console.log(result.data);//--->IMPRIME LA FECHA MODIFICADA PERO NO ACTUALIZA EN TABLA
      console.log(where);
      console.log(name);
      
      return subject;
    } catch (error) {
      throw error;
    }
  }
  //   static async delete() {
  //     try {
  //       const subject = await Subject.destroy({where:{}});
  //       return subject;
  //     } catch (error) {
  //       throw error;
  //     }
  //   }

  static async getName(name) {
    try {
      const subject = await Subject.findOne({ where: { name: name } });
      if (!subject) { 
        return subject        
      }
      return subject.dataValues;
    } catch (error) {
      throw error;
    }
  }
}

export default SubjectService;
