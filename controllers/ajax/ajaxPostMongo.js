// EXSTRACT LAST N. INSERTED RECORDS  (WITH LIMIT NUMBER)

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/cloudinary')

// -----------------------------------------

 // REGEX QUERY
 // all:     theModel.find({}, .....}
 // item name into field:     theModel.find({myField:{$regex:"myName"}}, .....}
 // field item starts with one or more letters:   theModel.find({"title": {$regex: /^G/, $options: 'i'}}, .....}
 //       - G is a letter (or a string)
 //       - "i" the option that accept "case insensitivity"
  
 // function new RegExp("^" + "G");
 //       - trasform a string in a regular expression
 //       - can dynamically insert into the regex a string passed from a form
 //       - you must exclude and the     

exports.ajaxPostMongo = function (req, res) {
  
    var theRegex = new RegExp("^" + req.body.selectTest); // all the matches that start with the string sent by the form
  
    console.log('req.body: ' + JSON.stringify(req.body));
 
    theModel.find({"title": {$regex: theRegex, $options: 'i'}}, { useFindAndModify: false }, function (err, result) {
    
                if (err) res.send(err) // return next(err)
     
                if (result == [] || result == "") {
                    res.send({response: "no matches"})
                } else {
                    res.send(result)
                }

            } ).sort({$natural:1}).limit(10)
                
 } // end ajaxCloudinary 
