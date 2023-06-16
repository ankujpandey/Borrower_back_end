"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class log_condition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  log_condition.init(
    {
      cndtn_name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      cndtn_code: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "log_conditions",
    }
  );
  return log_condition;
};
