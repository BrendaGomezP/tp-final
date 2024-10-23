import Subject from "../models/subjects";

class subjectService {
  static async getAll() {
    try {
      const subject = await Subject.findAll();
      return subject;
    } catch (error) {
      throw error;
    }
  }
}

export default subjectService;
