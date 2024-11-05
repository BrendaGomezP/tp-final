import sequelize, { DataTypes } from "../database/db";

import { Subject, User  } from ".";

const UserSubject = sequelize.define(
  "UserSubject",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },

    SubjectId: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Subject,
        key: "id",
      },
    },

    UserId: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  { timestamps: false }
);

export default UserSubject;
