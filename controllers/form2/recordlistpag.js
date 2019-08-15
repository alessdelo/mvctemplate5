// EXSTRACT LAST N. INSERTED RECORDS  (WITH PAGINATION)
// uses count - skip - limit

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/kitty')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Records Pagination"
var theUrl = "../contents/form2/recordlistpag.ejs"
var theDescr = "empty....."

// -----------------------------------------

exports.recordlistpag = function (req, res) {

    var recNum = theModel.count()
    
    var page = parseInt(req.params.page) || 1
    
    var limit = parseInt(req.params.limit) || 10
    
    var pagesNum = recNum / limit
    
    var lastPage = 0
    
    if((recNum % page) <= limit) lastPage = 1

    theModel.find({}, { useFindAndModify: false }, function (err, result) {
    
         if (err) res.send(debugs.textFromObject(err)) // return next(err)
                  
                var theParams = {records: result,
                                 currentpage: page,
                                 currentlimit: limit,
                                 pagesnum: pagesNum                                 
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
                
                res.render(theIndex.index,text)
                
                // res.send("the num: " + req.params.num + "<br> result: " + debugs.textFromObject(result))

            } ).sort({$natural:1})
               .limit(limit)
               .skip(page * limit)
                         
 } // end recordlist

