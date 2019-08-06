// EXSTRACT LAST N. INSERTED RECORDS  (WITH LIMIT NUMBER)

const theModel = require('../models/kitty')
const debugs = require('../helpers/debugs.js')
const randoms = require('../helpers/randoms.js')

var importVars = require('../vars.js')
var theIndex = importVars.index

// -----------------------------------------

exports.lastitems = function (req, res) {

    theModel.find({}, { useFindAndModify: false }, function (err, result) {
    
         if (err) res.send(debugs.textFromObject(err)) // return next(err)
   

                
                var theParams = {result}
       
                var text =  {
                         title: "Records Table", 
                         content:"../contents/lastitems.ejs",
                         descr: "empty.....",
                         nav: theIndex.nav,
                         header: theIndex.header,
                         footer: theIndex.footer,
                         params: [theParams]
                        }
                
                res.render(theIndex.index,text)
                
                // res.send("the num: " + req.params.num + "<br> result: " + debugs.textFromObject(result))

            } ).sort({$natural:1}).limit(parseInt(req.params.num))
    
 } // end lastitems
