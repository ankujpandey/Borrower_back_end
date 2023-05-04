// const { Op } = require("sequelize");

const {
  users,
  sequelize,
  bank_details,
  employment_details,
  loan_details,
  user_info,
  Admin,
  Log_table,
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

      await loan_details.create({
        uid: user.uid,
        Loan_state: 1000,
        jobAssignees_id: null,
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
        `SELECT users.uid, users.email,users.isActive, user_infos.firstName,user_infos.lastName,user_infos.contact,user_infos.pan,user_infos.aadhaar, user_infos.pinCode,user_infos.state,user_infos.city,user_infos.postOffice, bank_details.account_number,bank_details.ifsc_code,bank_details.bank_name,bank_details.branch_name, employment_details.employment_type,employment_details.company_name,employment_details.professional_email, employment_details.business_nature,employment_details.monthly_income, loan_details.Loan_state, JobAssignees.name AS AgentName FROM users INNER JOIN user_infos ON users.uid = user_infos.uid INNER JOIN bank_details ON users.uid = bank_details.uid INNER JOIN employment_details ON users.uid = employment_details.uid INNER JOIN loan_details ON users.uid = loan_details.uid INNER JOIN JobAssignees ON JobAssignees.jobAssignees_id = loan_details.jobAssignees_id WHERE users.uid = ${id} ;`
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

  async getUserData(req) {
    try {
      let [len, meta] = await sequelize.query(
        "SELECT COUNT(*) as length From users"
      );

      const page = parseInt(req.page) || 1;
      const limit = parseInt(req.limit) || 2;
      let reqObj = {};
      const skip = (page - 1) * limit;

      const [data, metadata] = await sequelize.query(
        `SELECT users.uid, users.isDeleted, users.email,users.isActive,user_infos.contact, user_infos.pan, user_infos.aadhaar, user_infos.firstName,user_infos.lastName, loan_details.Loan_state, JobAssignees.name AS AgentName FROM users INNER JOIN user_infos ON users.uid = user_infos.uid INNER JOIN loan_details ON users.uid = loan_details.uid INNER JOIN JobAssignees ON JobAssignees.jobAssignees_id = loan_details.jobAssignees_id LIMIT ${limit} OFFSET ${skip}`
      );
      reqObj.data = data;
      reqObj.length = len;
      return reqObj;
    } catch (error) {
      console.log("Something went wrong in repository layer".magenta);
      throw { error };
    }
  }
}

module.exports = Users_repository;
