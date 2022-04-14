const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
    Book_title: String,
    genre: String,
    cost: Number
})
module.exports = mongoose.model("Book",bookSchema)