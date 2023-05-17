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
      PoolTxn_id: {
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
      CreditAmount: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 0,
      },
      DebitAmount: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "pool_transaction",
    }
  );
  return pool_transaction;
};
