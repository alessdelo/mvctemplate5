var mainFolder = "../../";

// const theModel = require(mainFolder + 'models/maps')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Jquery tests"
var theUrl = "../contents/ajax/ajaxGet.ejs"
var theDescr = "empty....."

// -----------------------------------------

exports.ajax1 = function (req, res) {
  
    
       
       var theParams = {
                 
                 }
           
        var text =  {
                 title: theTitle, 
                 content: theUrl,
                 descr: theDescr,
                 nav: theIndex.nav,
                 header: theIndex.header,
                 footer: theIndex.footer,
                 params: [theParams]
                }
        
        // debug
        // res.send(text)
        
       res.render(theIndex.index,text)

} // end export.
