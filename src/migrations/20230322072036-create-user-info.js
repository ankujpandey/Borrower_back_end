"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("user_infos", {
			uid: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,

				onDelete: "CASCADE",
				references: {
					model: "users",
					key: "uid",
				},

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
				type: Sequelize.BIGINT,
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
				type: Sequelize.BIGINT,
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
		await queryInterface.dropTable("user_infos");
	},
};
