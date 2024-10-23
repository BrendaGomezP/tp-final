import sequelize, { DataTypes } from "../database/db";

const Subject = sequelize.define(
  "Subject",
  {
    id: {
      type: DataTypes.INTEGER, //----> EN LA CONSIGA DICE STRIG VEEEEEERRRRR
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Subject.sync();

export default Subject;
