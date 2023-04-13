const multer = require("multer");
const path = require("path");
// -------------------------------------------
// 	upload image
// -------------------------------------------
var imageFiles = [];
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      // cb(null, "../src/uploads/");
      cb(null, path.join(__dirname, "/uploads/"));
    },
    filename: function (req, file, cb) {
      console.log("bodyyyyy===>", file);
      let filename = file.fieldname + "-" + Date.now() + ".jpg";
      const callback = cb(null, filename);

      console.log("call back---", filename);
    },
  }),
}).array("user_file", 3);

module.exports = { upload };
