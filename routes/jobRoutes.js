const express = require('express');
const router = express.Router();
const { addJob, matchResumes } = require('../controllers/jobController');

router.post('/add', addJob);
router.get('/:jobId/match', matchResumes);

module.exports = router;
