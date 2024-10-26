import sequelize, { DataTypes } from "../database/db";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    nacionality: {
      type: DataTypes.STRING,
      allowNull: false
  }},
  {
    timestamps: false,
  }
);

User.sync({alter: true})

export default User;
