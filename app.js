const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

// const smartContractAddress = process.env.WALLET_ADDRESS

// const Web3 = require('web3')
// retrieves infura key from Heroku constants
// Ropsten
// const infuraRopstenKey = process.env.INFURA_ROPSTEN_KEY
// Rinkeby
// const infuraRinkebyKey = process.env.INFURA_RINKEBY_KEY

// const keytest = "myKeyTest"

// connect to Infura node
// Ropsten
// const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/' + infuraRopstenKey))
// Rinkeby
// const InfuraWeb3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/' + infuraRinkebyKey))

var index = 'pages/index'
// var header = "../partials/header.ejs"
// var nav = "../partials/nav.ejs"
// var footer = "../partials/footer.ejs"


var importData = require('./routes/pag3.js')

//var pageData = {}



var pageData = {
  home: {
    title: "home", 
    content:'../contents/home.ejs',
    descr: 'empty.....',
    nav: nav,
    header: header,
    footer: footer,
    params: []
  },
  pag2: {
    title: importData.newData,
    content:'../contents/pag2.ejs',
    descr: 'empty.....',
    nav: nav,
    header: header,
    footer: footer,
    params: []
  }
}

pageData.pag3 = importData.addJson

console.log(importData.addJson)
// console.log(pageData)


for(k in pageData) {
  //k.footer = "../partials/footer2.ejs"
   console.log("lev.1) " + k + ": " + pageData[k])
    for(kk in pageData[k]) {
               
        pageData[k].header = "../partials/header2.ejs"
        pageData[k].nav = "../partials/nav.ejs"
        pageData[k].footer = "../partials/footer2.ejs"
        console.log(kk + ": " + pageData[k][kk])

    }

}

// console.log(pageData)


var app = express()
  app.use('/static', express.static(path.join(__dirname, 'public')))
  app.set('views', './views')
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render(index,pageData.home))

 

// ---------------------------------
// home

app.get('/home', (req, res) => res.render(index,pageData.home))

// ---------------------------------
// pag2

app.get('/pag2', (req, res) => res.render(index,pageData.pag2))

// ---------------------------------
// pag3

app.get('/pag3', (req, res) => res.render(index,pageData.pag3))

// ---------------------------------
// ---------------------------------
// ---------------------------------

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
