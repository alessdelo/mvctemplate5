// SEARCHES A RECORD (GET REQUEST)

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/kitty')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Form2 (Search)"
var theUrl = "../contents/form2/search.ejs"
var theDescr = "empty....."

// -----------------------------------------


// -----------------------------------------

exports.search = function (req, res) {
   
   theModel.find({ name: 'Dazaq'}, function (err, docs) {
   
   // theModel.find({ name: 'Dazaq', age: { $all:["age"] }}, function (err, docs) {

  // res.send(req.body)
      
        res.send(docs)


   })
}

