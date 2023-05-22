"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class pool_table extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	pool_table.init(
		{
			poolId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			pool_type: {
				allowNull: false,
				type: DataTypes.STRING,
			},

			available_balance: {
				allowNull: false,
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
			modelName: "pool_table",
		}
	);
	return pool_table;
};
