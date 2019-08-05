// CREATES A RECORD (GET REQUEST)

const theModel = require('../models/kitty')
const debugs = require('../helpers/debugs.js')
const randoms = require('../helpers/randoms.js')

var importVars = require('../vars.js')
var theIndex = importVars.index

// -----------------------------------------

exports.createg = function (req, res) {

    let form1 = new theModel(
        {
            name: req.params.name,
            age: req.params.age
            
        }
    )

    form1.save(function (err) {
        if (err) {
            return next(err)
        }
        
        var theParams = {
                 "name": req.params.name,
                 "age": req.params.age
                 };

        var text =  {
                 title: "Form 1 (Create)", 
                 content:"../contents/form1create.ejs",
                 descr: "empty.....",
                 nav: theIndex.nav,
                 header: theIndex.header,
                 footer: theIndex.footer,
                 params: [theParams]
                }
        res.render(theIndex.index,text)
    }) // end save

} // end create
