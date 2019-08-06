// DELETES A RECORD (POST REQUEST)

const theModel = require('../models/kitty')
const debugs = require('../helpers/debugs.js')
const randoms = require('../helpers/randoms.js')

var importVars = require('../vars.js')
var theIndex = importVars.index

// -----------------------------------------

exports.deletep = function (req, res) {
    theModel.findByIdAndRemove(req.params.id, { useFindAndModify: false }, function (err, result) {
        if (err) return next(err)
        // res.send(result)
        // res.send('item id: ' + req.params.id + ' Deleted successfully!')
        // res.send( debugs.textFromObject(result) )
                                                     
                                                    var theParams = result
       
       
                                                    
                                                    var text =  {
                                                                 title: "Just deleted record", 
                                                                 content:"../contents/form1deletep.ejs",
                                                                 descr: "empty.....",
                                                                 nav: theIndex.nav,
                                                                 header: theIndex.header,
                                                                 footer: theIndex.footer,
                                                                 params: [theParams]
                                                                }
                                                    
                                                   // debug
                                                   // res.send(text)
                                                    
                                                    res.render(theIndex.index,text)


    })
}
