const { DataTypes, Model } = require("sequelize");
const { databaz } = require("../database");

class House extends Model {}
House.init(
  {
    property_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    lot_size: DataTypes.FLOAT,
    has_garden: DataTypes.BOOLEAN,
  },
  {
    sequelize: databaz,
    modelName: "House",
    tableName: "houses",
  }
);

House.associate = (models) => {
  House.belongsTo(models.Property, { foreignKey: "property_id" });
};

module.exports = House;
