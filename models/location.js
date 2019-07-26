// https://mongoosejs.com/docs/

var mongoose = require("mongoose")

// a very basic mongoose schema for locations
var locationSchema = new mongoose.Schema({
                                  name: String,
                                  description: String,
                                  time : { type : Date, default: Date.now },
                                  loc: {
                                         type: {
                                                 type: String,
                                                 default: "Point"
                                               },
                                         coords: {
                                                   type: [Number]
                                                 }
                                       }   
                                }, { collection: 'location'})

module.exports = mongoose.model("Location", locationSchema)


