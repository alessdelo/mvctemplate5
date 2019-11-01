var mainFolder = "../../";

// imports jwt config module
var configs = require(mainFolder + 'configs');
var jwtConfig = configs.jwtConfig;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/*
// Dependencies
var cloudinary = require('cloudinary');
// imports cloudinary config module module
var configs = require(mainFolder + 'configs');
var cloudyConfig = configs.cloudyConfig;
cloudinary.config(cloudyConfig)
*/

// CREATES A RECORD (GET REQUEST)

const theModel = require(mainFolder + 'models/user')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Authenticate User"
var theUrl = "../contents/login/authenticate.ejs"
var theDescr = "empty....."

// -----------------------------------------


async function createUsr(userParam) {
    // validate
    if (await theModel.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const user = new theModel(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save(function (err, result) {
                  if (err) {
                      return next(err)
                  }

                 // debug
                 // res.send(result)
                 // res.send(result.id);

                 var theParams = {
                           "id": result.id,
                           "username": result.username,
                           "firstName": result.firstName,
                           "lastName": result.lastName,
                           "hash": result.hash,
                           "createdDate": result.createdDate
                           }

                  var text =  {
                           title: theTitle, 
                           content: theUrl,
                           descr: theDescr,
                           nav: theIndex.nav,
                           header: theIndex.header,
                           footer: theIndex.footer,
                           params: [theParams]
                          }

                  // debug
                  // res.send(text)

                 // res.render(theIndex.index,text)

                  return text;

              }) // end save
} // end createUsr()


exports.register = function (req, res, next) {
    
        createUsr(req.body)
        // .then(() =>  res.render(theIndex.index,createUsr(req.body))
        // .then(() => res.json({}))
        // .then(() => res.send(createUsr(req.body))
        // .then(() => res.send(res))
         .then(() => res.send(theResult))
        // .then(() => res.send("ok text!"))  
        .catch(err => next(err));
}



/*
exports.register = function (req, res) { 
        res.send(req.body)
}
*/
