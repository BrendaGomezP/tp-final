import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(process.env.URI);

// (async function authenticate () {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// })();

export default sequelize;
export { DataTypes };
