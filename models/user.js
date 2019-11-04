var mongoose = require("mongoose")

// a very basic mongoose schema for locations
var userSchema = new mongoose.Schema({
                                                username: { type: String, unique: true, required: true },
                                                email: { type: String, unique: true, required: true },
                                                hash: { type: String, required: true },
                                                firstName: { type: String, required: true },
                                                lastName: { type: String, required: true },
                                                createdDate: { type: Date, default: Date.now }

                                            }, { collection: 'users'})

userSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model("User", userSchema)
