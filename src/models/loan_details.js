"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class loan_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  loan_details.init(
    {
      uid: {
        type: DataTypes.INTEGER,
      },
      referenece_id: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.STRING,
      },
      rate_of_interest: {
        type: DataTypes.STRING,
      },
      tenure: {
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
      modelName: "loan_details",
    }
  );
  return loan_details;
};
