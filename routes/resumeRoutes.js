const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadResume, getResumes } = require('../controllers/resumeController');

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('resume'), uploadResume);
router.get('/', getResumes);

module.exports = router;
