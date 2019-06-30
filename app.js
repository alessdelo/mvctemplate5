const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000

const dbUri = process.env.MONGODB_URI

mongoose.connect(dbUri,{ useNewUrlParser: true })
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const kitty = require('./routes/kitty') // Imports routes for the 
const puppy = require('./routes/puppy') // Imports routes for the 
const test = require('./routes/test')

// helpers
const randoms = require('./helpers/randoms.js')
const debugs = require('./helpers/debugs.js')

/*
var index = 'pages/index'
module.exports.index = index



var pageData = {}


var importHome = require('./routes/home.js')
pageData.home = importHome.addJson

var importPag2 = require('./routes/pag2.js')
pageData.pag2 = importPag2.addJson

var importPag3 = require('./routes/pag3.js')
pageData.pag3 = importPag3.addJson

// console.log(importPag3.addJson)
// console.log(pageData)



for(k in pageData) {
  
   console.log("lev.1) " + k + ": " + pageData[k])
  
    for(kk in pageData[k]) {
               
        pageData[k].header = "../partials/header2.ejs"
        pageData[k].nav = "../partials/nav.ejs"
        pageData[k].footer = "../partials/footer2.ejs"
        console.log(kk + ": " + pageData[k][kk])

    }

}
*/

// console.log(pageData)

var app = express()
  app.use('/static', express.static(path.join(__dirname, 'public')))
  app.set('views', './views')
  app.set('view engine', 'ejs')
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: false}))

  /*
  // logs the http request
  app.use((req, res, next) => {
    console.log(req)
    next()
  });
  */

  app.use((err, req, res, next) => {
      // log the error...
      res.sendStatus(err.httpStatusCode).json(err)
      res.send("an error occourred...")
      next()
  })



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

  // app.get('/', (req, res) => res.render(index,pageData.home))

  app.get('/', function (req, res) {res.send('<h1>MVC Modules Import Test (Controller - Router - app)</h1>' +
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
                                             '<br><br>'
                                            
                                             )}   )


 // app.use(bodyParser.json())
 // app.use(bodyParser.urlencoded({extended: false}))
  app.use('/kitty', kitty)
  app.use('/puppy', puppy)
  app.use('/test', test)

// var importHome = require('./routes/home.js')

// var importPag2 = require('./routes/pag2.js')

// var importPag3 = require('./routes/pag3.js')

// ---------------------------------
// home

// app.get('/home', (req, res) => res.render(index,pageData.home))

// ---------------------------------
// pag2

// app.get('/pag2', (req, res) => res.render(index,pageData.pag2))

// ---------------------------------
// pag3

// app.get('/pag3', (req, res) => res.render(index,pageData.pag3))

// ---------------------------------
// ---------------------------------
// ---------------------------------

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
