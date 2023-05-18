const { borrowerTxn_Repo } = require("../repository");
const { BorrowerWallet } = require("../repository");

class borrowerTxn_Service {
	constructor() {
		this.borrowerTxnRepo = new borrowerTxn_Repo();
		this.borrowerwalletRepo = new BorrowerWallet();
	}

	// -------------------------------------------
	//  debit and credit + insert data into table
	// -------------------------------------------

	async createTransaction(data) {
		console.log("Borrower Transaction Service");

		try {
			const wallet = await this.borrowerwalletRepo.getWallet(data.uid);

			// console.log("wallet balance", wallet?.dataValues, data);

			if (data?.credit_Amount) {
				data.txn_flow = "credit";
				var walletBalance =
					parseFloat(wallet?.dataValues?.wallet_balance) +
					parseFloat(data?.credit_Amount);
			} else if (
				parseFloat(wallet?.dataValues?.wallet_balance) <
				parseFloat(data?.debit_Amount)
			) {
				console.log("less money detected.");
				throw new Error("Please Add Money!");
			} else {
				data.txn_flow = "debit";
				var walletBalance =
					parseFloat(wallet?.dataValues?.wallet_balance) -
					parseFloat(data?.debit_Amount);
			}

			data.running_Amount = walletBalance;

			// await console.log(
			// 	"wallet balance",
			// 	wallet?.dataValues,
			// 	walletBalance,
			// 	data
			// );
			const transaction = await this.borrowerTxnRepo.createTransaction(data);
			data.wallet_balance = walletBalance;
			const addWallet = await this.borrowerwalletRepo.updateWallet(data);
			return transaction;
		} catch (error) {
			console.log(
				"Something went wrong in Borrower Transaction services layer".magenta
			);
			console.log(error.message);
			throw { error };
		}
	}

	// ---------------------------------------------
	// finding transactions of a particular user
	// ---------------------------------------------

	async findUserTransaction(uid) {
		console.log("Borrower Transaction Service");

		try {
			const transactions = await this.borrowerTxnRepo.findUserTransaction(uid);
			return transactions;
		} catch (error) {
			console.log(
				"Something went wrong in Borrower Transaction services layer".magenta
			);

			throw { error };
		}
	}
}

module.exports = borrowerTxn_Service;
