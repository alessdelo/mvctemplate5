const Home = require('../models/home')
const debugs = require('../helpers/debugs.js')

var importVars = require('../vars.js')
var theIndex = importVars.index

var text =  {
           title: "home", 
           content:"../contents/home.ejs",
           descr: "empty.....",
           nav: "",
           header: "",
           footer: "",
           params: []
          }

exports.home = function (req, res) {
        res.render(theIndex,text)
}
