// CREATES A NEW RECORD FROM DATA SENT VIA POST

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/maps1')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Form 3 maps (Record Created)"
var theUrl = "../contents/form3maps1/created.ejs"
var theDescr = "empty....."

// -----------------------------------------

exports.createp = function (req, res) {
  
    // debug
    // res.send(req.body);
    // res.send(req.body.name + " - " + req.body.age);
   
    let theSchema = new theModel(
        {
            name: req.body.name,
            description: req.body.description,
            rate: req.body.rate,
            loc: {
                    "type": "Point",
                    "coordinates": [req.body.coordx, req.body.coordy]
                   }            
        }
    )

    theSchema.save(function (err, result) {
        if (err) {
            return next(err)
        }
      
       // debug
       // res.send(result)
       // res.send(result.id);
       
       var theParams = {
                 "id": result.id,
                 "name": result.name,
                 "description": result.description,
                 "rate": result.rate,
                 "coordx": result.loc.coordinates[0],
                 "coordy": result.loc.coordinates[1],
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
        //res.send(text)
        
        res.render(theIndex.index,text)
      
    }) // end save

} // end create
