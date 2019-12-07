



// CREATES A RECORD (GET REQUEST)

var mainFolder = "../../";

// const theModel = require(mainFolder + 'models/kitty')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Mosca1 broker"
var theUrl = "../contents/moscaMQTT/mosca1broker.ejs"
var theDescr = "empty....."

// -----------------------------------------

// mosca MQTT broker
var mosca = require("mosca")
var settings = {port: 1234}
var broker = new mosca.Server(settings)

exports.mosca1broker = function (req, res) {
  
          res.send('test broker')

        /*
       broker.on('ready', () => {
           console.log('broker is ready!')
           res.send('broker is ready!')
           // res.render(theIndex.index,text)
        }) 
        */
 /* 
    let theSchema = new theModel(
        {
            name: req.params.name,
            age: req.params.age
            
        }
    )

    theSchema.save(function (err) {
        if (err) {
            return next(err)
        }
        
        var theParams = {
                 "name": req.params.name,
                 "age": req.params.age
                 };

        var text =  {
                 title: theTitle, 
                 content:theUrl,
                 descr: theDescr,
                 nav: theIndex.nav,
                 header: theIndex.header,
                 footer: theIndex.footer,
                 params: [theParams]
                }

        res.render(theIndex.index,text)
        
    }) // end save

*/

} // end .export
