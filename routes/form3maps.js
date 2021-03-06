const express = require('express');
const router = express.Router();

const the_controller = "../controllers/form3maps/";

const contr = [
                {"name": "create", "req": "get", "params": "" },
                {"name": "createm", "req": "get", "params": "" },
                {"name": "createp", "req": "post", "params": "" },
                {"name": "createg", "req": "get", "params": "/:name/:description/:rate/:coordx/:coordy" },
                {"name": "edit", "req": "get", "params": "/:id" },
                {"name": "updatep", "req": "post", "params": "" },      
                {"name": "recordlistpag", "req": "get", "params": "/:page/:limit/:pagnum" },
                {"name": "recordsmap", "req": "get", "params": "" },
              ];

/*

                {"name": "createp", "req": "post", "params": "" },
                {"name": "readg", "req": "get", "params": "/:id" },
                {"name": "edit", "req": "get", "params": "/:id" },
                {"name": "updatep", "req": "post", "params": "" },
                {"name": "search", "req": "post", "params": "" },
                {"name": "recordlist", "req": "get", "params": "/:num" },
                
*/


var i;

for (i = 0; i < contr.length; i++) { 
   
    let contrName = contr[i]["name"];
    let contrReq = contr[i]["req"];
    let contrParams = contr[i]["params"];

    // example: const the_controller = require("../controllers/form2/edit.js");
    contr[contrName] = require(the_controller + contrName + ".js");

    if(contrReq == "post") {
      
           // example = edit:  router.post('/edit', the_controller);
           router.post('/' + contrName, contr[contrName][contrName]);

    } else {
      
          // example = edit:  router.get('/edit/:id', the_controller);
          router.get('/' + contrName + contrParams, contr[contrName][contrName]);

    } // end if-else

} // end for

module.exports = router;
