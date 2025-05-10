const User = require("./User");
const House = require("./House");
const Property = require("./Property");
const Flat = require("./Flat");
const Transaction = require("./Transactions");
const Appointment = require("./Appointment");
const Role = require("./Roles");

User.belongsTo(Role, { foreignKey: "role_id" });
Role.hasMany(User, { foreignKey: "role_id" });

const models = {
  User,
  House,
  Property,
  Flat,
  Transaction,
  Appointment,
  Role,
};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = models;
