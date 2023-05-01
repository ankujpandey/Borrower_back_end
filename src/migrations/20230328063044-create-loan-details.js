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
      },
      Loan_state: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "1200",
      },
      amount: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      rate_of_interest: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      tenure: {
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
