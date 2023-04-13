const IDAnalyzer = require("idanalyzer");
// const con = require("./dbConnect");
// const storeImage = require("./mongoConnection");
// const saveImage = require("./storeImage");
const fs = require("fs");

let CoreAPI = new IDAnalyzer.CoreAPI("INELU2ibe1HozTTaMBqWsVLHvTJYlsB3", "US");

async function idScan(primary_img, secondary_img, biometric_img, id) {
  // Enable authentication module v2 to check if ID is authentic
  CoreAPI.enableAuthentication(true, 2);

  // Analyze ID image by passing URL of the ID image (you may also use a local file)

  try {
    const response = await CoreAPI.scan({
      document_primary: `./src/middleware/uploads/${primary_img}`,
      document_secondary: `./src/middleware/uploads/${secondary_img}`,
      biometric_photo: `./src/middleware/uploads/${biometric_img}`,
    });
    if (!response.error) {
      console.log("this is response------------", response);
      // All the information about this ID will be returned in an associative array
      let data_result = response["result"];
      let authentication_result = response["authentication"];
      let verification_data = response["verification"];
      let face_result = response["face"];

      if (
        verification_data.result.name === false ||
        verification_data.result.documentNumber === false
      ) {
        console.log("Wrong data");

        fs.unlinkSync(`./uploads/${primary_img}`);
        fs.unlinkSync(`./uploads/${secondary_img}`);
        fs.unlinkSync(`./uploads/${biometric_img}`);
      } else {
        console.log(`Hello your name is ${data_result["fullName"]}`);

        // Parse document authentication results
        if (authentication_result) {
          if (authentication_result["score"] > 0.5) {
            console.log("The document uploaded is authentic");
          } else if (authentication_result["score"] > 0.3) {
            console.log("The document uploaded looks little bit suspicious");
          } else {
            console.log("The document uploaded is fake");
          }
        }
        // Parse biometric verification results
        if (face_result) {
          if (face_result["isIdentical"]) {
            console.log("Biometric verification PASSED!");
          } else {
            console.log("Biometric verification FAILED!");
          }
          console.log("Confidence Score: " + face_result["confidence"]);
        }
      }
    }

    return response;
  } catch (error) {
    console.log("something went wrong in the id analzer in services");
    throw { error };
  }
  // .then(async function (response) {
  // 	if (!response.error) {
  //

  // 			return response;
  // 		}
  // 	} else {
  // 		// API returned an error
  // 		console.log("response error -----", response.error);
  // 	}
  // })
  // .catch(function (err) {
  // 	console.log(err.message);
  // });

  console.log("this is get", get);
}

module.exports = { idScan };
