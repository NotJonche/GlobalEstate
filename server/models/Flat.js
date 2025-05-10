const { DataTypes, Model } = require("sequelize");
const { databaz } = require("../database");

class Flat extends Model {}
Flat.init(
  {
    property_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    floor_number: DataTypes.INTEGER,
    total_floors: DataTypes.INTEGER,
    has_elevator: DataTypes.BOOLEAN,
    has_garage: DataTypes.BOOLEAN,
  },
  {
    sequelize: databaz,
    modelName: "Flat",
    tableName: "flats",
  }
);
Flat.associate = (models) => {
  Flat.belongsTo(models.Property, { foreignKey: "property_id" });
};
module.exports = Flat;
