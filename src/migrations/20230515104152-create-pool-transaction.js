"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pool_transactions", {
      PoolTxn_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      poolId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // onDelete: "CASCADE",
        // references: {
        //   model: "users",
        //   key: "uid",
        // },
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
