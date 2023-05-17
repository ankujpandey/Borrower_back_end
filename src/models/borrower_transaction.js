"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class borrower_transaction extends Model {
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
				onDelete: "CASCADE",
				onUpdate: "CASCADE",
			});
		}
	}
	borrower_transaction.init(
		{
			txn_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			uid: {
				allowNull: true,
				type: DataTypes.INTEGER,
			},
			LoanID: {
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
			modelName: "borrower_transaction",
		}
	);
	return borrower_transaction;
};
