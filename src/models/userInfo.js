"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class userInfo extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	userInfo.init(
		{
			firstName: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			lastName: {
				allowNull: true,
				type: DataTypes.STRING,
			},
			contact: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			email: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			pan: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			aadhaar: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			pin: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			state: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			city: {
				allowNull: false,
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: "userInfo",
		}
	);
	return userInfo;
};
