// UPDATES A RECORD (POST REQUEST)

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/maps')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Form3maps (Update - post)"
var theUrl = "../contents/form3maps/updatep.ejs"
var theDescr = "empty....."

// ----------------------------------------

exports.updatep = function (req, res) {
    
    var theReq = req.body
    // var reqText = JSON.stringify(req, null, 4)               
    
    theModel.findByIdAndUpdate(
                            { "_id": theReq.id },
        
                            { $set: { "name": theReq.name,
                                      "description": theReq.description,
                                      "rate": theReq.rate, 
                                      "loc.coordinates.0": theReq.coordx,   
                                      "loc.coordinates.1": theReq.coordy                                  
                                                                         
                                     }}, 
           
                            {new: true},
    
                            function (err, result) {

                            // if (err)  res.send(err + " - - - " + theReq.id + " - " + theReq.name + " - " + theReq.age  )                            
                             if (err) return next(new Error('There was an error'))


                                                   /*
                                                    res.send('Record udpated (result): ' + ' id: ' + result.id + 
                                                                                ' name: ' + result.name + 
                                                                           ' age: ' + result.age
                                                                                )
                                                   */



                                                    // debug
                                                    // res.send(req.body)

                                                     var theParams = {"id":result._id,
                                                                        "name": result.name,
                                                                        "description": result.description,
                                                                        "rate": result.rate,
                                                                        "time": result.time,
                                                                        "coordx": result.loc.coordinates[0],
                                                                        "coordy": result.loc.coordinates[1],
                                                                       }
                                                    
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
                                                    // res.send(text)
                                                    // res.send(result)
                                                     
                                                   
                                                    res.render(theIndex.index,text)


                            } )
// debug
// res.send(req.body)

} // end update
