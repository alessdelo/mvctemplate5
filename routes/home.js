const express = require('express');
const router = express.Router();

const home_controller = require('../controllers/home');

// create
router.get('/home', home_controller.home);



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
