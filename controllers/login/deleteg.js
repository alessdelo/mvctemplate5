// SHOWS THE RECORD TO DELETE - (GET REQUEST)

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/user')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Delete a User"
var theUrl = "../contents/login/deleteg.ejs"
var theDescr = "empty....."


// --------------------------------------

exports.deleting = function (req, res) {
       
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
                // debugs
                // res.send(text)
                res.render(theIndex.index,text)
    })
}
