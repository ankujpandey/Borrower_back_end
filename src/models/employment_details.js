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
      this.belongsTo(models.users, {
        foreignKey: "uid",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  employment_details.init(
    {
      Empid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uid: {
        unique: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      employment_type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      company_name: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: true,
        type: DataTypes.STRING,
      },

      business_nature: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      monthly_income: {
        allowNull: true,
        type: DataTypes.STRING,
      },

      createdby: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "user",
      },
      updatedby: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "user",
      },
      isDeleted: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "employment_details",
    }
  );
  return employment_details;
};
