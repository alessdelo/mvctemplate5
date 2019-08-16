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

    // var recNum = theModel.count()
    
    /*
    theModel.count({}, function( err, count){
         var recNum = count
    })
    */

   function recCountPromise(){
      var recNumPromise = theModel.count({}).exec()
      return recNumPromise
   }
    
    var page = parseInt(req.params.page) || 1
    
    var limit = parseInt(req.params.limit) || 10
    
    var pagesNum = parseInt(recNum / limit) || 0
    
    var lastPage = 0
    
    // if((recNum % page) <= limit) lastPage = 1

var promise = recCountPromise()


    if((promise % page) <= limit) lastPage = 1

promise.then(function(){


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

}).error(function(error){
   console.log(error)
})    // end promise



                         
 } // end recordlist

