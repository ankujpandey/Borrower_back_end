"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bank_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bank_details.init(
    {
      uid: {
        type: DataTypes.INTEGER,
      },
      account_number: {
        type: DataTypes.STRING,
      },
      ifsc_code: {
        type: DataTypes.STRING,
      },
      bank_name: {
        type: DataTypes.STRING,
      },
      branch_name: {
        type: DataTypes.STRING,
      },
      createdby: {
        type: DataTypes.STRING,
      },
      updatedby: {
        type: DataTypes.STRING,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "bank_details",
    }
  );
  return bank_details;
};
