// EXSTRACT LAST N. INSERTED RECORDS  (WITH LIMIT NUMBER)

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/cloudinary')

// -----------------------------------------

exports.ajaxPostMongo = function (req, res) {
  
    console.log('req.body: ' + JSON.stringify(req.body));
  
    // {title: /^t/} filters with a regex all the records in witch "title" field starts with the letter sent by POST frpm the form
    theModel.find({title:{$regex:"Gurux"}}, { useFindAndModify: false }, function (err, result) {
    
                if (err) res.send(err) // return next(err)
        
                res.send(result)

            } ).sort({$natural:1}).limit(10)
            
 
 //  {title:{$regex:/^a/}}
  
  // theModel.find({title: /^a/}, { useFindAndModify: false }, function (err, result) {
 // res.send("postmongo: " + req.body);
    
 } // end ajaxCloudinary 

