const { DataTypes, Model } = require("sequelize");
const { databaz } = require("../database");

class Role extends Model {}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // e.g., 'admin', 'user', 'moderator'
    },
  },
  {
    sequelize: databaz,
    modelName: "Role",
    tableName: "roles",
  }
);

module.exports = Role;
