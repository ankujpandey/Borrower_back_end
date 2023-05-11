const { loan_details } = require("../models/index");

class Loan_repository {
	// -----------------------------------
	// insert into table
	// -----------------------------------
	async createLoanRepo(data) {
		console.log("Loan repository");

		try {
			data.Loan_state = "1200";
			const loanUpdated = await loan_details.update(data, {
				where: {
					uid: data.uid,
				},
			});
			if (loanUpdated) {
				const loanDataInserted = await loan_details.findOne({
					where: {
						uid: data.uid,
					},
				});

				return loanDataInserted;
			} else return error;
		} catch (error) {
			console.log("Something went wrong in loan repository layer".magenta);
			throw { error };
		}
	}

	// -----------------------------------------
	// get particular loan data from the table
	// -----------------------------------------
	async getLoanDataRepo(ID) {
		console.log("Loan repository");
		try {
			const LoanStatus = await loan_details.findOne({
				where: {
					uid: ID,
					isDeleted: false,
				},
			});
			return LoanStatus;
		} catch (error) {
			console.log("Something went wrong in loan repository layer".magenta);
			throw { error };
		}
	}

	// -----------------------------------------
	// update loan status By ID
	// -----------------------------------------
	async updateLoanStatusRepo(data) {
		console.log("Loan repository");

		console.log(data);
		try {
			const updatedLoanStatus = await loan_details.update(data, {
				where: {
					uid: data.uid,
					isDeleted: false,
				},
			});
			console.log(updatedLoanStatus);
			return updatedLoanStatus;
		} catch (error) {
			console.log("Something went wrong in loan repository layer".magenta);
			throw { error };
		}
	}
}

module.exports = Loan_repository;
