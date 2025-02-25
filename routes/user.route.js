const express = require("express");
const { register, login, getUserById, editUser } = require("../controllers/user.controller");
const router = express.Router();
const multer = require("multer");
const { cloudinary, multerUpload } = require("../config/cloudinaryConfig");


router.post("/register", register);
router.post("/login", login);
router.get("/:id", getUserById);
router.put("/:id", multerUpload.single("image"), editUser);

module.exports = router;
