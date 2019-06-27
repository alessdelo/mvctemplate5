const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const kitty_controller = require('../controllers/kitty');


// create
router.get('/create/:name/:age', kitty_controller.kitty_create);
// read
router.get('/read/:id', kitty_controller.kitty_details);
// update
// router.put('/update/:id/:name/:age', kitty_controller.kitty_update);
router.get('/update/:id/:name/:age', kitty_controller.kitty_update);
// delete
router.get('/delete/:id', kitty_controller.kitty_delete);
// extracts last n. items
// router.get('/lastitems/:num', kitty_controller.kitty_lastitems);


module.exports = router;
