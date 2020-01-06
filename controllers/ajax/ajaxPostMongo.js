// EXSTRACT LAST N. INSERTED RECORDS  (WITH LIMIT NUMBER)

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/cloudinary')

// -----------------------------------------

exports.ajaxPostMongo = function (req, res) {
  
    var theRegex = "/^" + "J" + "/";
  
    console.log('req.body: ' + JSON.stringify(req.body));
  
    // {title: /^t/} filters with a regex all the records in witch "title" field starts with the letter sent by POST frpm the form
    theModel.find({"title": {$regex: theRegex, $options: 'i'}}, { useFindAndModify: false }, function (err, result) {
    
                if (err) res.send(err) // return next(err)
        
                res.send(result)

            } ).sort({$natural:1}).limit(10)
            
 // REGEX QUERY
 // all:     theModel.find({}, .....}
 // item name into field:     theModel.find({myField:{$regex:"myName"}}, .....}
 // field item starts with one or more letters:   theModel.find({"title": {$regex: /^G/, $options: 'i'}}, .....}
 //      - G is a letter (or a string)
 //      - "i" the option that accept "case insensitivity"
  
  // theModel.find({title: /^a/}, { useFindAndModify: false }, function (err, result) {
 // res.send("postmongo: " + req.body);
    
 } // end ajaxCloudinary 

