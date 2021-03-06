const express = require('express');
const router = express.Router();

const the_controller = "../controllers/mqtt/";

const contr = [
                {"name": "mqtt1", "req": "get", "params": ""},
                {"name": "sendmqtt", "req": "post", "params": "" },  
               ];


/*
                {"name": "loging", "req": "get", "params": ""},
                {"name": "authenticate", "req": "post", "params": ""},
                {"name": "register", "req": "post", "params": "" },
                {"name": "updateg", "req": "get", "params": "/:id"},
                {"name": "updatep", "req": "post", "params": "" },
                {"name": "deleteg", "req": "get", "params": "/:id"},
                {"name": "deletep", "req": "post", "params": "" }
                
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
