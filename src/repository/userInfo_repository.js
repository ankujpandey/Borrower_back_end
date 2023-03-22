const { Op } = require("sequelize");

const { UserInfo } = require("../models");
const colors = require("colors");

class UserInfo_repository {
	// -----------------------------------
	// insert into table
	// -----------------------------------
	async createUserInfo({ data }) {
		try {
			const userInfo = await UserInfo.create({ data });
			return userInfo;
		} catch (error) {
			console.log("Something went wrong in repository layer".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// delete from table
	// -----------------------------------
	async deleteUserInfo(userId) {
		try {
			await UserInfo.destroy({ where: { uid: userId } });
		} catch (error) {
			console.log("Something went wrong in repository layer".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// update data into table
	// -----------------------------------
	async updateUserInfo(userId, data) {
		try {
			const userInfo = await UserInfo.update(data, { where: { uid: userId } });
			return userInfo;
		} catch (error) {
			console.log("Something went wrong in repository layer".magenta);
			throw { error };
		}
	}

	// -----------------------------------
	// get data from table
	// -----------------------------------
	async getUserInfo(userId) {
		try {
			const userInfo = await UserInfo.findByPk(userId);
			console.log(userInfo.brightCyan);
			return userInfo;
		} catch (error) {
			console.log("Something went wrong in repository layer".magenta);
			throw { error };
		}
	}
}

module.exports = UserInfo_repository;
