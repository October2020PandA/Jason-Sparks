const { Category } = require('../models/category.model');

// Method for adding a new category to the database
module.exports.createCategory = (req, res) => {
    // const name = req.body;
    Category.create(req.body)
        .then(newCategory => {
            res.json(newCategory); // If the request was successful return a 200 response code with the newly created category
        })     
        .catch(err => res.status(400).json(err));   // If the request was not successful return a 400 response code with the errors
}

// Methods for retrieving all categories from the database
module.exports.getAllCategories = (req, res) => {
    Category.find({})
    .then(allCategories => res.json(allCategories))
    .catch(err => res.status(400).json(err));   // If the request was not successful return a 400 response code with the errors
}

module.exports.getCategory = (req, res) => {
    Category.findOne({ _id:req.params.id })
        .then(category => res.json(category))
        .catch(err => res.status(400).json(err));   // If the request was not successful return a 400 response code with the errors
}

// Method for updating an existing category in the database
module.exports.updateCategory = (req, res) => {
    Category.findOneAndUpdate({ _id: req.params.id}, req.body, {
        new:true, 
        runValidators: true // Validate data on updates, updated data isn't validated by default without this. 
    })
        .then(updatedCategory => res.json(updatedCategory))
        .catch(err => res.status(400).json(err));   // If the request was not successful return a 400 response code with the errors
}

// Method for deleting an existing category in the database
module.exports.deleteCategory = (req, res) => {
    Category.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json(err));   // If the request was not successful return a 400 response code with the errors
}