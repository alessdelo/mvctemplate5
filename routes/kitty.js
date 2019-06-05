const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const kitty_controller = require('../controllers/kitty');


// create
router.get('/create/:name/:age', kitty_controller.kitty_create);
// read
router.get('/read/:id', kitty_controller.kitty_details);
// update
router.put('/update/:id/:name/:age', kitty_controller.kitty_update);
// delete
router.delete('/delete/:id/delete', kitty_controller.kitty_delete);

module.exports = router;
