const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const kitty_controller = require('../controllers/kitty');


// create
router.get('/test/:name/:age', kitty_controller.kitty_create);
// read
router.get('/test/:id', product_controller.product_details);
// update
router.put('/test/:id/update', kitty_controller.kitty_update);
// delete
router.delete('/test/:id/delete', kitty_controller.kitty_delete);

module.exports = router;
