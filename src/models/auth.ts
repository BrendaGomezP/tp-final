import sequelize, { DataTypes } from "../database/db";

const Auth = sequelize.define(
  "Auth",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  },
  {
    timestamps: false,
  }
);
Auth.beforeDestroy(() => {
  console.log('Auth has been destroyed');
});

//Auth.sync({alter: true});

export default Auth;
