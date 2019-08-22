// CREATES A RECORD (GET REQUEST)

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/kitty')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Form 3 maps (Create)"
var theUrl = "../contents/form3maps/create.ejs"
var theDescr = "empty....."

// -----------------------------------------

exports.create = function (req, res) {

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
        
        // debug
        // res.send(text)
        res.render(theIndex.index,text)
        
    }) // end save

} // end create
