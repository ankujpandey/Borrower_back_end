"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("pool_transactions", {
			pool_txn_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			poolId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "pool_tables",
					key: "poolId",
				},
			},
			txn_type: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			txn_flow: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			credit_Amount: {
				allowNull: false,
				type: Sequelize.STRING,
				defaultValue: 0,
			},
			debit_Amount: {
				allowNull: false,
				type: Sequelize.STRING,
				defaultValue: 0,
			},
			running_Amount: {
				allowNull: false,
				type: Sequelize.STRING,
				defaultValue: 0,
			},
			createdBy: {
				allowNull: false,
				type: Sequelize.STRING,
				defaultValue: "admin",
			},
			updatedBy: {
				allowNull: false,
				type: Sequelize.STRING,
				defaultValue: "admin",
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
		await queryInterface.dropTable("pool_transactions");
	},
};
