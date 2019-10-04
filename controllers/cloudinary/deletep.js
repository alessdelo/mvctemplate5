// Dependencies
 var cloudinary = require('cloudinary');

// var cloudinary = require('cloudinary').v2


// Configure Cloudinary
// with credentials available on
// your Cloudinary account dashboard
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
})





var mainFolder = "../../";

const theModel = require(mainFolder + 'models/cloudinary')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Cloudinary: just deleted record"
var theUrl = "../contents/cloudinary/deletep.ejs"
var theDescr = "empty....."

// -----------------------------------------

exports.deletep = function (req, res) {

  cloudinary.v2.uploader.destroy(req.params.id, function(error,result) {
     



    theModel.findByIdAndRemove(req.params.id, { useFindAndModify: false }, function (err, result) {
        if (err) return next(err)
        // res.send(result)
        // res.send('item id: ' + req.params.id + ' Deleted successfully!')
        // res.send( debugs.textFromObject(result) )
                                                     
                                                    var theParams = result
       
       
                                                    
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


    }) // end findByIdAndRemove

  }) // end cloudinary

} // end exports
