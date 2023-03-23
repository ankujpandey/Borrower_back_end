"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class users extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	users.init(
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
			email: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			password: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			isActive: {
				allowNull: false,
				type: DataTypes.BOOLEAN,
				defaultValue: true,
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
			modelName: "users",
		}
	);
	return users;
};
