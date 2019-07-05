const Home = require('../models/home')
const debugs = require('../helpers/debugs.js')

var importVars = require('../vars.js')
var theIndex = importVars.index

var text =  {
           title: "home", 
           content:"../contents/home.ejs",
           descr: "empty.....",
           nav: theIndex.nav,
           header: theIndex.header,
           footer: theIndex.footer,
           params: []
          }

exports.home = function (req, res) {
       res.render(theIndex.index,text)
}

