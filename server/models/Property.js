const { DataTypes, Model } = require("sequelize");
const { databaz } = require("../database");

class Property extends Model {}
Property.init(
  {
    property_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: {
      type: DataTypes.ENUM("house", "flat"),
    },
    price: DataTypes.DECIMAL,
    location: DataTypes.STRING,
    area_sqft: DataTypes.FLOAT,
    listed_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    is_available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize: databaz,
    modelName: "Property",
    tableName: "property",
  }
);
// Property.associate = (models) => {
//   Property.hasMany(models.PropertyImage, { foreignKey: "property_id" });
// };

module.exports = Property;
