"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class bank_details extends Model {
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
	bank_details.init(
		{
			bankId: {
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
			account_number: {
				allowNull: true,
				type: DataTypes.STRING,
			},
			ifsc_code: {
				allowNull: true,
				type: DataTypes.STRING,
			},
			bank_name: {
				allowNull: true,
				type: DataTypes.STRING,
			},
			branch_name: {
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
			modelName: "bank_details",
		}
	);
	return bank_details;
};
