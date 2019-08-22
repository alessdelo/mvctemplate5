const express = require('express');
const router = express.Router();

const the_controller = "../controllers/form3maps/";

const contr = [
                {"name": "create", "req": "get", "params": "" }
              ];
              
 /*
                {"name": "createp", "req": "post", "params": "" },
                {"name": "readg", "req": "get", "params": "/:id" },
                {"name": "edit", "req": "get", "params": "/:id" },
                {"name": "updatep", "req": "post", "params": "" },
                {"name": "search", "req": "post", "params": "" },
                {"name": "recordlist", "req": "get", "params": "/:num" },
                {"name": "recordlistpag", "req": "get", "params": "/:page/:limit/:pagnum" }
 */
              
              
              
/*

var i;

for (i = 0; i < contr.length; i++) { 
   
    let contrName = contr[i]["name"];
    let contrReq = contr[i]["req"];
    let contrParams = contr[i]["params"];

    // example: const the_controller = require("../controllers/form3maps/edit.js");
    contr[contrName] = require(the_controller + contrName + ".js");

    if(contrReq == "post") {
      
           // example = edit:  router.post('/edit', the_controller);
            router.post('/' + contrName, contr[contrName][contrName]);

    } else {
      
          // example = edit:  router.get('/edit/:id', the_controller);
          router.get('/' + contrName + contrParams, contr[contrName][contrName]);

    } // end if-else

} // end for

*/

router.get('/' + 'create', "../controllers/form3maps/create.js");

module.exports = router;
