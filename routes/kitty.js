const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const kitty_controller = require('../controllers/kitty');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test/:name/:age', kitty_controller.kitty_create);
module.exports = router;
