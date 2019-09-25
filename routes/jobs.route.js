const express = require('express');
const router = express.Router();
const jobs_controller = require('../controllers/jobs.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', jobs_controller.test);


module.exports = router;