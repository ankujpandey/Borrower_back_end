const { borrower_wallets } = require("../models");

class BorrowerWallet {
	// ------------------------------------------
	//  Create wallet for user
	// ------------------------------------------

	async createWallet(data) {
		console.log("Create Wallet data----->>>", data);

		try {
			const wallet = await borrower_wallets.create(data);
			return wallet;
		} catch (error) {
			console.log(
				"Something went wrong in create Borrower Wallet Repo".magenta
			);
			throw { error };
		}
	}

	// ------------------------------------------
	//  Update user's wallet
	// ------------------------------------------
	async updateWallet(data) {
		console.log("Update Wallet data--------->>>", data);

		try {
			const wallet = await borrower_wallets.update(data, {
				where: { uid: data.uid, isDeleted: false },
			});
			return wallet;
		} catch (error) {
			console.log(
				"Something went wrong in update Borrower Wallet Repo".magenta
			);
			throw { error };
		}
	}

	// ------------------------------------------
	//  Get user's wallet data
	// ------------------------------------------
	async getWallet(id) {
		console.log("GEt Wallet data--------->>>", id);

		try {
			const wallet = await borrower_wallets.findOne({
				where: { uid: id, isDeleted: false },
			});
			return wallet;
		} catch (error) {
			console.log("Something went wrong in Get Borrower Wallet Repo".magenta);
			throw { error };
		}
	}
}

module.exports = BorrowerWallet;
