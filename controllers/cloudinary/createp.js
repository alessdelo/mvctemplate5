// Dependencies
var cloudinary = require('cloudinary');

// Configure Cloudinary
// with credentials available on
// your Cloudinary account dashboard
cloudinary.config({
    cloud_name: 'CLOUD_NAME',
    api_key: 'API_KEY',
    api_secret: 'SECRET'
});

// CREATES A RECORD (GET REQUEST)

var mainFolder = "../../";

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
      cloudinary.uploader.upload(req.files.image.path, function(result) {
          // Create a post model
          // by assembling all data as object
          // and passing to Model instance
          
          
           /*
           
          var post = new Model({
              title: req.body.title,
              description: req.body.description,
              created_at: new Date(),
              // Store the URL in a DB for future use
              image: result.url
              image_id: result.public_id
          });
          
         
          // Persist by saving
          post.save(function (err) {
              if(err){
                  res.send(err)
              }
              // Redirect
              res.redirect('/');
          });
      });
      
      */
    
    // -----------------------------
    
     let theSchema = new theModel(
        {
             title: req.body.title,
              description: req.body.description,
              created_at: new Date(),
              // Store the URL in a DB for future use
              image: result.url,
              image_id: result.public_id  
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
                 "image_id": result.image_id
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
        res.send(text)
        
        // res.render(theIndex.index,text)
      
    }) // end save
    
    // ------------------------------

        var text =  {
                 title: theTitle, 
                 content:theUrl,
                 descr: theDescr,
                 nav: theIndex.nav,
                 header: theIndex.header,
                 footer: theIndex.footer,
                 params: []
                }
        
        // debug
        // res.send(text)
        res.render(theIndex.index,text)
        
} // end exports.
