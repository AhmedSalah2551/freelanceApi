const express = require('express');

const { register, login, getUserById, editUser } = require('../controllers/user.controller');

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

router.post('/register', register);
router.post('/login', login);
router.get('/:id', getUserById);
router.put('/:id', upload.single('image') ,editUser);




module.exports = router;