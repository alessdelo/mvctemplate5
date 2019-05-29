const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const test_controller = require('../controllers/test');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test0', test_controller.test);

// 2nd test
router.get('/test1', test_controller.test1);

module.exports = router;
