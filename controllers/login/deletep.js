var mainFolder = "../../";

// imports jwt config module
var configs = require(mainFolder + 'configs');
var jwtConfig = configs.jwtConfig;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


/*
// Dependencies
 var cloudinary = require('cloudinary');

// var cloudinary = require('cloudinary').v2

// imports cloudinary config module module
var configs = require(mainFolder + 'configs');

var cloudyConfig = configs.cloudyConfig;

cloudinary.config(cloudyConfig)
*/


const theModel = require(mainFolder + 'models/user')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Just deleted record"
var theUrl = "../contents/login/deletep.ejs"
var theDescr = "empty....."

// -----------------------------------------

async function deleteUsr({ _id, password }) {

    const user = await theModel.findOne({ _id });

    var testData = "aaa"

    if (user && bcrypt.compareSync(password, user.hash)) {

        await theModel.findByIdAndRemove(_id, { useFindAndModify: false }, function (err, result) {
        if (err) return next(err)
            
           var theParams = result

           /*

           const { hash, ...userWithoutHash } = result.toObject();
           const token = jwt.sign({ sub: user._id }, jwtConfig.secret);
           var theParams =  {
               ...userWithoutHash,
               token
           };

           */

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
                                                   // return text
                                                   
                    


         }) // end findByIdAndRemove

          testData += " oooookkkeeee!!!"
          return testData 


     } // end if




} // end function



exports.deletep = function (req, res, next) {
    deleteUsr(req.body)
        // .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .then(data => res.send(data)) 

        // .then(data => data ? res.send(data) : res.status(400).json({ message: 'Username or password is incorrect' }))
        // .then(user => user ? res.render(theIndex.index,user) : res.status(400).json({ message: 'Username or password is incorrect' }))

       .catch(err => next(err));
}

// -----------------------------------------

/*

exports.deletep = async function (req, res) {


   await theModel.findByIdAndRemove(req.body._id, { useFindAndModify: false }, function (err, result) {
        if (err) return next(err)
        // res.send(result)
        // res.send('item id: ' + req.body.id + ' Deleted successfully!')
        // res.send( debugs.textFromObject(result) )   
                                                     
                                                    var theParams = result
                                                        
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
                                                    res.send(text)
                                                    
                                                   // res.render(theIndex.index,text)


  }) // end findByIdAndRemove

} // end exports

*/
