'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employment_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uid: {
        type: Sequelize.INTEGER
      },
      employment_type: {
        type: Sequelize.STRING
      },
      company_name: {
        type: Sequelize.STRING
      },
      company_email: {
        type: Sequelize.STRING
      },
      monthly_income: {
        type: Sequelize.STRING
      },
      monthly_salary: {
        type: Sequelize.STRING
      },
      createdby: {
        type: Sequelize.STRING
      },
      updatedby: {
        type: Sequelize.STRING
      },
      isDeleted: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employment_details');
  }
};