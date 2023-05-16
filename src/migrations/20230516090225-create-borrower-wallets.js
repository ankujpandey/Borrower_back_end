"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("borrower_wallets", {
			wallet_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			uid: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "users",
					key: "uid",
				},
			},
			LoanId: {
				allowNull: true,
				type: Sequelize.INTEGER,
				references: {
					model: "loan_details",
					key: "LoanId",
				},
			},
			txn_type: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			txn_flow: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			wallet_balance: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			createdBy: {
				allowNull: false,
				type: Sequelize.STRING,
				defaultValue: "user",
			},
			updatedBy: {
				allowNull: false,
				type: Sequelize.STRING,
				defaultValue: "user",
			},
			isDeleted: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("borrower_wallets");
	},
};
