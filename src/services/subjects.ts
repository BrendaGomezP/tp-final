import Subject from "../models/subjects";
import { subjectValidator, updateValidator } from "../schemas/subjects";
import { v4 as uuidv4 } from "uuid";
import { Op } from "@sequelize/core";
import sequelize from "../database/db";

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
      const name = await this.getName(result.data.name);
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
      const result = updateValidator(data);
      if (!result.success) {
        const error = new Error("Datos inválidos");
        error["statusCode"] = 400;

        throw error;
      }
      const subject = await Subject.update(result.data, {
        where: { name: { [Op.iLike]: name } },
      });

      if (subject[0] == 0) {
        const error = new Error("La clase ingresada no existe");
        error["statusCode"] = 400;

        throw error;
      }

      return subject;
    } catch (error) {
      throw error;
    }
  }
  static async delete(name) {
    try {
      if (!name) {
        const error = new Error("Datos inválidos: ingrese el nombre de la clase");
        error["statusCode"] = 400;

        throw error;
      }
      const subject = await Subject.destroy({
        where: { name: { [Op.iLike]: name } },
      });

      if (subject == 0) {
        const error = new Error("La clase ingresada es inválida");
        error["statusCode"] = 400;

        throw error;
      }

      return subject;
    } catch (error) {
      throw error;
    }
  }

  static async getName(name) {
    try {
      const subject = await Subject.findOne({
        where: { name: { [Op.iLike]: name } },
      });
      if (!subject) {
        return subject;
      }
      
      return subject.dataValues;
    } catch (error) {
      throw error;
    }
  }
}

export default SubjectService;

