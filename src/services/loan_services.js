const { Loan_repository, JobAssignee_Repo } = require("../repository");

class Loan_service {
  constructor() {
    this.Loan_repository = new Loan_repository();
    this.JobAssignee_repo = new JobAssignee_Repo();
  }

  // -----------------------------------
  // insert into table
  // -----------------------------------
  async createLoanService(data) {
    console.log("service loan");
    const assignedAgent = await this.JobAssignee_repo.MinJobAgent();
    data.jobAssignees_id = assignedAgent[0].jobAssignees_id;
    console.log("data in service", data);
    this.JobAssignee_repo.UpdateJobsAssigned(data.jobAssignees_id);

    try {
      const createLoanData = await this.Loan_repository.createLoanRepo(data);
      return createLoanData;
    } catch (error) {
      console.log("Something went wrong in Loan services layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------------
  // get particular loan data from the table
  // -----------------------------------------

  async getLoanDataService(ID) {
    console.log("service loan");

    try {
      const LoanStatus = await this.Loan_repository.getLoanDataRepo(ID);

      return LoanStatus;
    } catch (error) {
      console.log("Something went wrong in Loan services layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------------
  // get loan status
  // -----------------------------------------

  async getLoanStatusService(id) {
    try {
      let loanStatus = await this.Loan_repository.getLoanDataRepo(id);
      console.log("loanStatus---", loanStatus.Loan_state);

      // loanStatus = await this.
    } catch (error) {
      console.log("Something went wrong in Loan services layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------------
  // update loan status
  // -----------------------------------------

  async updateLoanStatusService(data) {
    console.log("service loan");

    try {
      const updatedLoanStatus = await this.Loan_repository.updateLoanStatusRepo(
        data
      );

      return updatedLoanStatus;
    } catch (error) {
      console.log("Something went wrong in Loan services layer".magenta);
      throw { error };
    }
  }
}

module.exports = Loan_service;
