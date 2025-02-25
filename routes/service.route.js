const express = require('express');
const { cloudinary, multerUpload } = require("../config/cloudinaryConfig");
const { createService, getServices , getServiceById , getMyServices , deleteService  } = require('../controllers/service.controller')
const router = express.Router();
const multer = require('multer');

router.post('/create', multerUpload.single('image') , createService);
router.get('/', getServices);
router.get('/:id', getServiceById);
router.get('/my/:id', getMyServices);
router.delete('/:id', deleteService);



module.exports = router;