const { DataTypes, Model } = require("sequelize");
const { databaz } = require("../database");

class Appointment extends Model {}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    property_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    scheduled_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "confirmed", "cancelled"),
      defaultValue: "pending",
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: databaz,
    modelName: "Appointment",
    tableName: "appointments",
  }
);

// Associations
Appointment.associate = (models) => {
  Appointment.belongsTo(models.User, { foreignKey: "user_id" });
  Appointment.belongsTo(models.Property, { foreignKey: "property_id" });
};

module.exports = Appointment;
