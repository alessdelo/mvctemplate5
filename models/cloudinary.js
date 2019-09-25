// https://mongoosejs.com/docs/

var mongoose = require("mongoose")

// a very basic mongoose schema for locations
var cloudinarySchema = new mongoose.Schema({
                                  name: String,
                                  description: String,
                                  time : { type : Date, default: Date.now },
                                  rate: Number,
                                  loc: {
                                         type: {
                                                type: String,
                                                default: "Point"
                                               },
                                         coordinates: {
                                                type: [Number]
                                              }
                                       }   
                                }, { collection: 'mvcmaps1'})

mapsSchema.index({ loc: '2dsphere'})

module.exports = mongoose.model("Cloudinary", cloudinary)
