var mainFolder = "../../";

// const theModel = require(mainFolder + 'models/maps')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "MQTT test n.1"
var theUrl = "../contents/mqtt/mqtt1.ejs"
var theDescr = "empty....."

// -----------------------------------------

exports.mqtt1 = function (req, res) {
  
    
       
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
