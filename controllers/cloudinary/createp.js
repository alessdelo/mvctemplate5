// Dependencies
var cloudinary = require('cloudinary');
// Mongoose Model
var Model = require('./model');

// Configure Cloudinary
// with credentials available on
// your Cloudinary account dashboard
cloudinary.config({
    cloud_name: 'CLOUD_NAME',
    api_key: 'API_KEY',
    api_secret: 'SECRET'
});

// CREATES A RECORD (GET REQUEST)

var mainFolder = "../../";

// const theModel = require(mainFolder + 'models/maps')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Cloudinary Record Created (img uploaded)"
var theUrl = "../contents/cloudinary/createp.ejs"
var theDescr = "empty....."

// -----------------------------------------

// change this!!!!!!
exports.createp = function (req, res) {

        var text =  {
                 title: theTitle, 
                 content:theUrl,
                 descr: theDescr,
                 nav: theIndex.nav,
                 header: theIndex.header,
                 footer: theIndex.footer,
                 params: []
                }
        
        // debug
        // res.send(text)
        res.render(theIndex.index,text)
        
} // end exports.
