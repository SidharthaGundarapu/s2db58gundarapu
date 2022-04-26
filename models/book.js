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
    car_costcost: { 
        type: Number, 
        min:[5, 'Must be at least 5, got {VALUE}'], 
        max:100
    }
})
module.exports = mongoose.model("Book",bookSchema)