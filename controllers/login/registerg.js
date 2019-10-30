/*

// CREATES A RECORD (GET REQUEST)

var mainFolder = "../../";

// const theModel = require(mainFolder + 'models/maps')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Register Form"
var theUrl = "../contents/login/registerg.ejs"
var theDescr = "empty....."

// -----------------------------------------

// change this!!!!!!
exports.registerg = function (req, res) {

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
        res.send(text)
        // res.render(theIndex.index,text)
        
} // end exports.

*/

exports.register = function(req, res){
   res.send("respond with a resource");
}
