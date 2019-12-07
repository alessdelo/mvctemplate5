



// CREATES A RECORD (GET REQUEST)

var mainFolder = "../../";

// const theModel = require(mainFolder + 'models/kitty')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Mosca1 broker"
var theUrl = "../contents/moscaMQTT/mosca1broker.ejs"
var theDescr = "empty....."

// -----------------------------------------

/*
// mosca MQTT broker
var mosca = require("mosca")
var settings = {port: 1234}
var broker = new mosca.Server(settings)
*/

exports.mosca1sub = function (req, res) {
  
          res.send('test subscriber')

} // end .export
