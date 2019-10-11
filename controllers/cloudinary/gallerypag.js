// EXTRACTS RECORDS FOR THE PHOTO-GALLERY

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/cloudinary')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Photo Gallery with Pagination"
var theUrl = "../contents/cloudinary/gallerypag.ejs"
var theDescr = "empty....."

// -----------------------------------------------------------------------

                   //  

exports.gallerypag = function (req, res) { 
  
    var page = parseInt(req.params.page)    
    var limit = parseInt(req.params.limit)
    var theSkip =  (page * limit)
    
    theModel.find()
                    .sort({created_at:-1}) 
                    .limit(limit)     
                    .skip(theSkip)
    
                    .exec(function(err, result) {
                        theModel.count().exec(function(err, count) {
                            
                             var theParams = {result}
       
                            var text =  {
                                     title: theTitle, 
                                     content: theUrl,
                                     descr: theDescr,
                                     nav: theIndex.nav,
                                     header: theIndex.header,
                                     footer: theIndex.footer,
                                     pagination:theIndex.pagination,
                                     params: [theParams]
                                    }
                
                            // debug
                            // res.send(text)
                             res.render(theIndex.index,text)

                        })
                    })
    
} // end .exports
