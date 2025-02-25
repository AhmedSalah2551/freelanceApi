const express = require('express');

const { createService, getServices , getServiceById , getMyServices , deleteService  } = require('../controllers/service.controller')

const router = express.Router();


const multer = require('multer');

const uploadPath = '/tmp/';

// No need to manually create /tmp/, it's writable in serverless
const storage = multer.diskStorage({
destination: function (req, file, cb) {
cb(null, uploadPath);
},
filename: function (req, file, cb) {
cb(null, Date.now() + path.extname(file.originalname));
}
});

const upload = multer({ storage: storage });


router.post('/create', upload.single('image') , createService);
router.get('/', getServices);
router.get('/:id', getServiceById);
router.get('/my/:id', getMyServices);
router.delete('/:id', deleteService);



module.exports = router;