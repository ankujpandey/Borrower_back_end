"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_info extends Model {
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
  user_info.init(
    {
      uid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      contact: {
        allowNull: true,
        type: DataTypes.BIGINT,
      },
      pan: {
        unique: true,
        allowNull: true,
        type: DataTypes.STRING,
      },
      aadhaar: {
        unique: true,
        allowNull: true,
        type: DataTypes.BIGINT,
      },
      pinCode: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      state: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      city: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      postOffice: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      createdBy: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: "user",
      },
      updatedBy: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: "user",
      },
      isDeleted: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "user_info",
    }
  );
  return user_info;
};
