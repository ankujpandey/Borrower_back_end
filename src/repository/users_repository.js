const { Op } = require("sequelize");

const { users } = require("../models/index");

class Users_repository {
	// -----------------------------------
	// insert into table
	// -----------------------------------
	async createUser(data) {
		console.log("repo called");
		try {
			const user = await users.create(data);
			return user;
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
			await users.destroy({ where: { uid: userId } });
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
			const user = await users.update(data, { where: { uid: userId } });
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
			const user = await users.findByPk(userId);
			console.log(user.brightCyan);
			return user;
		} catch (error) {
			console.log("Something went wrong in repository layer".magenta);
			throw { error };
		}
	}
}

module.exports = Users_repository;
