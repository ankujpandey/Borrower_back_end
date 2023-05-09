"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("loan_details", {
			LoanId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			uid: {
				allowNull: false,
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "users",
					key: "uid",
				},
			},
			jobAssignees_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				defaultValue: "1",
			},
			Loan_state: {
				allowNull: false,
				type: Sequelize.STRING,
				defaultValue: "1200",
			},
			amountAsked: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			roiAsked: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			tenureAsked: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			amountApproved: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			minRoiApproved: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			tenureApproved: {
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
		await queryInterface.dropTable("loan_details");
	},
};
