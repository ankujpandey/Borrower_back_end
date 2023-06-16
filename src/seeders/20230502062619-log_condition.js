"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("log_conditions", [
      {
        cndtn_name: "user created",
        cndtn_code: "1000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cndtn_name: "registration completed",
        cndtn_code: "1100",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cndtn_name: "loan applied",
        cndtn_code: "1200",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cndtn_name: "agent review",
        cndtn_code: "1300",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cndtn_name: "loan proposed by agent and agreement initiated",
        cndtn_code: "1400",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cndtn_name: "loan and agreement accepted by user",
        cndtn_code: "1500",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cndtn_name: "loan disbursed",
        cndtn_code: "1600",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cndtn_name: "loan repaid",
        cndtn_code: "1700",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cndtn_name: "loan and agreement rejected by user",
        cndtn_code: "-1000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
