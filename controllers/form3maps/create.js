// CREATES A RECORD (GET REQUEST)

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/maps')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Form 3 maps (Create)"
var theUrl = "../contents/form3maps/create.ejs"
var theDescr = "empty....."

// -----------------------------------------

// change this!!!!!!
exports.create = function (req, res) {

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
        
} // end create
