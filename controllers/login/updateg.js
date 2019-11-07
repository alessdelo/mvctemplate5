// EDITS A RECORD FOR UPDATING - (GET REQUEST)

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/cloudinary')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "User Update"
var theUrl = "../contents/login/updateg.ejs"
var theDescr = "empty....."


// --------------------------------------

exports.updateg = function (req, res) {
    
    /*
    // cloudinary listResources
    cloudinary.v2.api.resources(
        function(error, result) {console.log(result0, error); });
    */
    
    
    
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
