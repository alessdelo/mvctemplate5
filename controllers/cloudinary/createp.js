var mainFolder = "../../";

// Dependencies
 var cloudinary = require('cloudinary');

// var cloudinary = require('cloudinary').v2


// imports cloudinary config module module
var configs = require(mainFolder + 'configs');

var cloudyConfig = configs.cloudyConfig;

cloudinary.config(cloudyConfig)


// CREATES A RECORD (GET REQUEST)

const theModel = require(mainFolder + 'models/cloudinary')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Cloudinary Record Created (img uploaded)"
var theUrl = "../contents/cloudinary/createp.ejs"
var theDescr = "empty....."

// -----------------------------------------

// change this!!!!!!
exports.createp = function (req, res) {
    
    // --------------------------------
    // CLOUDINARY
    // Use Cloudinary uploader to upload to cloudinary sever
      // Access files uploaded from the browser using req.files

/*
      cloudinary.uploader.upload(req.files.image.path,
                               {folder: 'alessdelo/test2'},
                               function(result) {
*/
      cloudinary.uploader.upload(req.files.image.path, function(result) {
       
                    // Create a post model
                    // by assembling all data as object
                    // and passing to Model instance   
               let theSchema = new theModel(
                  {
                       title: req.body.title,
                        description: req.body.description,
                        created_at: new Date(),
                        // Store the URL in a DB for future use
                        image: result.url,
                        image_id: result.public_id,
                        photo360: result.photo360
                  }
              )

              theSchema.save(function (err, result) {
                  if (err) {
                      return next(err)
                  }

                 // debug
                 // res.send(result)
                 // res.send(result.id);

                 var theParams = {
                           "id": result.id,
                           "title": result.title,
                           "created_at": result.created_at,
                           "image": result.image,
                           "image_id": result.image_id,
                           "photo360": result.photo360
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

                  res.render(theIndex.index,text)

              }) // end save

    // }) // end cloudinary uploader
    },  {folder: 'alessdelo/test2'}) // end cloudinary uploader    
            
} // end exports.
