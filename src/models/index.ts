import Auth from "./auth";
import User from "./users";
import sequelize from "../database/db";

User.hasOne(Auth)
Auth.belongsTo(User)

sequelize.sync({alter: true})

