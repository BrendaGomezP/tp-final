import Auth from "./auth";
import User from "./users";
import Subject from "./subjects";
import UserSubject from "./UserSubject";
import sequelize from "../database/db";

User.hasOne(Auth, { onDelete: 'cascade', hooks: true });
Auth.belongsTo(User)
Subject.belongsToMany(User, {through: UserSubject})
User.belongsToMany(Subject, {through: UserSubject})

//sequelize.sync({})

export {Auth, User, Subject}