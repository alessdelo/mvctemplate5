cloudinary.v2.uploader.destroy('sample', function(error,result) {
  console.log(result, error) });


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


    })
}
