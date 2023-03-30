const { Users_repository } = require("../repository");

// ----------------------------------------
// jwt token
// ----------------------------------------
const Jwt = require("jsonwebtoken");
const jwtKey = "aaa";

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
			const token = await this.createToken({
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

	// -----------------------------------
	// create token
	// -----------------------------------

	async createToken(result) {
		try {
			const token = Jwt.sign(result, jwtKey, { expiresIn: "2h" });
			return token;
		} catch (error) {
			console.log("Something went wrong, please try again!!!!!!!!!!");
			throw { error };
		}
	}

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
	// get data from table
	// -----------------------------------
	async getUser(userLogin) {
		try {
			const result = await this.usersRepository.getUser(userLogin);
			return result;
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
}

module.exports = Users_service;
