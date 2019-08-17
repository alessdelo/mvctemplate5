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

/*

exports.recordlistpag = function (req, res) {

    // var recNum = theModel.count()
    
    
    // theModel.count({}, function( err, count){
       //   var recNum = count
   //  })
    

   function recCountPromise(){
      var recNumPromise = theModel.count({}).exec()
      return recNumPromise
   }

  var promise = recCountPromise()
    
    var page = parseInt(req.params.page) || 1
    
    var limit = parseInt(req.params.limit) || 10
    
    var pagesNum = parseInt(promise / limit) || 0
    
    var lastPage = 0
    
    // if((recNum % page) <= limit) lastPage = 1




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

*/

// ----------------------------

/*


function recCountPromise(){
      var recNumPromise = theModel.count({}).exec()
      return recNumPromise
}





exports.recordlistpag = function (req, res) {



// var recNum = theModel.count()
    
    
    // theModel.count({}, function( err, count){
       //   var recNum = count
   //  })
    



    var promise = recCountPromise()
    
    var page = parseInt(req.params.page) || 1
    
    var limit = parseInt(req.params.limit) || 10
    
    var pagesNum = parseInt(promise / limit) || 0
    
    var lastPage = 0
    
    // if((recNum % page) <= limit) lastPage = 1




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


*/

// -----------------------------------------------------------------------------

/*
exports.recordlistpag = function (req, res) {

    var query = theModel.count()
    query.exec().then(function (count) {
      // docs is an array of 3 docs
        res.send('there are %d documents', count)
    })

} // end recordlistpag
*/

// -----------------------------------------------------------------------

// https://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js

exports.recordlistpag = function (req, res) {

    var limit = parseInt(req.params.limit)
    var page = parseInt(req.params.page)

    theModel.find()
        .select('name')
        .limit(limit)
        .skip(limit * page)
        .sort({
            name: 'asc'
        })
        .exec(function(err, events) {
            theModel.count().exec(function(err, count) {
                res.send('events', {
                    events: events,
                    page: page,
                    pages: count / limit
                })
            })
        })

} // end recordlistpag
