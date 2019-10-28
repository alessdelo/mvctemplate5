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

/*
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
    await user.save();
}


exports.register = function (req, res, next) {
    createUsr(req.body)
        // .then(() => res.json({}))
        .then(() => res.send(res))
        .catch(err => next(err));
}
*/

exports.register = function (req, res, next) { 
        res.send(req.body)
}
