const { Users_repository } = require("../repository");
const { JWTToken } = require("../middleware");

class Users_service {
	constructor() {
		this.usersRepository = new Users_repository();
	}

	// -----------------------------------
	// insert into table
	// -----------------------------------
	async createUser(data) {
		console.log("service called");
		let createUserData = {};
		try {
			const result = await this.usersRepository.createUser(data);
			const token = JWTToken.createToken({
				email: result.email,
				uid: result.uid,
			});

			createUserData.result = result;
			createUserData.auth = token;

			return createUserData;
		} catch (error) {
			console.log("Something went wrong in userInfo services".magenta);
			throw { error };
		}
	}

	// // -----------------------------------
	// // create token
	// // -----------------------------------

	// async createToken(result) {
	// 	try {
	// 		const token = Jwt.sign(result, jwtKey, { expiresIn: "2h" });
	// 		return token;
	// 	} catch (error) {
	// 		console.log("Something went wrong, please try again!!!!!!!!!!");
	// 		throw { error };
	// 	}
	// }

	// -----------------------------------
	// delete from table
	// -----------------------------------
	async deleteUser(userId) {
		try {
			const response = await this.usersRepository.deleteUser(userId);
			return response;
		} catch (error) {
			console.log("Something went wrong in userInfo services".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// update table
	// -----------------------------------
	async updateUser(userId, data) {
		try {
			const result = await this.usersRepository.updateUser(userId, data);
			return result;
		} catch (error) {
			console.log("Something went wrong in userInfo services".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// Login
	// -----------------------------------
	async getUser(userLogin) {
		let userLogincheck = {};
		try {
			const result = await this.usersRepository.getUser(userLogin);
			const token = JWTToken.createToken({
				email: result.email,
				uid: result.uid,
			});

			userLogincheck.result = result;
			userLogincheck.auth = token;

			return userLogincheck;
		} catch (error) {
			console.log("Something went wrong in userInfo services".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// get all data from table
	// -----------------------------------
	async getAllUser() {
		try {
			const result = await this.usersRepository.getAllUser();
			return result;
		} catch (error) {
			console.log("Something went wrong in userInfo services".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// get all data from table for admin
	// -----------------------------------
	async getAllUserByAdmin() {
		try {
			const result = await this.usersRepository.getAllUserByAdmin();
			return result;
		} catch (error) {
			console.log("Something went wrong in userInfo services".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// get all data by admin
	// -----------------------------------

	async getAllData(id) {
		try {
			const data = await this.usersRepository.getAllData(id);
			return data;
		} catch (error) {
			console.log("Something went wrong in repository layer".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// get user data by admin
	// -----------------------------------

	async getUserData(req) {
		try {
			const data = await this.usersRepository.getUserData(req);
			return data;
		} catch (error) {
			console.log("Something went wrong in repository layer".magenta);
			throw { error };
		}
	}
}

module.exports = Users_service;
