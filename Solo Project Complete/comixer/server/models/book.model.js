const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    "title": { 
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"]
    },
    "publisher": { 
        type: String,
        required: [true, "Publisher is required"],
        minlength: [3, "Publisher must be at least 3 characters long"]
    },
    "publishDate": { 
        type: String,
        required: [false, "Description is required"],
        minlength: [3, "Description must be at least 3 characters long"],
        maxlength: [20, "Description must not be longer than 140 characters"]
    },
    "story": {
        type: String,
        required: [false],
    },
    "artwork": {
        type: String,
        required: [false],
    },
    "letters": {
        type: String,
        required: [false],
    },
    "cover": {
        type: String,
        required: [false],
    }
}, { timestamps: true });

module.exports.Book = mongoose.model('Book', BookSchema);
