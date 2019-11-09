var mainFolder = "../../";

// Dependencies
 var cloudinary = require('cloudinary');

// var cloudinary = require('cloudinary').v2


// imports cloudinary config module module
var configs = require(mainFolder + 'configs');

var cloudyConfig = configs.cloudyConfig;

cloudinary.config(cloudyConfig)


// UPDATES A RECORD (POST REQUEST)


const theModel = require(mainFolder + 'models/user')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Form2 (Update - post)"
var theUrl = "../contents/cloudinary/updatep.ejs"
var theDescr = "empty....."

// ----------------------------------------

exports.updatep = function (req, res) {

/*
      cloudinary.uploader.upload(req.files.image.path,
                               {folder: 'alessdelo/test2'},
                               function(result) {
*/
      cloudinary.uploader.upload(req.files.image.path, function(result) {
       


    var theReq = req.body
    // var reqText = JSON.stringify(req, null, 4)               
    
    theModel.findByIdAndUpdate(
                            { "_id": theReq.id },
        
                            { $set: { "title": theReq.title,
                                      "description": theReq.description,
                                      "image": result.url,
                                      "image_id": result.public_id
                                    }
                            }, 
           
                            {new: true},
    
                            function (err, result) {

                            if (err)  res.send(err + " - - - " + theReq.id + " - " + theReq.name + " - " + theReq.age  )                            
                            // if (err) return next(new Error('There was an error'))

                                                    /* 
                                                    res.send('Record udpated (result): ' + ' id: ' + result.id + 
                                                                                ' name: ' + result.name + 
                                                                           ' age: ' + result.age
                                                                                )
                                                   */




                                                    // debug
                                                    // res.send(req.body)

                                                    // var theParams = {"id":req.body.id, "name": req.body.name, "age": req.body.age}
                                                    
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


    },  {
           folder: 'alessdelo/test2',
           public_id: req.body.imgID
        }) // end cloudinary uploader    
            

} // end update
