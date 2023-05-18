"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pool_transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pool_transaction.init(
    {
      pool_txn_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      poolId: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      txn_type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      txn_flow: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      credit_Amount: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 0,
      },
      debit_Amount: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 0,
      },
      running_Amount: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 0,
      },
      createdBy: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "admin",
      },
      updatedBy: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "admin",
      },
      isDeleted: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "pool_transaction",
    }
  );
  return pool_transaction;
};
