const colors = require("colors");

// --------------------------------------------
//	EMI calculation repository
// --------------------------------------------

class EMI_calculator {
	// --------------------------------------------
	//	Calculating monthly EMI
	// --------------------------------------------
	calcEMI(data) {
		console.log("data in EMI repo-------------------->>>>>>>", data);
		try {
			const emi =
				(((data.principle * data.interest) / 1200) *
					Math.pow(1 + data.interest / 1200, data.time * 12)) /
				(Math.pow(1 + data.interest / 1200, data.time * 12) - 1);
			console.log(emi);
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
			const totalAmount = this.calcEMI(data) * (data.time * 12);
			console.log(totalAmount);
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
			const totalInterest =
				this.calcEMI(data) * data.time * 12 - data.principle;
			console.log(totalInterest);
			return totalInterest;
		} catch (error) {
			console.log(
				"Something went wrong in repository layer in Total Interest Calculation."
					.magenta
			);
			throw { error };
		}
	}
}

module.exports = EMI_calculator;
