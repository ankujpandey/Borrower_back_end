"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("pool_tables", {
			poolId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			pool_type: {
				allowNull: false,
				type: Sequelize.STRING,
			},

			available_balance: {
				allowNull: false,
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
		await queryInterface.dropTable("pool_tables");
	},
};
