var mainFolder = "../../";

// const theModel = require(mainFolder + 'models/maps')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Base OpenLayers Map"
var theUrl = "../contents/maps1/basemap.ejs"
var theDescr = "empty....."

// -----------------------------------------

exports.basemap = function (req, res) {
  
    
       
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
        //res.send(text)
        
        res.render(theIndex.index,text)

} // end create
