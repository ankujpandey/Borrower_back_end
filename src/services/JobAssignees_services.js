const { JobAssignee_Repo } = require("../repository");

class JobAssignees_service {
  constructor() {
    this.JobAssignees_repository = new JobAssignee_Repo();
  }

  // -----------------------------------
  // insert into table
  // -----------------------------------

  async createJobAssigneesService(data) {
    console.log("Job Assignees service");

    try {
      const JobAssigneeServiceData =
        await this.JobAssignees_repository.createJobAssigneeRepo(data);
      return JobAssigneeServiceData;
    } catch (error) {
      console.log("Something went wrong in JobAssignee services layer".magenta);
      throw { error };
    }
  }

  // ---------------------------------------
  // get particular JobAssignee details
  // ---------------------------------------

  async getJobAssigneesService(ID) {
    console.log("Job Assignees service");

    try {
      const JobAssigneesServiceData =
        await this.JobAssignees_repository.getJobAssigneeInfo(ID);
      return JobAssigneesServiceData;
    } catch (error) {
      console.log(
        "Something went wrong in JobAssignees services layer".magenta
      );
      throw { error };
    }
  }

  // -----------------------------------
  // get all Job Assignees from table
  // -----------------------------------

  async getAllJobAssigneesService() {
    try {
      const result = await this.JobAssignees_repository.getAllJobAssignees();
      return result;
    } catch (error) {
      console.log("Something went wrong in Job Assignees services".magenta);
      throw { error };
    }
  }
}

module.exports = JobAssignees_service;
