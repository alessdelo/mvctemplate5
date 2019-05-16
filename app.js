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
var header = "../partials/header.ejs"
var nav = "../partials/nav.ejs"
var footer = "../partials/footer.ejs"


var pageData = {
  home: {
    title: "home", 
    content:'../contents/home.ejs',
    descr: 'empty.....',
    nav: nav,
    header: header,
    footer: footer,
    params: [keytest, smartContractAddress, Web3]
  },
  pag2: {
    title:'dapp2',
    content:'../contents/dapp2.ejs',
    descr: 'empty.....',
    nav: nav,
    header: header,
    footer: footer,
    params: []
  }
}

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
// ---------------------------------
// ---------------------------------

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
