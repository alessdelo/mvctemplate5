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

var theTitle = "Register User"
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


// var text;


async function testFunct(params) {
    
    /*
    // hash password
    if (params.password) {
        params.hash = bcrypt.hashSync(params.password, 10);
    }
    */

    let theSchema = new theModel(
                  {
                        username: params.username,
                        hash: params.password,
                        firstName: params.firstName,
                        lastName: params.firstName
                   }
    ) // end Schema




/*
    var text =  {
                       title: "",                       
                       content: "",
                       descr: "",
                       nav: "",
                       header: "",
                       footer: "",
                       params: ""
};

*/

// "id": result.id,

    // save user
    await theSchema.save(function (err, result) {
                  if (err) {
                      return next(err)
                  }

                  
                  var theParams = {
                           
                           "username": result.username,
                           "firstName": result.firstName,
                           "lastName": result.lastName,
                           "password": result.password,
                           "createdDate": result.createdDate
                           }
                  
                   
                  /*
                  var text =  {
                           title: theTitle, 
                           content: theUrl,
                           descr: theDescr,
                           nav: theIndex.nav,
                           header: theIndex.header,
                           footer: theIndex.footer,
                           params: [theParams]
                          }
                      */

                       /*
                       text[title] = theTitle;                       
                       text[content] = theUrl;
                       text[descr] = theDescr;
                       text[nav] = theIndex.nav;
                       text[header] = theIndex.header;
                       text[footer] = theIndex.footer;
                       text[params] = [theParams];
                       */  

                  // debug
                 //  res.send(text)

                 // res.render(theIndex.index,text)
                  
                  // return text;
                 // return theParams;
                 // return "blaaa";


    }) // end save


// return theSchema;
// return text;
return "blaaa";

}


exports.register = function (req, res, next) {
    
        // createUsr(req.body)
        testFunct(req.body)
        // .then(() =>  res.render(theIndex.index,createUsr(req.body))
        // .then(() => res.json({}))
        // .then(() => res.send(createUsr(req.body))
        // .then(data => return {res.send(data); })
        // .then(function(data) {res.send(data)})
         .then(data => res.send("the data are these: " + data))
        // .then(data => res.render(theIndex.index,data))
        // .then(data => res.send("the data are these: " + JSON.stringify(data)))
        // .then(() => res.send("the data are these: " + req.body))
        // .then(data => res.send("the data are these: " + JSON.stringify(data)))
        // .then(() => res.json({}))
        // .then(data => res.send.bind(data))
        // .then(data => res.json({data}))
        // .then(() => res.send(res))
        // .then(() => res.send(theResult))
        // .then(() => res.send("ok text!"))  
        .catch(err => next(err));
}



/*
exports.register = function (req, res) { 
        res.send(req.body)
}
*/
