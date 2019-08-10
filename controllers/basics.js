// TAKES RANDOM VALUES FROM MONGO COLLECTION

var mainFolder = "../";

const theModel = require(mainFolder + 'models/kitty')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Basics for Form"
var theUrl = "../contents/basics.ejs"
var theDescr = "empty....."

// -----------------------------------------

exports.toDo = function (req, res) {


    // Get the count of all users
    theModel.count().exec(function (err, count) {

      // Get a random entry
      var random = Math.floor(Math.random() * count)

      // Again query all users but only fetch one offset by our random #
      theModel.findOne().skip(random).exec(
        function (err, result) {
          // Tada! random user
          // console.log(result)
          
          var theParams = {
                 "puppyTestInfos": randoms.randWord(5) + '/' + randoms.randNum(99),
                 "kittyCreateInfos": randoms.randWord(5) + '/' + randoms.randNum(99),
                 "kittyReadInfos": result._id,
                 "kittyUpdateInfos": result._id,
                 "kittyDeleteInfos": result._id,
                 "kittyLastitemInfos": randoms.randNum(5)
                 }
                 
           var text =  {
                   title: "home", 
                   content:"../contents/home.ejs",
                   descr: "empty.....",
                   nav: theIndex.nav,
                   header: theIndex.header,
                   footer: theIndex.footer,
                   params: [theParams]
                  }  
                  
           // debug
           res.send(theParams)
           // res.send(text)
           
           // res.render(theIndex.index,text)
  
        })
        
        
        
    }) // end User.count

} // end toDo
