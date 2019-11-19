var mainFolder = "../../";


/*
// Dependencies
 var cloudinary = require('cloudinary');
// var cloudinary = require('cloudinary').v2
// imports cloudinary config module module
var configs = require(mainFolder + 'configs');
var cloudyConfig = configs.cloudyConfig;
cloudinary.config(cloudyConfig)
*/

// UPDATES A RECORD (POST REQUEST)


const theModel = require(mainFolder + 'models/user')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Updated User"
var theUrl = "../contents/login/updatep.ejs"
var theDescr = "empty....."

// ----------------------------------------

async function checkUsrByID({ _id }) {

}

async function checkUsrByID({ email }) {

}



async function updateUsr({ _id, currEmail, newEmail, currPassword, newPassword }) {

// exports.updatep = function (req, res) {

   // var theReq = req.body   

    ceckData = "";
    const occupiedEmail = await theModel.find({ newEmail }).count()
    const userByEmail = await theModel.findOne({ currEmail });
    const userByID = await theModel.findOne({ _id });
 
         if (occupiedEmail && occupiedEmail > 0) {
            ceckData += " the email you just gave already exists.";
         }
 
          if (userByEmail && userByID.email == currEmail) {
            ceckData += " the email you just sent doesn't match with the account's current email.";
         }

        // deve verificare che la vecchia mail sia esistente e che quella nuova non sia già presa da un altro utente

    

             
    
    theModel.findByIdAndUpdate(
                            { "_id": theReq._id },
        
                            { $set: { "username": theReq.username,
                                      // "password": theReq.password,
                                      "firstName": theReq.firstName,
                                      "lastName": theReq.lastName
                                    }
                            }, 
           
                            {new: true},
    
                            function (err, result) {

                            if (err)  res.send(err)                            
                            // if (err) return next(new Error('There was an error'))

                                                    // debug
                                                    // res.send(req.body)
                                                    var theParams = theReq
                                                           
                                                    var text =  {
                                                                 title: theTitle, 
                                                                 content:theUrl,
                                                                 descr: theDescr,
                                                                 nav: theIndex.nav,
                                                                 header: theIndex.header,
                                                                 footer: theIndex.footer,
                                                                 params: [theParams]
                                                                }
                                                    // debug
                                                    // res.send(text)
                                                   
                                                    res.render(theIndex.index,text)


                            } )


} // end update



// ----------------------------------------

/*

exports.updatep = function (req, res) {

    var theReq = req.body              
    
    theModel.findByIdAndUpdate(
                            { "_id": theReq._id },
        
                            { $set: { "username": theReq.username,
                                      // "password": theReq.password,
                                      "firstName": theReq.firstName,
                                      "lastName": theReq.lastName
                                    }
                            }, 
           
                            {new: true},
    
                            function (err, result) {

                            if (err)  res.send(err)                            
                            // if (err) return next(new Error('There was an error'))

                                                    // debug
                                                    // res.send(req.body)
                                                    var theParams = theReq
                                                           
                                                    var text =  {
                                                                 title: theTitle, 
                                                                 content:theUrl,
                                                                 descr: theDescr,
                                                                 nav: theIndex.nav,
                                                                 header: theIndex.header,
                                                                 footer: theIndex.footer,
                                                                 params: [theParams]
                                                                }
                                                    // debug
                                                    // res.send(text)
                                                   
                                                    res.render(theIndex.index,text)


                            } )


} // end update

*/
