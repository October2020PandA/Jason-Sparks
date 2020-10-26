const mongoose = require('mongoose');
// const CategorySchema = new mongoose.Schema({
//     "name": { 
//         type: String,
//         required: [true, "Category name is required"],
//         minlength: [1, "Category name must be at least 3 characters long"]
//     },
// }, { timestamps: true });

const CategorySchema = new mongoose.Schema({
    "name": {
        type: String,
        required: [false]
}});

module.exports.Category = mongoose.model('Category', CategorySchema);