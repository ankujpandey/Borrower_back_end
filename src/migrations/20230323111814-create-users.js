"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      uid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // firstName: {
      // 	allowNull: false,
      // 	type: Sequelize.STRING,
      // },
      // lastName: {
      // 	allowNull: true,
      // 	type: Sequelize.STRING,
      // },
      email: {
        //we will make it uniqe once we completed.
        unique: true,
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      isActive: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    await queryInterface.dropTable("users");
  },
};
