const multer = require("multer");
const path = require("path");
// -------------------------------------------
// 	upload image
// -------------------------------------------

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
});
//.array("aadharBiometric", 2);

module.exports = { upload };
