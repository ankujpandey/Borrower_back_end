const { UserInfo_service } = require("../services");

const userInfoService = new UserInfo_service();

// -----------------------------------
// insert into table
// -----------------------------------
const create = async (req, res) => {
	try {
		const userInfo = await userInfoService.createUserInfo(req.body);
		return res.status(201).json({
			data: userInfo,
			success: true,
			message: "Successfully Inserted User Info",
			err: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able to insert into User Info",
			err: error,
		});
		throw { error };
	}
};

const destroy = async (req, res) => {
	try {
		const response = await userInfoService.deleteUserInfo(req.params.id);
		return res.status(201).json({
			data: response,
			success: true,
			message: "Successfully deleted User Info",
			err: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able delete from User Info",
			err: error,
		});
		throw { error };
	}
};

const update = async (req, res) => {
	try {
		const response = await userInfoService.updateUserInfo(
			req.params.id,
			req.body
		);
		return res.status(201).json({
			data: response,
			success: true,
			message: "Successfully updated User Info",
			err: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able update User Info",
			err: error,
		});
		throw { error };
	}
};

const get = async (req, res) => {
	try {
		const response = await userInfoService.getUserInfo(req.params.id);
		return res.status(201).json({
			data: response,
			success: true,
			message: "Successfully fetched User Info",
			err: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able fetch data from User Info",
			err: error,
		});
		throw { error };
	}
};

module.exports = {
	create,
	destroy,
	get,
	update,
};
