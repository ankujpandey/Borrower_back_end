"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class company_table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  company_table.init(
    {
      company_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      company_name: {
        type: DataTypes.STRING,
      },
      company_domain: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "company_table",
    }
  );
  return company_table;
};
