// UPDATES A RECORD (POST REQUEST)

const theModel = require('../models/kitty')
const debugs = require('../helpers/debugs.js')
const randoms = require('../helpers/randoms.js')

var importVars = require('../vars.js')
var theIndex = importVars.index

// ----------------------------------------

exports.updatep = function (req, res) {

    var theReq = req.body
    // var reqText = JSON.stringify(req, null, 4)               
    
    theModel.findByIdAndUpdate(
                            { "_id": theReq.id },
        
                            { $set: { "name": theReq.name, "age": theReq.age}}, 
           
                            {new: true},
    
                            function (err, result) {

    if (err)  res.send(err + " - - - " + theReq.id + " - " + theReq.name + " - " + theReq.age  )                            
 // if (err) return next(new Error('There was an error'))

                                                    /* 
                                                    res.send('Record udpated (result): ' + ' id: ' + result.id + 
                                                                                ' name: ' + result.name + 
                                                                           ' age: ' + result.age
                                                                                )
                                                   */


                                                    // debug
                                                    // res.send(req.body)

                                                    
                                                    
                                                   /* .... */


                                                    // var theParams = {"id":req.body.id, "name": req.body.name, "age": req.body.age}
                                                    
                                                    var theParams = theReq
       
       
                                                    
                                                    var text =  {
                                                                 title: "Updated record", 
                                                                 content:"../contents/form1updatep.ejs",
                                                                 descr: "empty.....",
                                                                 nav: theIndex.nav,
                                                                 header: theIndex.header,
                                                                 footer: theIndex.footer,
                                                                 params: [theParams]
                                                                }
                                                    // debug
                                                    //res.send(text)
                                                   
                                                      res.render(theIndex.index,text)

                                                   /* .... */

                            }
                           )
} // end update
