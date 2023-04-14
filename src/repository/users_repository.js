// const { Op } = require("sequelize");

const {
  users,
  sequelize,
  bank_details,
  employment_details,
  loan_details,
  user_info,
  Admin,
} = require("../models/index");

class Users_repository {
  // -----------------------------------
  // insert into table
  // -----------------------------------
  async createUser(data) {
    console.log("repo called", data.firstName);
    try {
      let obj = {};
      // const user = await users.create(data);
      let user = await users.findOne({
        where: {
          email: data.email,
          isDeleted: false,
        },
      });

      if (user) {
        obj.userDetails = user;
        obj.message = "User already exists!";
        obj.status = 203;
        return obj;
      }

      user = await users.create(data);

      const userInfo = await user_info.create({
        firstName: data.firstName,
        lastName: data.lastName,
        createdBy: data.createdBy,
        updatedBy: data.updatedBy,
        uid: user.uid,
      });

      await bank_details.create({
        uid: user.uid,
      });

      await employment_details.create({
        uid: user.uid,
      });

      // await loan_details.create({
      //   uid: user.uid,
      // });

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
      await users.update(
        { isDeleted: true, isActive: false },
        { where: { uid: userId } }
      );
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
  // get data from table (Login)
  // -----------------------------------
  async getUser(userLogin) {
    console.log(userLogin);
    try {
      let obj = {};
      const user = await users.findOne({
        where: {
          email: userLogin.email,
          password: userLogin.password,
          isDeleted: false,
        },
      });
      if (user) {
        const userInfo = await user_info.findOne({
          where: {
            uid: user.uid,
            isDeleted: false,
          },
        });

        obj.signUp = user;
        obj.userName = userInfo;
        return obj;
      }

      const admin = await Admin.findOne({
        where: {
          email: userLogin.email,
          password: userLogin.password,
          isDeleted: false,
        },
      });

      // console.log("admin found--", admin);
      return admin;
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

  // -----------------------------------
  // get all data
  // -----------------------------------

  async getAllData(id) {
    try {
      const [data, metadata] = await sequelize.query(
        `SELECT users.uid, users.email,users.isActive, user_infos.firstName,user_infos.lastName,user_infos.contact,user_infos.pan,user_infos.aadhaar, user_infos.pinCode,user_infos.state,user_infos.state,user_infos.city,user_infos.postOffice, bank_details.account_number,bank_details.ifsc_code,bank_details.bank_name,bank_details.branch_name, employment_details.employment_type,employment_details.company_name,employment_details.email AS professional_email,employment_details.business_nature,employment_details.monthly_income FROM users INNER JOIN user_infos ON users.uid = user_infos.uid INNER JOIN bank_details ON users.uid = bank_details.uid INNER JOIN employment_details ON users.uid = employment_details.uid WHERE users.uid = ${id} ;`
      );
      return data;
    } catch (error) {
      console.log("Something went wrong in repository layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------
  // get user+user_info data
  // -----------------------------------

  async getUserData() {
    try {
      const [data, metadata] = await sequelize.query(
        "SELECT users.uid, users.email,users.isActive, user_infos.firstName,user_infos.lastName FROM users INNER JOIN user_infos ON users.uid = user_infos.uid ;"
      );
      return data;
    } catch (error) {
      console.log("Something went wrong in repository layer".magenta);
      throw { error };
    }
  }
}

module.exports = Users_repository;
