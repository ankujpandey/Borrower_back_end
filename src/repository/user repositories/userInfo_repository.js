// const { Op } = require("sequelize");

const { user_info } = require("../../models/index");
const colors = require("colors");

class UserInfo_repository {
  // -----------------------------------
  // insert into table
  // -----------------------------------
  async createUserInfo(data, userId) {
    console.log(colors.bgYellow("userData in repository------->>>>>>", data));
    try {
      const userInfo = await user_info.update(data, {
        where: { uid: userId, isDeleted: false },
      });
      // console.log("wrong in repo", userInfo);
      return userInfo;
    } catch (error) {
      console.log(error);
      console.log("Something went wrong in repository layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------
  // delete from table
  // -----------------------------------
  async deleteUserInfo(userId) {
    try {
      await user_info.update({ isDeleted: true }, { where: { uid: userId } });
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
      const userInfo = await user_info.update(data, {
        where: { uid: userId, isDeleted: false },
      });
      if (userInfo[0] === 1) {
        const result = await user_info.findOne({
          where: { uid: userId },
        });
        console.log(result);
        return result;
      }
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
      const userInfo = await user_info.findOne({
        where: {
          uid: userId,
          isDeleted: false,
        },
      });
      console.log(userInfo.brightCyan);
      return userInfo;
    } catch (error) {
      console.log("Something went wrong in repository layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------
  // get all data from table
  // -----------------------------------
  async getAllUserInfo() {
    try {
      const userInfo = await user_info.findAll({ where: { isDeleted: false } });
      console.log(userInfo.brightCyan);
      return userInfo;
    } catch (error) {
      console.log("Something went wrong in repository layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------
  // get all data from table
  // -----------------------------------
  async getAllUserInfoByAdmin() {
    try {
      const userInfo = await user_info.findAll();
      // console.log(userInfo.brightCyan);
      return userInfo;
    } catch (error) {
      console.log("Something went wrong in repository layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------
  // get userinfo from table for email
  // -----------------------------------
  async getUserInfoDataEmail(id) {
    try {
      const user = await user_info.findOne({
        where: { uid: id, isDeleted: false },
      });
      // console.log(user.brightCyan);
      return user;
    } catch (error) {
      console.log("Something went wrong in repository layer".magenta);
      throw { error };
    }
  }
}

module.exports = UserInfo_repository;
