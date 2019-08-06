const theModel = require('../models/kitty')
const debugs = require('../helpers/debugs.js')
const randoms = require('../helpers/randoms.js')

var importVars = require('../vars.js')
var theIndex = importVars.index

// UPDATES A RECORD (VIA GET)

exports.update = function (req, res) {
    theModel.findByIdAndUpdate(
                            {
                                "_id": req.params.id
                             },
        
                            {
                                $set: { "name": req.params.name, "age": req.params.age}}, function (err, result) {
                                            if (err) return next(err)

                                                    /* 
                                                    res.send('Record udpated.' + ' _id: ' + req.params.id + 
                                                                                ' name: ' + req.params.name + 
                                                                                ' age: ' + req.params.age
                                                                                ) 
                                                    */

                                                    var myParams = req.params
                                                    
                                                    var theParams = {myParams}
       
       
                                                    
                                                    var text =  {
                                                                 title: "Updated record", 
                                                                 content:"../contents/form1updated.ejs",
                                                                 descr: "empty.....",
                                                                 nav: theIndex.nav,
                                                                 header: theIndex.header,
                                                                 footer: theIndex.footer,
                                                                 params: [theParams]
                                                                }
                                                    
                
                                                    
                                                    res.render(theIndex.index,text)

                                                    
                  }
                )
} // end update
