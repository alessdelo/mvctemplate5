var mainFolder = "../../";

/*
// Dependencies
var cloudinary = require('cloudinary');

// imports cloudinary config module module
var configs = require(mainFolder + 'configs');

var cloudyConfig = configs.cloudyConfig;

cloudinary.config(cloudyConfig)
*/

// CREATES A RECORD (GET REQUEST)

const theModel = require(mainFolder + 'models/cloudinary')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Authenticate User"
var theUrl = "../contents/login/authenticate.ejs"
var theDescr = "empty....."

// -----------------------------------------
