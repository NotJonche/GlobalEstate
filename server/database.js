const Sequelize = require("sequelize");
require("dotenv").config();

const databaz = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  "",
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: console.log,
  }
);

let connectToDatabase = async () => {
  try {
    await databaz.authenticate();
    console.log("connected to the database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { databaz, connectToDatabase };
