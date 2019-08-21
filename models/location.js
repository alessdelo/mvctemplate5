// https://mongoosejs.com/docs/

var mongoose = require("mongoose")

// a very basic mongoose schema for locations
var locationsSchema = new mongoose.Schema({
                                  name: String,
                                  description: String,
                                  time : { type : Date, default: Date.now },
                                  rate: Number,
                                  loc: {
                                         type: {
                                                 type: String,
                                                 default: "Point"
                                               },
                                         coords: {
                                                   type: [Number]
                                                 }
                                       }   
                                }, { collection: 'locations'})

locationSchema.index({ loc: '2dsphere'})

module.exports = mongoose.model("Locations", locationSchema)


