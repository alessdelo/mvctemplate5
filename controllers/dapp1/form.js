// CREATES A RECORD (GET REQUEST)

var mainFolder = "../../";

// const theModel = require(mainFolder + 'models/maps')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Dapp 1"
var theUrl = "../contents/dapp1/form.ejs"
var theDescr = "empty....."

// -----------------------------------------

const Web3 = require('web3')

const smartContractAddress = process.env.DAPP1_WALLET_ADDRESS

// const Web3 = require('web3')
// retrieves infura key from Heroku constants
// Ropsten
// const infuraRopstenKey = process.env.INFURA_ROPSTEN_KEY
// Rinkeby
const infuraRinkebyKey = process.env.DAPP1_INFURA_RINKEBY_KEY

// sets ethereum provider URI (can be ropsten or rinkeby)
// retrieves infura key from Heroku constants 
// var ethereumProviderUri = "https://" + "rinkeby" + ".infura.io/v3/" + process.env.DAPP1_INFURA_RINKEBY_KEY

const keytest = "myKeyTest"

// connect to Infura node
// Ropsten
// const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/' + infuraRopstenKey))
// Rinkeby
// const InfuraWeb3 = new Web3(new Web3.providers.HttpProvider(ethereumProviderUr))

// -----------------------------------------

// change this!!!!!!
exports.form = function (req, res) {

        var text =  {
                 title: theTitle, 
                 content:theUrl,
                 descr: theDescr,
                 nav: theIndex.nav,
                 header: theIndex.header,
                 footer: theIndex.footer,
                 params: [keytest, smartContractAddress, Web3]
                
                }
                  
        /*

                params: {"keytest": keytest,
                          "smartContractAddress": smartContractAddress,
                          "Web3": Web3
                         }
        */
        
        // debug
        // res.send(text)
        res.render(theIndex.index,text)
        
} // end exports.

