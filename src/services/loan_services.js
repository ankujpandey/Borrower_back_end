const {
	Loan_repository,
	JobAssignee_Repo,
	Logcondition_repository,
} = require("../repository");

const EMICalculator = require("./emiCalculator_services");

class Loan_service {
	constructor() {
		this.Loan_repository = new Loan_repository();
		this.JobAssignee_repo = new JobAssignee_Repo();
		this.Logcondition_repo = new Logcondition_repository();
		this.calculateEMI = new EMICalculator();
	}

	// -----------------------------------
	// insert into table
	// -----------------------------------
	async createLoanService(data) {
		const assignedAgent = await this.JobAssignee_repo.MinJobAgent();
		data.jobAssignees_id = assignedAgent[0].jobAssignees_id;

		const updateAgent = await this.JobAssignee_repo.UpdateJobsAssigned(
			data.jobAssignees_id
		);
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

			// if (loanStatus) {
			//   const code = {
			//     cndtn_code: loanStatus.Loan_state,
			//   };

			//   loanStatus = await this.Logcondition_repo.getLogconditionRepo(code);
			return loanStatus;
			// }
		} catch (error) {
			console.log("Something went wrong in Loan services layer".magenta);
			throw { error };
		}
	}

	// -----------------------------------------
	// update loan status By Id
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

	// -----------------------------------------
	// Get loan Details with EMI calculations
	// -----------------------------------------

	async getLoanWithEMIService(ID) {
		const loanData = await this.getLoanDataService(ID);

		const loan = {};
		loan.date = loanData.dataValues.updatedAt;
		loan.principle = loanData.dataValues.amountApproved;
		loan.interest = loanData.dataValues.minRoiApproved;
		loan.time = loanData.dataValues.tenureApproved;

		console.log("service loan with EMI------->>>>", loan);
		try {
			const output = {};
			const EMI = await this.calculateEMI.getCalculations(loan);
			output.loanData = loanData;
			output.EMI = EMI;
			return output;
		} catch (error) {
			console.log("Something went wrong in Loan services layer".magenta);
			throw { error };
		}
	}
}

module.exports = Loan_service;
