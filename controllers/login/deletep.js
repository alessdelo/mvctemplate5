var mainFolder = "../../";

/*
// Dependencies
 var cloudinary = require('cloudinary');

// var cloudinary = require('cloudinary').v2

// imports cloudinary config module module
var configs = require(mainFolder + 'configs');

var cloudyConfig = configs.cloudyConfig;

cloudinary.config(cloudyConfig)
*/


const theModel = require(mainFolder + 'models/user')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Just deleted record"
var theUrl = "../contents/login/deletep.ejs"
var theDescr = "empty....."

// -----------------------------------------

exports.deletep = async function (req, res) {

  



   await theModel.findByIdAndRemove(req.body._id, { useFindAndModify: false }, function (err, result) {
        if (err) return next(err)
        // res.send(result)
        // res.send('item id: ' + req.body.id + ' Deleted successfully!')
        // res.send( debugs.textFromObject(result) )   
                                                     
                                                    var theParams = {"result": result,
                                                                     "clResult": clResult
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
                                                    res.send(text)
                                                    
                                                   // res.render(theIndex.index,text)


  }) // end findByIdAndRemove

} // end exports
