"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobAssignees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobAssignees.init(
    {
      jobAssignees_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      jobsAssigned: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdBy: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: "agent",
      },
      updatedBy: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: "agent",
      },
      isDeleted: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "JobAssignees",
    }
  );
  return JobAssignees;
};
