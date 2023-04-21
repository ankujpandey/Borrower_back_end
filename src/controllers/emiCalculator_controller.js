const getEmiCalculations = async (req, res) => {
	try {
		const user = await usersService.getEmiCalc(req.body);
		return res.status(201).json({
			data: user,
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
