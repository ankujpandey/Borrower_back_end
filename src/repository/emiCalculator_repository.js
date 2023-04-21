class EMI_calculator {
	// async calcTotalAmount(data){
	//     try {
	//         const totalAmount =
	//     } catch (error) {

	//     }
	// }

	async calcEMI(data) {
		try {
			const emi =
				(data.principle *
					data.interest *
					Math.pow(1 + data.interest, data.time)) /
				(Math.pow(1 + data.interest, data.time) - 1);
			return emi;
		} catch (error) {
			console.log(
				"Something went wrong in repository layer in EMI Calculation.".magenta
			);
			throw { error };
		}
	}
}
