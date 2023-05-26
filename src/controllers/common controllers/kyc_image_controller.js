const { getImages } = require("../../mongodb/kyc_image");

// ------------------------------------------------------
// 	Get all KYC images
// ------------------------------------------------------

const getImagesController = async (req, res) => {
  try {
    const getImageControllerData = await getImages(req.params.id);
    return res.status(201).json({
      data: getImageControllerData,
      success: true,
      message: "Successfully fetched Image data ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able fetch data from Images",
      err: error,
    });
  }
};

module.exports = {
  getImagesController,
};
