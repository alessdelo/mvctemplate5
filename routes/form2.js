const express = require('express');
const router = express.Router();


/*

// Require the controllers WHICH WE DID NOT CREATE YET!!
const the_controller = "../controllers/form2";

// create record (get request)

const the_createg = require(the_controller + "createg" + ".js");

router.get('/createg', the_createg.createg);

*/


/*
// Require the controllers WHICH WE DID NOT CREATE YET!!
// const the_controller = "../controllers/form2";
const the_controller = "controllers/form2";


const contr = [];

// create record (get request)

var contrName = "createg";

contr[contrName] = require(the_controller + "/" + contrName + ".js");

router.get('/' + contrName, contr[contrName][contrName]);

*/



// Require the controllers WHICH WE DID NOT CREATE YET!!
const the_controller = "../controllers/form2/";



const contr = [
                {"name": "createg", "req": "get", "params": "" },
                {"name": "createp", "req": "post", "params": "" },
                {"name": "readg", "req": "get", "params": "/:id" },
                {"name": "edit", "req": "get", "params": "/:id" },
                {"name": "updatep", "req": "post", "params": "" },
                {"name": "search", "req": "post", "params": "" },
                {"name": "recordlist", "req": "get", "params": "/:num" }
              ];

var i;

for (i = 0; i < contr.length; i++) { 
   
    let contrName = contr[i]["name"];
    let contrReq = contr[i]["req"];
    let contrParams = contr[i]["params"];

    contr[contrName] = require(the_controller + contrName + ".js");

    if(contrReq == "post") {

           router.post('/' + contrName, contr[contrName][contrName]);

    } else {

          router.get('/' + contrName + contrParams, contr[contrName][contrName]);

    }

}




// create record (get request)







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
