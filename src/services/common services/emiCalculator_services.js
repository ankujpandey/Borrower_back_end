const { EMI_calculator } = require("../../repository");
const colors = require("colors");

class EMI_calculator_services {
	constructor() {
		this.EMI_repository = new EMI_calculator();
	}

	async getCalculations(data) {
		try {
			let resultObj = {};
			const emi =
				(await Math.round(this.EMI_repository.calcEMI(data) * 100)) / 100;
			const totalAmount =
				(await Math.round(this.EMI_repository.calcTotalAmount(data) * 100)) /
				100;
			const totalInterest =
				(await Math.round(this.EMI_repository.calcTotalInterest(data) * 100)) /
				100;
			const table = await this.EMI_repository.clacClosingBalence(data);

			resultObj.EMI = emi;
			resultObj.total_Amount = totalAmount;
			resultObj.total_Interest = totalInterest;
			resultObj.table = table;

			return resultObj;
		} catch (error) {
			console.log("Something went wrong in EMI calculator services".magenta);
			throw { error };
		}
	}

	// async getTable(data) {
	// 	try {
	// 		const table = await this.EMI_repository.clacClosingBalence(data);
	// 		return table;
	// 	} catch (error) {
	// 		console.log("Something went wrong in EMI calculator services".magenta);
	// 		throw { error };
	// 	}
	// }
}

module.exports = EMI_calculator_services;
