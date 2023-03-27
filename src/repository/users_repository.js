const { Op } = require("sequelize");

const { users } = require("../models/index");
const { user_info } = require("../models/index");

class Users_repository {
	// -----------------------------------
	// insert into table
	// -----------------------------------
	async createUser(data) {
		console.log("repo called", data.firstName);
		try {
			let obj = {};
			const user = await users.create(data);
			const userInfo = await user_info.create({
				firstName: data.firstName,
				lastName: data.lastName,
				createdBy: data.createdBy,
				updatedBy: data.updatedBy,
			});
			obj.signUp = user;
			obj.userName = userInfo;
			return obj;
		} catch (error) {
			console.log("Something went wrong in repository layer".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// delete from table
	// -----------------------------------
	async deleteUser(userId) {
		try {
			await users.update({ isDeleted: true }, { where: { uid: userId } });
		} catch (error) {
			console.log("Something went wrong in repository layer".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// update data into table
	// -----------------------------------
	async updateUser(userId, data) {
		try {
			const user = await users.update(data, {
				where: { uid: userId, isDeleted: false },
			});
			return user;
		} catch (error) {
			console.log("Something went wrong in repository layer".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// get data from table
	// -----------------------------------
	async getUser(userId) {
		try {
			const user = await users.findOne({
				where: {
					uid: userId,
					isDeleted: false,
				},
			});
			console.log(user.brightCyan);
			return user;
		} catch (error) {
			console.log("Something went wrong in repository layer".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// get data from table
	// -----------------------------------
	async getAllUser() {
		try {
			const user = await users.findAll({ where: { isDeleted: false } });
			console.log(user.brightCyan);
			return user;
		} catch (error) {
			console.log("Something went wrong in repository layer".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// get data from table for admin
	// -----------------------------------
	async getAllUserByAdmin() {
		try {
			const user = await users.findAll();
			console.log(user.brightCyan);
			return user;
		} catch (error) {
			console.log("Something went wrong in repository layer".magenta);
			throw { error };
		}
	}
}

module.exports = Users_repository;
