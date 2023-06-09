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
      this.belongsTo(models.users, {
        foreignKey: "uid",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  loan_details.init(
    {
      LoanId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },

      jobAssignees_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: "1",
      },
      Loan_state: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "1000",
      },
      amountAsked: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      roiAsked: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      tenureAsked: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      amountApproved: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      minRoiApproved: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      tenureApproved: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      createdBy: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "user",
      },
      updatedBy: {
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
      modelName: "loan_details",
    }
  );
  return loan_details;
};
