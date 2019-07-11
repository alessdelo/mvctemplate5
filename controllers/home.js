const Home = require('../models/home')
const randoms = require('../helpers/randoms.js')
const debugs = require('../helpers/debugs.js')

var importVars = require('../vars.js')
var theIndex = importVars.index

var delArr = [
              "5cf00c15e7179a0a437d8d95", "5cf3d2e5df28f100042a40c3", "5cf3d42ad638830004d55174",			
              "5cf4a4ec8d3aa9000415d78e", "5cf4c38e9283800004e1ddfb", "5cf4c4a39984a500044a70c9",			
              "5cf5605333f0d5000472e5ff",	"5cf5606933f0d5000472e600", "5cf5606a33f0d5000472e601", 			
              "5cf5607433f0d5000472e602"
             ]



var updArr = [
              "5cf561aa6e30e90004fa96be", "5cf5625cff1c4000041414f4",	"5cf60911b7bdbf0004df0031",			
              "5cf66763f8fb710004776396",	"5cf749a48adcb5000469acce", "5cf7b3a2cce92f00041d7c92",
              "5cf7c522bca3990004188576", "5cf7c566bca3990004188577",	"5cf7c5f05d0f2e0004edf862",
              "5cf7c6115d0f2e0004edf863"
             ]

var theParams = {
                 "puppyTestInfos": randoms.randWord(5) + '/' + randoms.randNum(99),
                 "kittyCreateInfos": randoms.randWord(5) + '/' + randoms.randNum(99),
                 "kittyReadInfos": randoms.randItemFromArray(updArr),
                 "kittyUpdateInfos": randoms.randItemFromArray(updArr),
                 "kittyDeleteInfos": randoms.randItemFromArray(delArr),
                 "kittyLastitemInfos": randoms.randNum(5)
                 };


var text =  {
         title: "home", 
         content:"../contents/home2.ejs",
         descr: "empty.....",
         nav: theIndex.nav,
         header: theIndex.header,
         footer: theIndex.footer,
         params: [theParams]
        }
  
exports.toDo = function (req, res) {
       res.render(theIndex.index,text)
} 
