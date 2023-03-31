"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class employment_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employment_details.init(
    {
      uid: {
        type: DataTypes.INTEGER,
      },
      employment_type: {
        type: DataTypes.STRING,
      },
      company_name: {
        type: DataTypes.STRING,
      },
      company_email: {
        type: DataTypes.STRING,
      },
      monthly_income: {
        type: DataTypes.STRING,
      },
      monthly_salary: {
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
      modelName: "employment_details",
    }
  );
  return employment_details;
};
