// UPDATES A RECORD (POST REQUEST)

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/kitty')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Form2 (Update - post)"
var theUrl = "../contents/form2/updatep.ejs"
var theDescr = "empty....."

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

                                                    // var theParams = {"id":req.body.id, "name": req.body.name, "age": req.body.age}
                                                    
                                                    var theParams = theReq
                                                           
                                                    var text =  {
                                                                 title: theTitle, 
                                                                 content:theUrl,
                                                                 descr: theDescr,
                                                                 nav: theIndex.nav,
                                                                 header: theIndex.header,
                                                                 footer: theIndex.footer,
                                                                 params: [theParams]
                                                                }
                                                    // debug
                                                    //res.send(text)
                                                   
                                                      res.render(theIndex.index,text)


                            } )
} // end update
