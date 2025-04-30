const User = require("./User");
const House = require("./House");
const Property = require("./Property");
const Flat = require("./Flat");
const Transaction = require("./Transactions");

const models = {
  User,
  House,
  Property,
  Flat,
  Transaction,
};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = models;
