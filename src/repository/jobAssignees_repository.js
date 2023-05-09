const { JobAssignees, sequelize, loan_details } = require("../models");

const { Op } = require("sequelize");

class JobAssignee_Repo {
  // -----------------------------------
  // inserting in table
  // -----------------------------------

  async createJobAssigneeRepo(data) {
    console.log("Job Assignee repository");
    try {
      const JobAssigneeData = await JobAssignees.create(data);
      return JobAssigneeData;
    } catch (error) {
      console.log(
        "Something went wrong in Job Assignee Repository Layer".magenta
      );
      throw { error };
    }
  }

  // -----------------------------------
  // get particular data from table
  // -----------------------------------
  async getJobAssigneeInfo(ID) {
    try {
      const JobAssigneeInfo = await JobAssignees.findOne({
        where: {
          jobAssignees_id: ID,
          isDeleted: false,
        },
      });
      console.log(JobAssigneeInfo);
      return JobAssigneeInfo;
    } catch (error) {
      console.log("Something went wrong in repository layer".magenta);
      throw { error };
    }
  }

  // ---------------------------------------
  // get all job assignees data from table
  // ---------------------------------------

  async getAllJobAssignees() {
    try {
      const jobAssignees = await JobAssignees.findAll({
        where: {
          isDeleted: false,
          jobAssignees_id: {
            [Op.ne]: 1,
          },
        },
      });
      console.log(jobAssignees);
      return jobAssignees;
    } catch (error) {
      console.log("Something went wrong in repository layer".magenta);
      throw { error };
    }
  }

  // -------------------------------------------
  // order agents by no. of jobs assigned
  // -------------------------------------------

  async AssignAgents() {
    try {
      const Agents = await JobAssignees.findAll({
        where: {
          isDeleted: false,
          jobAssignees_id: {
            [Op.ne]: 1,
          },
        },
        order: [["jobsAssigned", "ASC"]],
      });
      console.log(Agents);
      return Agents;
    } catch (error) {
      console.log("Something went wrong in repository layer".magenta);
      throw { error };
    }
  }

  // -------------------------------------------
  // find agent with min no. of jobs
  // -------------------------------------------

  async MinJobAgent() {
    try {
      const [Agent, metadata] = await sequelize.query(
        `SELECT * from JobAssignees where jobsAssigned=(SELECT min(jobsAssigned) FROM JobAssignees WHERE jobAssignees_id <> 1) AND isDeleted = false`
      );

      console.log("Agent available", Agent);
      return Agent;
    } catch (error) {
      console.log("Something went wrong in repository layer".magenta);
      throw { error };
    }
  }

  // -------------------------------------------
  // increment no. of jobs
  // -------------------------------------------

  async UpdateJobsAssigned(id) {
    try {
      const response = JobAssignees.increment(
        { jobsAssigned: 1 },
        { where: { jobAssignees_id: id } }
      );
      return response;
    } catch (error) {
      console.log("Something went wrong in repository layer".magenta);
      throw { error };
    }
  }
}

module.exports = JobAssignee_Repo;
