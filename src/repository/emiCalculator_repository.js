const colors = require("colors");

// --------------------------------------------
//	EMI calculation repository
// --------------------------------------------

class EMI_calculator {
	// --------------------------------------------
	//	Calculating monthly EMI
	// --------------------------------------------
	calcEMI(data) {
		try {
			const emi =
				(((data.principle * data.interest) / 1200) *
					Math.pow(1 + data.interest / 1200, data.time)) /
				(Math.pow(1 + data.interest / 1200, data.time) - 1);
			return emi;
		} catch (error) {
			console.log(
				"Something went wrong in repository layer in EMI Calculation.".magenta
			);
			throw { error };
		}
	}

	// --------------------------------------------
	//	Calculating total amaunt
	// --------------------------------------------
	calcTotalAmount(data) {
		try {
			const totalAmount = this.calcEMI(data) * data.time;
			return totalAmount;
		} catch (error) {
			console.log(
				"Something went wrong in repository layer in Total Amount Calculation."
					.magenta
			);
			throw { error };
		}
	}

	// --------------------------------------------
	//	Calculating total Interest
	// --------------------------------------------
	calcTotalInterest(data) {
		try {
			const totalInterest = this.calcEMI(data) * data.time - data.principle;
			return totalInterest;
		} catch (error) {
			console.log(
				"Something went wrong in repository layer in Total Interest Calculation."
					.magenta
			);
			throw { error };
		}
	}

	calcInterestPerMonth(principle, interest) {
		try {
			const interestPerMonth = principle * (interest / 1200);
			return interestPerMonth;
		} catch (error) {
			console.log(
				"Something went wrong in repository layer in Total Interest Calculation."
					.magenta
			);
			throw { error };
		}
	}

	clacClosingBalence(data) {
		// try {
		let table = [];

		let closingBalence = data.principle;
		let i = 0;

		const emi = this.calcEMI(data);
		while (closingBalence > 0) {
			let tableContent = {};
			tableContent.installmentNo = i + 1;
			if (Math.round(closingBalence * 100) / 100 === 0) {
				break;
			} else {
				tableContent.openingBalence = Math.round(closingBalence * 100) / 100;
				let interest = this.calcInterestPerMonth(closingBalence, data.interest);
				tableContent.interestPerMonth = Math.round(interest * 100) / 100;
				let principle = emi - interest;
				// console.log("EMI------------->>>>>>>", emi);
				closingBalence = closingBalence - principle;

				tableContent.closingBalence = Math.round(closingBalence * 100) / 100;
				tableContent.principle = Math.round(principle * 100) / 100;
				console.log("cloing Balence------------->>>>>>>", closingBalence);
				table[i] = tableContent;
			}

			i++;
		}

		// console.log("table------------->>>>>>>", table);
		return table;
		// } catch (error) {
		// 	console.log(
		// 		"Something went wrong in repository layer in table Calculation.".magenta
		// 	);
		// 	throw { error };
		// }
	}
}

module.exports = EMI_calculator;
