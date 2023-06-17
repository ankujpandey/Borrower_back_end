"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("JobAssignees", [
      {
        name: "No Agent",
        email: "default@gmail.com",
        password: "Default@123",
        jobsAssigned: 0,
        isDeleted: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Agent 1",
        email: "agent1@gmail.com",
        password: "Agent1@123",
        jobsAssigned: 0,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Agent 2",
        email: "agent2@gmail.com",
        password: "Agent2@123",
        jobsAssigned: 0,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Agent 3",
        email: "agent3@gmail.com",
        password: "Agent3@123",
        jobsAssigned: 0,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Agent 4",
        email: "agent4@gmail.com",
        password: "Agent4@123",
        jobsAssigned: 0,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Agent 5",
        email: "agent5@gmail.com",
        password: "Agent5@123",
        jobsAssigned: 0,
        isDeleted: false,
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
