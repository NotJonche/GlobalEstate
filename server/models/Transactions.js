const { DataTypes, Model } = require("sequelize");
const { databaz } = require("../database");

class Transactions extends Model {}
Transactions.init(
  {
    transaction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    buyer_id: DataTypes.INTEGER,
    property_id: DataTypes.INTEGER,
    sale_price: DataTypes.DECIMAL,
    transaction_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: databaz,
    modelName: "Transactions",
    tableName: "transactions",
  }
);

Transactions.associate = (models) => {
  Transactions.belongsTo(models.User, { foreignKey: "buyer_id" });
  Transactions.belongsTo(models.Property, { foreignKey: "property_id" });
};

module.exports = Transactions;
