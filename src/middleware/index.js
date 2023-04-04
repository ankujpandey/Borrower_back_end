// ----------------------------------------
// jwt token
// ----------------------------------------
const Jwt = require("jsonwebtoken");
const jwtKey = "anakaz";

// -----------------------------------
// create token
// -----------------------------------

const createToken = (result) => {
  try {
    const token = Jwt.sign(result, jwtKey, { expiresIn: "2h" });
    return token;
  } catch (error) {
    console.log("Something went wrong, please try again!!!!!!!!!!");
    throw { error };
  }
};

// -----------------------------------
// verify token
// -----------------------------------
const verifyToken = (req, resp, next) => {
  let token = req.headers["authorization"];
  if (token) {
    Jwt.verify(token, jwtKey, (err, valid) => {
      if (err) {
        resp.status(401).send({ result: "Please provide valid token" });
      } else {
        next();
      }
    });
  } else {
    resp.status(403).send({ result: "Please add token with header" });
  }
};
module.exports = { createToken, verifyToken };
