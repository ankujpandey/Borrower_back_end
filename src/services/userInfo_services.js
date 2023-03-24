const { UserInfo_repository } = require("../repository");
const colors = require("colors");

class UserInfo_service {
	constructor() {
		this.userinfoRepository = new UserInfo_repository();
	}

	// -----------------------------------
	// insert into table
	// -----------------------------------
	async createUserInfo(data) {
		// console.log(colors.bgBlue("userData in services------->>>>>>", data));
		try {
			const result = await this.userinfoRepository.createUserInfo(data);
			console.log(result);
			return result;
		} catch (error) {
			console.log("Something went wrong in userInfo services".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// delete from table
	// -----------------------------------
	async deleteUserInfo(userId) {
		try {
			const response = await this.userinfoRepository.deleteUserInfo(userId);
			return response;
		} catch (error) {
			console.log("Something went wrong in userInfo services".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// update table
	// -----------------------------------
	async updateUserInfo(userId, data) {
		try {
			const result = await this.userinfoRepository.updateUserInfo(userId, data);
			return result;
		} catch (error) {
			console.log("Something went wrong in userInfo services".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// get data from table
	// -----------------------------------
	async getUserInfo(userId) {
		try {
			const result = await this.userinfoRepository.getUserInfo(userId);
			return result;
		} catch (error) {
			console.log("Something went wrong in userInfo services".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// get all data from table
	// -----------------------------------
	async getAllUserInfo(query) {
		try {
			const result = await this.userinfoRepository.getAllUserInfo();
			return result;
		} catch (error) {
			console.log("Something went wrong in userInfo services".magenta);
			throw { error };
		}
	}
}

module.exports = UserInfo_service;
