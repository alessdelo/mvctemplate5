/*

// CREATES A RECORD (GET REQUEST)

var mainFolder = "../../";

// const theModel = require(mainFolder + 'models/maps')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Login Form 1"
var theUrl = "../contents/login/loging.ejs"
var theDescr = "empty....."

// -----------------------------------------

// change this!!!!!!
exports.loging = function (req, res) {

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

exports.loging = function(req, res){
   res.send("respond with a resource");
}
