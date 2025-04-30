const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
dotenv.config();
app.use(cors());

const { connectToDatabase, databaz } = require("./database");

const models = require("./models");
const { User, House, Property, Flat, Transaction } = models;

const { SignUp, Login } = require("./controllers/UserController");

app.post("/", SignUp);

databaz.sync();
app.listen(3000, () => {
  console.log("Server is running on port" + 3000);
  connectToDatabase();
});
