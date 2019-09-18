// SHOWS RECORDS AS MARKERS ON THE MAP

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/maps')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Records Map"
var theUrl = "../contents/form3maps/recordsmap.ejs"
var theDescr = "empty....."

// -----------------------------------------------------------------------

                   //  

exports.recordsmap = function (req, res) {   
    
    theModel.find()
                    .sort({time:-1}) 
    
                    .exec(function(err, result) {
                        theModel.count().exec(function(err, count) {
                            
                             var theParams = {result}
       
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

                        })
                    })
    
} // end recordsmap
