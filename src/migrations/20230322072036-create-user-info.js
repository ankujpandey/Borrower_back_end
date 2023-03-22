"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("user_infos", {
			uid: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			firstName: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			lastName: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			contact: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			pan: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			aadhaar: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			pin: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			state: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			city: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			createdOn: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			createdBy: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			updatedOn: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedBy: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			isDeletedOn: {
				allowNull: false,
				type: Sequelize.DATE,
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
		await queryInterface.dropTable("user_infos");
	},
};
