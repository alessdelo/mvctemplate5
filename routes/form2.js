const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const the_controller = "../controllers/form2";

// create record (get request)

const the_createg = require(the_controller + "createg" + ".js");

router.get('/createg', the_createg.createg);



// create record (post request)


/*

// create
    // with data
    router.post('/createp', the_controller.createp);
    // router.post('/createp', the_controller.form1createp);
    // with no data
    router.get('/create', the_controller.create);
  

// read
router.get('/read/:id', the_controller.read);
// UPDATE
// edit
router.get('/edit/:id', the_controller.edit);
// update
router.get('/update/:id/:name/:age', the_controller.update);
// update post
router.post('/updatep', the_controller.updatep);
// update get from form
router.get('/updatep', the_controller.updatep);



// delete
router.get('/delete/:id', the_controller.delete);
router.get('/deletep/:id', the_controller.deletep);

// extracts last n. items
router.get('/lastitems/:num', the_controller.lastitems);

*/


module.exports = router;
