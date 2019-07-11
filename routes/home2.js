const express = require('express');
const router = express.Router();

const home_controller = require('../controllers/home2');

router.get('/home2', home_controller.home2);

router.get('/', home_controller.home2);

module.exports = router;

/*
var importVars = require('././vars.js')
var theIndex = importVars.index

var text =  {
           title: "home", 
           content:"../contents/home.ejs",
           descr: "empty.....",
           nav: "",
           header: "",
           footer: "",
           params: []
          }
 
app.get('/', (req, res) => res.render(theIndex,text))

*/
