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

var theTitle = "Registered User"
var theUrl = "../contents/login/registerp.ejs"
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
                 //  res.send(text)

                 // res.render(theIndex.index,text)
                  
                 return text;

              }) // end save
    
    

    
} // end createUsr()





async function insertUsr(params) {
    
    // validate
    if (await theModel.findOne({ username: params.username })) {
        throw 'Username "' + params.username + '" is already taken';
    }

    // hash password
    if (params.password) {
        params.hash = bcrypt.hashSync(params.password, 10);
    }
    
    let theSchema = new theModel(
                  {
                        username: params.username,
                        hash: params.hash,
                        firstName: params.firstName,
                        lastName: params.lastName
                   }
    ) // end Schema





    var text =  {};

    // save user
    await theSchema.save(function (err, result) {
                  if (err) {
                      return next(err)
                  }

                  var theParams = {
                  
                           "username": result.username,
                           "firstName": result.firstName,
                           "lastName": result.lastName,
                           "hash": result.hash,
                           "createdDate": result.createdDate
                           }
 
                       /*              
                       text[title] = theTitle;
                       text[content] = theUrl,
                       text[descr] = theDescr;
                       text[nav] = theIndex.nav;
                       text[header] = theIndex.header;
                       text[footer] = theIndex.footer;
                       text[params] = theParams;
                        */  

                  // debug
                 //  res.send(text)

                 // res.render(theIndex.index,text)
                  
                 // return text;

                 text = "dddfffggg";


    }) // end save

    text.title = theTitle;
    text.content = theUrl;
    text.descr = theDescr;
    text.nav = theIndex.nav;
    text.header = theIndex.header;
    text.footer = theIndex.footer;
    text.params = theSchema;

    return text;
    
} // end insertUsr


exports.register = function (req, res, next) {
          
        insertUsr(req.body)
            // debug
            // .then(data => res.send("the data are these: " + JSON.stringify(data)))
        .then(data =>  res.render(theIndex.index,data))
        .catch(err => next(err));
}

