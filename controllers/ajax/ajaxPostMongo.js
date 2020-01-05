// EXSTRACT LAST N. INSERTED RECORDS  (WITH LIMIT NUMBER)

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/cloudinary')

// -----------------------------------------

exports.ajaxPostMongo = function (req, res) {
  
  /*
  
    // {title: /^t/} filters with a regex all the records in witch "title" field starts with the letter sent by POST frpm the form
    theModel.find({title: /^a/}, { useFindAndModify: false }, function (err, result) {
    
                if (err) res.send(err) // return next(err)
        
                res.send(result)

            } ).sort({$natural:1}).limit(10)
            
    */
  
  res.send(req.body);
    
 } // end ajaxCloudinary 

