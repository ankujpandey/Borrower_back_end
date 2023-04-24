const { EMI_calculator_services } = require("../services");

const EmiCalcService = new EMI_calculator_services();

const getEmiCalculations = async (req, res) => {
	try {
		const emi = await EmiCalcService.getCalculations(req.body);

		return res.status(201).json({
			data: emi,
			success: true,
			message: "Successfully Inserted User Info",
			err: {},
		});
	} catch (error) {
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able to insert into User Info",
			err: error,
		});
	}
};

module.exports = {
	getEmiCalculations,
};
