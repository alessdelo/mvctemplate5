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

// -----------------------------------------------------------------------

exports.recordlistpag = function (req, res) {
    
    var page = parseInt(req.params.page) || 1    
    var limit = parseInt(req.params.limit) || 10
    
    theModel.find()
                    .sort({$natural:1})
                    .limit(limit)
                    .skip(page * limit)
    
                    .exec(function(err, result) {
                        theModel.count().exec(function(err, count) {
                            
                             var theParams = {records: result,
                                 currentpage: page,
                                 currentlimit: limit,
                                 pagesnum: Math.floor(count / limit)                                  
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

                        })
                    })
    
} // end recordlistpag