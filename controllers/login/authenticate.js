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
var theUrl = "../contents/login/profile.ejs"
var theDescr = "empty....."

// -----------------------------------------


/*
async function authenticateUsr({ email, password }) {
    const user = await theModel.findOne({ email });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, jwtConfig.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}
*/

  
exports.authenticate = function (req, res, next) {

                var theParams = {res}
       
                var text =  {
                         title: theTitle, 
                         content: theUrl,
                         descr: theDescr,
                         nav: theIndex.nav,
                         header: theIndex.header,
                         footer: theIndex.footer,
                         params: [theParams]
                        }

                 return text;             

    authenticateUsr(req.body)
        //.then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .then(user => user ? res.render(theIndex.index,user) : res.status(400).json({ message: 'Username or password is incorrect' }))
       .catch(err => next(err));
}

// ---------------------------------

/*
async function authenticateUsr({ email, password }) {
    const user = await theModel.findOne({ email });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, jwtConfig.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}
*/

/*
exports.authenticate = function (req, res, next) {
    authenticateUsr(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}
*/
