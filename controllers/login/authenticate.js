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

async function authenticateUsr({ username, password }) {
    const user = await theModel.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, jwtConfig.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}
  
exports.authenticate = function (req, res, next) {
    authenticateUsr(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}