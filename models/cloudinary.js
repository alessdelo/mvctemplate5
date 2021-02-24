// https://mongoosejs.com/docs/

var mongoose = require("mongoose")

// a very basic mongoose schema for locations
var cloudinarySchema = new mongoose.Schema({
                                                title: String,
                                                description: String,
                                                photosphere: Boolean,
                                                image: String,
                                                image_id: String,
                                                created_at: Date,
                                                image_id: String,
                                                xmp_data: String

                                            }, { collection: 'cloudinary1'})

module.exports = mongoose.model("Cloudinary", cloudinarySchema)
