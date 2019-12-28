// EXSTRACT LAST N. INSERTED RECORDS  (WITH LIMIT NUMBER)

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/cloudinary')

// -----------------------------------------

exports.ajaxCloudinary = function (req, res) {

    theModel.find({}, { useFindAndModify: false }, function (err, result) {
    
         if (err) res.send(err) // return next(err)
        
                res.send(result)

            } ).sort({$natural:1}).limit(10)
    
 } // end ajaxCloudinary 
