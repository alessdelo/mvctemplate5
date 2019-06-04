const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const puppy_controller = require('../controllers/puppy');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test/:name/:age', puppy_controller.puppy);

module.exports = router;
