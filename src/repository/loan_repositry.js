const { loan_details } = require("../models/index");

class Loan_repository {
	// -----------------------------------
	// insert into table
	// -----------------------------------
	async createLoanRepo(data) {
		console.log("Loan repositry");
		try {
			const createLoanData = await loan_details.create(data);
			return createLoanData;
		} catch (error) {
			console.log("Something went wrong in loan repository layer".magenta);
			throw { error };
		}
	}
}

module.exports = Loan_repository;
