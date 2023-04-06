"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoleTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoleTable.init(
    {
      RoleID: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
      Role: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "RoleTable",
    }
  );
  return RoleTable;
};
