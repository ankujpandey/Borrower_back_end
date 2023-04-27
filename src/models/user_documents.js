"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class user_documents extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	user_documents.init(
		{
			uid: {
				type: DataTypes.INTEGER,
			},
			aadhar_doc: {
				type: DataTypes.BLOB,
			},
			pan_doc: {
				type: DataTypes.BLOB,
			},
			photo_doc: {
				type: DataTypes.BLOB,
			},
			createdBy: {
				type: DataTypes.STRING,
			},
			updatedBy: {
				type: DataTypes.STRING,
			},
			isDeleted: {
				type: DataTypes.BOOLEAN,
			},
		},
		{
			sequelize,
			modelName: "user_documents",
		}
	);
	return user_documents;
};
