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
				onUpdate: "CASCADE",
				type: Sequelize.STRING,
			},
			lastName: {
				allowNull: true,
				onUpdate: "CASCADE",
				type: Sequelize.STRING,
			},
			contact: {
				allowNull: true,
				type: Sequelize.BIGINT,
			},

			pan: {
				//we will make it uniqe once we completed.
				unique: false,
				allowNull: true,
				type: Sequelize.STRING,
			},
			aadhaar: {
				//we will make it uniqe once we completed.
				unique: false,
				allowNull: true,
				type: Sequelize.BIGINT,
			},
			pinCode: {
				allowNull: true,
				type: Sequelize.INTEGER,
			},
			state: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			city: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			postOffice: {
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
		await queryInterface.dropTable("user_infos");
	},
};
