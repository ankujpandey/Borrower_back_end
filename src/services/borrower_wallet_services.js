const { BorrowerWallet } = require("../repository");

class BorrowerWallet_service {
	constructor() {
		this.borrowerwalletRepo = new BorrowerWallet();
	}

	// -------------------------------------
	//  insert into borrower table
	// -------------------------------------

	async createWalletServices(data) {
		console.log("Borrower create wallet Service---->>>", data);

		try {
			const wallet = await this.borrowerwalletRepo.createWallet(data);
			return wallet;
		} catch (error) {
			console.log(
				"Something went wrong in create Borrower wallet services layer".magenta
			);
			throw { error };
		}
	}

	// -------------------------------------
	//  update borrower table
	// -------------------------------------

	async updateWalletServices(data) {
		console.log("Borrower update wallet Service---->>>", data);

		try {
			const wallet = await this.borrowerwalletRepo.updateWallet(data);
			return wallet;
		} catch (error) {
			console.log(
				"Something went wrong in update Borrower wallet services layer".magenta
			);
			throw { error };
		}
	}

	// -------------------------------------
	//  get borrower table
	// -------------------------------------

	async getWalletServices(id) {
		console.log("Borrower get wallet Service---->>>", id);

		try {
			const wallet = await this.borrowerwalletRepo.getWallet(id);
			return wallet;
		} catch (error) {
			console.log(
				"Something went wrong in get Borrower wallet services layer".magenta
			);
			throw { error };
		}
	}
}

module.exports = BorrowerWallet_service;
