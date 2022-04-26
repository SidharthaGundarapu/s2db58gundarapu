const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
    Book_title: { 
        type: String,
        minLength: 10,
        maxLength: 50, 
        required: true,
        trim: true
    },
    genre: { 
        type: String, 
        required: true
    },
    cost: { 
        type: Number, 
        min:5, 
        max:100
    }
})
module.exports = mongoose.model("Book",bookSchema)