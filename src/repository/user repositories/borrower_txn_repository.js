const { borrower_transaction } = require("../../models");

class borrowerTxn_Repo {
	// -----------------------------------
	// inserting in table
	// -----------------------------------

	async createTransaction(data) {
		console.log("Borrower Transaction Repository".magenta);
		console.log(data);

		try {
			const transaction = await borrower_transaction.create(data);
			return transaction;
		} catch (error) {
			console.log("Something went wrong in Borrower Transaction Repo".magenta);
			throw { error };
		}
	}

	// ---------------------------------------------
	// finding transactions of a particular user
	// ---------------------------------------------

	async findUserTransaction(uid) {
		console.log("Borrower Transaction Repository");

		try {
			const transactions = await borrower_transaction.findAll({
				where: {
					uid: uid,
					isDeleted: false,
				},
			});
			return transactions;
		} catch (error) {
			console.log(
				"Something went wrong in Borrower Transaction Repository layer".magenta
			);

			throw { error };
		}
	}

	// ---------------------------------------------------------------
	// finding transactions of a particular user of particular loan
	// ---------------------------------------------------------------

	async findUserLoanTransaction(uid, loanId) {
		console.log("Borrower Transaction Repository");

		try {
			const transactions = await borrower_transaction.findAll({
				where: {
					uid: uid,
					LoanID: loanId,
					isDeleted: false,
				},
			});
			return transactions;
		} catch (error) {
			console.log(
				"Something went wrong in Borrower Transaction Repository layer".magenta
			);

			throw { error };
		}
	}
}

module.exports = borrowerTxn_Repo;
