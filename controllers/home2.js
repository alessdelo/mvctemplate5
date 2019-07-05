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

var =htmlText ='<h1>MVC Modules Import Test (Controller - Router - app)</h1>' +
               '<br><br>' +
               '<a href=\"test/test0\">test 0</a>' +
               '<br><br>' +
               '<a href=\"test/test1\">test 1</a>' +
               '<br><br>' +
               '<a href=\"puppy/test/' + randoms.randWord(5) + '/' + randoms.randNum(99) + '\">puppy test</a>' +
               '<br><br>' +
               '<br><br>' +
               '<h2>Kitty</h2>' +
               '<br><br>' +
               '<a href=\"kitty/create/' + randoms.randWord(5) + '/' + randoms.randNum(99) + '\">save</a>' +
               '<br><br>' +
               '<a href=\"kitty/read/' + randoms.randItemFromArray(updArr) + '\">read</a>' +
               '<br><br>' +
               '<a href=\"kitty/update/' + randoms.randItemFromArray(updArr) + '/' + randoms.randWord(5) + '/' + randoms.randNum(99) + '\">update</a>' +
               '<br><br>' +
               '<a href=\"kitty/delete/' + randoms.randItemFromArray(delArr) + '\">delete</a>' +
               '<br><br>' +
               '<a href=\"kitty/lastitems/' + randoms.randNum(5) + '\">last items</a>' +
               '<br><br>' +
               '<h2>Views</h2>' +
               '<br><br>' +
               '<a href=\"home/home\">home</a>' +
               '<br><br>' +
               '<a href=\"home/home\">home (direct)</a>' +
               '<br><br>';
