const { JobAssignees } = require("../models");

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

  // -----------------------------------
  // get all job assignees data from table
  // -----------------------------------

  async getAllJobAssignees() {
    try {
      const jobAssignees = await JobAssignees.findAll({
        where: {
          isDeleted: false,
        },
      });
      console.log(jobAssignees);
      return jobAssignees;
    } catch (error) {
      console.log("Something went wrong in repository layer".magenta);
      throw { error };
    }
  }
}

module.exports = JobAssignee_Repo;
