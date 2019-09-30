// READS RECORD DATA (GIVEN ID) - GET REQUEST

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/cloudinary')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Shows Record Details"
var theUrl = "../contents/cloudinary/show.ejs"
var theDescr = "empty....."

// -----------------------------------------------------

exports.show = function (req, res) {
    theModel.findById(req.params.id, function (err, result) {
        if (err) return next(err)
        
                // res.send(result)
                
                var theParams = {result}
       
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
                // res.send(text)
                
                res.render(theIndex.index,text)
    })
}
