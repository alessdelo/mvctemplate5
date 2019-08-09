// SEARCHES A RECORD (GET REQUEST)

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/kitty')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Form2 (Search)"
var theUrl = "../contents/form2/recordlist.ejs"
var theDescr = "empty....."

// -----------------------------------------


// -----------------------------------------

exports.search = function (req, res) {
   
   let theQuery = {}
   
   if (req.body.id != "") { theQuery._id = req.body.id }
   if (req.body.name != "") { theQuery.name = req.body.name }
   if (req.body.age != "") { theQuery.age = req.body.age }
   
   theModel.find( theQuery, function (err, result) {
        
        // debug
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

                   res.render(theIndex.index,text)

   })
}

