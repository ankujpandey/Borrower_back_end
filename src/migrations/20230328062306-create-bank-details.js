"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bank_details", {
      bankId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uid: {
        unique: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "uid",
        },
      },
      account_number: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      ifsc_code: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      bank_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      branch_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdby: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "user",
      },
      updatedby: {
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
    await queryInterface.dropTable("bank_details");
  },
};
