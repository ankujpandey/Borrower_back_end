"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Log_table extends Model {
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
  Log_table.init(
    {
      Logid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      LoanId: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      old_state: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      current_state: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      assigned: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      user_ip: {
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
      modelName: "Log_table",
    }
  );
  return Log_table;
};
