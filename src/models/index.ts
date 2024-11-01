import Auth from "./auth";
import User from "./users";
import sequelize from "../database/db";

User.hasOne(Auth, { onDelete: 'cascade', hooks: true });
Auth.belongsTo(User)

//sequelize.sync({force: true})

