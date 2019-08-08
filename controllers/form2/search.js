// CREATES A RECORD (GET REQUEST)

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


MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});
