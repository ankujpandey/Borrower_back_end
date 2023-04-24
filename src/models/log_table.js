'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Log_table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Log_table.init({
    uid: DataTypes.INTEGER,
    task: DataTypes.STRING,
    status: DataTypes.STRING,
    assign: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Log_table',
  });
  return Log_table;
};