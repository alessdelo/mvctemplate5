// CREATES A NEW RECORD FROM DATA SENT VIA POST
const theModel = require('../models/kitty')
const debugs = require('../helpers/debugs.js')
const randoms = require('../helpers/randoms.js')

var importVars = require('../vars.js')
var theIndex = importVars.index

var theTitle = "Form 2 (Record Created)"
var theUrl = "../contents/form2created.ejs"
var theDescr = "empty....."

// -----------------------------------------

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
      
    }) // end save

} // end create

// ----------------------------------------------------------------------
