// EXTRACTS RECORDS FOR THE PHOTO-GALLERY

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/cloudinary')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Photo Gallery"
var theUrl = "../contents/cloudinary/gallery.ejs"
var theDescr = "empty....."

// -----------------------------------------------------------------------

                   //  

exports.gallery = function (req, res) {   
    
    theModel.find()
                    .sort({created_at:-1}) 
    
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
                                     params: [theParams]
                                    }
                
                            // debug
                             res.send(text)
                           //  res.render(theIndex.index,text)

                        })
                    })
    
} // end .exports

