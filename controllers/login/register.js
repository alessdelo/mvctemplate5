var mainFolder = "../../";

// imports jwt config module
var configs = require(mainFolder + 'configs');
var jwtConfig = configs.jwtConfig;

// declared in app.js file
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
                        email: params.email,
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

                  /*
                  var theParams = {
                  
                           "username": result.username,
                           "email": result.email,
                           "firstName": result.firstName,
                           "lastName": result.lastName,
                           "hash": result.hash,
                           "createdDate": result.createdDate
                           }
 
                    */
                       

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

