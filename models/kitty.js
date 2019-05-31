// https://mongoosejs.com/docs/

var mongoose = require("mongoose")

// a very basic mongoose schema
var kittySchema = new mongoose.Schema({ 
       name: String,
       age: String
     })

module.exports = mongoose.model("Kitty", kittySchema)
