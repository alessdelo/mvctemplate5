// EXSTRACT LAST N. INSERTED RECORDS  (WITH LIMIT NUMBER)

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/cloudinary')

// -----------------------------------------

exports.ajaxPostMongo = function (req, res) {
  
    console.log('req.body: ' + JSON.stringify(req.body));
  
    // {title: /^t/} filters with a regex all the records in witch "title" field starts with the letter sent by POST frpm the form
    theModel.find({"name": {$regex: /^a/, $options: 'i'}}, { useFindAndModify: false }, function (err, result) {
    
                if (err) res.send(err) // return next(err)
        
                res.send(result)

            } ).sort({$natural:1}).limit(10)
            
 // REGEX QUERY
 // all:     theModel.find({}, .....}
 // item name into field:     theModel.find({myField:{$regex:"myName"}}, .....}
 //  {title:{$regex:/^a/}}
  
  // theModel.find({title: /^a/}, { useFindAndModify: false }, function (err, result) {
 // res.send("postmongo: " + req.body);
    
 } // end ajaxCloudinary 

