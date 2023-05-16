"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("borrower_transactions", {
      txn_id: {
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
      LoanID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "loan_details",
          key: "LoanId",
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
      CreditAmount: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 0,
      },
      DebitAmount: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 0,
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
    await queryInterface.dropTable("borrower_transactions");
  },
};
