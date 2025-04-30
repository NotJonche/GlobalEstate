// const { databaz } = require("../database");
// const { DataTypes } = require("sequelize/lib/sequelize");

// class PropertyImage extends Model {}
// PropertyImage.init(
//     {
//       image_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       property_id: DataTypes.INTEGER,
//       image_url: DataTypes.STRING,
//       uploaded_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
//     },
//     {
//       timestamps: false,
//       tableName: "property_images",
//     }
//     {
//       sequelize: database,
//       modelName: "PropertyImage",
//       tableName: "propertyimage",
//     }
//   );

//   PropertyImage.associate = (models) => {
//     PropertyImage.belongsTo(models.Property, { foreignKey: "property_id" });
//   };

//   return PropertyImage;
