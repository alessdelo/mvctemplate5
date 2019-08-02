// CREATES A NEW RECORD FROM DATA SENT VIA POST
const theModel = require('../models/kitty')
// const debugs = require('../helpers/debugs.js')
// const randoms = require('../helpers/randoms.js')

var importVars = require('../vars.js')
var theIndex = importVars.index

exports.createp = function (req, res) {
  
    // debug
    // res.send(req.body);
    // res.send(req.body.name + " - " + req.body.age);
   
    let form1 = new theModel(
        {
            name: req.body.name,
            age: req.body.age
            
        }
    )

    form1.save(function (err, result) {
        if (err) {
            return next(err)
        }
      
       // debug
       // res.send(result.id);
       
       var theParams = {
                 "id": result.id,
                 "name": result.name,
                 "age": result.age
                 }
           
        var text =  {
                 title: "Form 1 (Created)", 
                 content:"../contents/form1created.ejs",
                 descr: "empty.....",
                 nav: theIndex.nav,
                 header: theIndex.header,
                 footer: theIndex.footer,
                 params: [theParams]
                }
        
        res.render(theIndex.index,text)
      
    }) // end save

} // end create

// ----------------------------------------------------------------------
