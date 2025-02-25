const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

cloudinary.config({
    cloud_name: 'dg4vifw6o',
    api_key: '819817266588934',
    api_secret: 'wB05pWom39i015oWE4SSIhc77W8',
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "/tmp",
        allowed_formats: ["jpg", "png", "jpeg"],
    },
});

const multerUpload = require("multer")({ storage });

module.exports = { cloudinary, multerUpload };
