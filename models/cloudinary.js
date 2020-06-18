// https://mongoosejs.com/docs/

var mongoose = require("mongoose")

// a very basic mongoose schema for locations
var cloudinarySchema = new mongoose.Schema({
                                                title: String,
                                                description: String,
                                                image: String,
                                                image_id: String,
                                                created_at: Date,
                                                photo360: Boolean

                                            }, { collection: 'cloudinaries'})

module.exports = mongoose.model("Cloudinary", cloudinarySchema)
