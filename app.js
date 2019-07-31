const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000

const dbUri = process.env.MONGODB_URI

mongoose.connect(dbUri,{ useNewUrlParser: true })
mongoose.Promise = global.Promise
mongoose.set('useFindAndModify', false)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Imports routes for every content
const home = require('./routes/home')
const home2 = require('./routes/home2')
const kitty = require('./routes/kitty')
const puppy = require('./routes/puppy')
const test = require('./routes/test')
const form1 = require('./routes/form1')
const ejs = require('./routes/ejs')

// helpers
const randoms = require('./helpers/randoms.js')
const debugs = require('./helpers/debugs.js')



// console.log(pageData)

var app = express()
  app.use('/static', express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))

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


 // app.use(bodyParser.json())
 // app.use(bodyParser.urlencoded({extended: false}))
  app.use('/', home)
  app.use('/home', home)
  app.use('/home2', home2)
  app.use('/kitty', kitty)
  app.use('/puppy', puppy)
  app.use('/test', test)
  app.use('/form1', form1)
  app.use('/ejs', ejs)


// ---------------------------------
// ---------------------------------
// ---------------------------------

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
