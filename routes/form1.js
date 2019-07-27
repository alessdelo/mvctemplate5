    
const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const the_controller = require('../controllers/form1');


// create
    // with data
    router.post('/createp', the_controller.createp);
    // with no data
    router.get('/create', the_controller.create);
  

// read
router.get('/read/:id', the_controller.read);
// edit
router.get('/edit/:id', the_controller.read);
// update
router.get('/update/:id/:name/:age', the_controller.update);
// delete
router.get('/delete/:id', the_controller.delete);
// extracts last n. items
router.get('/lastitems/:num', the_controller.lastitems);


module.exports = router;
