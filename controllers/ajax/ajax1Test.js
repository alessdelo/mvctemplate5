exports.ajax1Test = function (req, res) {
  
           
        var text = "aaaa";
 
        res.status(200).json({ message: text });
        console.log("ajax recieved!");
        
} // end export.
