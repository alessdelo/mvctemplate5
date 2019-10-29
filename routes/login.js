const express = require('express');
const router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

const the_controller = "../controllers/login/";


const contr = [
                {"name": "registerg", "req": "get", "params": "", "middleware": "" },
                {"name": "loging", "req": "get", "params": "", "middleware": "" }

   ];

/*
                {"name": "authenticate", "req": "post", "params": "", "middleware": "" },
                {"name": "register", "req": "post", "params": "", "middleware": "" },
                {"name": "getAll", "req": "get", "params": "/:id", "middleware": "" },
                {"name": "current", "req": "get", "params": "/:id", "middleware": "" },
                {"name": "getById", "req": "get", "params": "/:id", "middleware": ""},
                {"name": "update", "req": "put", "params": "/:id", "middleware": ""},
                {"name": "delete", "req": "delete", "params": "/:id", "middleware": ""}
                
*/


var i;

for (i = 0; i < contr.length; i++) { 
   
    let contrName = contr[i]["name"];
    let contrReq = contr[i]["req"];
    let contrParams = contr[i]["params"];
    let contrMiddleware = contr[i]["middleware"];  

    // example: const the_controller = require("../controllers/form2/edit.js");
    contr[contrName] = require(the_controller + contrName + ".js");

    if(contrReq == "post") {
      
           // example = edit:  router.post('/edit', the_controller);
           router.post('/' + contrName, contrMiddleware, contr[contrName][contrName]);

    } else {
      
          // example = edit:  router.get('/edit/:id', the_controller);
          router.get('/' + contrName + contrParams, contr[contrName][contrName]);

    } // end if-else

} // end for

module.exports = router;
