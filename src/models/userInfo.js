"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class user_info extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.users, {
				foreignKey: "uid",
				onDelete: "CASCADE",
			});
		}
	}
	user_info.init(
		{
			uid: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
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
				type: DataTypes.BIGINT,
			},
			email: {
				//we will make it uniqe once we completed.
				allowNull: false,
				type: DataTypes.STRING,
			},
			pan: {
				//we will make it uniqe once we completed.
				allowNull: false,
				type: DataTypes.STRING,
			},
			aadhaar: {
				//we will make it uniqe once we completed.
				allowNull: false,
				type: DataTypes.BIGINT,
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
			createdBy: {
				allowNull: false,
				type: DataTypes.STRING,
				defaultValue: "user",
			},
			updatedBy: {
				allowNull: false,
				type: DataTypes.STRING,
				defaultValue: "user",
			},
			isDeleted: {
				allowNull: false,
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{
			sequelize,
			modelName: "user_info",
		}
	);
	return user_info;
};
