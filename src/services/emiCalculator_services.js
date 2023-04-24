const { EMI_calculator } = require("../repository");
const colors = require("colors");

class EMI_calculator_services {
	constructor() {
		this.EMI_repository = new EMI_calculator();
	}

	async getCalculations(data) {
		try {
			let resultObj = {};
			const emi = await Math.round(this.EMI_repository.calcEMI(data));
			const totalAmount = await Math.round(
				this.EMI_repository.calcTotalAmount(data)
			);
			const totalInterest = await Math.round(
				this.EMI_repository.calcTotalInterest(data)
			);

			resultObj.EMI = emi;
			resultObj.total_Amount = totalAmount;
			resultObj.total_Interest = totalInterest;

			return resultObj;
		} catch (error) {
			console.log("Something went wrong in EMI calculator services".magenta);
			throw { error };
		}
	}

	// async getTotalAmountCalc(data) {
	// 	try {
	// 		return result;
	// 	} catch (error) {
	// 		console.log("Something went wrong in EMI calculator services".magenta);
	// 		throw { error };
	// 	}
	// }

	// async getTotalInterestCalc(data) {
	// 	try {
	// 		const result = await this.EMI_repository.calcTotalInterest(data);
	// 		return result;
	// 	} catch (error) {
	// 		console.log("Something went wrong in EMI calculator services".magenta);
	// 		throw { error };
	// 	}
	// }
}

module.exports = EMI_calculator_services;
