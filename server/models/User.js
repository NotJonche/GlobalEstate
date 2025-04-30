const { DataTypes, Model } = require("sequelize");
const { databaz } = require("../database");

class User extends Model {}
User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("user", "agent", "admin"),
      defaultValue: "user",
    },
  },
  {
    sequelize: databaz,
    modelName: "User",
    tableName: "users",
  }
);

module.exports = User;
