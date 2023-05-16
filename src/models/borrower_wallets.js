"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class borrower_wallets extends Model {
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
			this.belongsTo(models.loan_details, {
				foreignKey: "LoanId",
			});
		}
	}
	borrower_wallets.init(
		{
			wallet_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			uid: {
				allowNull: true,
				type: DataTypes.INTEGER,
			},
			LoanId: {
				allowNull: true,
				type: DataTypes.INTEGER,
			},
			txn_type: {
				allowNull: true,
				type: DataTypes.STRING,
			},
			txn_flow: {
				allowNull: true,
				type: DataTypes.STRING,
			},
			wallet_balance: {
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
			modelName: "borrower_wallets",
		}
	);
	return borrower_wallets;
};
