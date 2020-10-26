const { Book } = require('../models/book.model');

// Method for adding a new book to the database
module.exports.createBook = (req, res) => {
    const { title, publisher, publishDate, story, artwork, letters, cover } = req.body;
    Book.create({
        title,
        publisher,
        publishDate,
        story,
        artwork,
        letters,
        cover
    })
        .then(newBook => res.json(newBook))     // If the request was successful return a 200 response code with the newly created book
        .catch(err => res.status(400).json(err));   // If the request was not successful return a 400 response code with the errors
}

// Methods for retrieving all books from the database
module.exports.getAllBooks = (req, res) => {
    Book.find({})
    .then(allBooks => res.json(allBooks))
    .catch(err => res.status(400).json(err));   // If the request was not successful return a 400 response code with the errors
}

module.exports.getBook = (req, res) => {
    Book.findOne({ _id:req.params.id })
        .then(book => res.json(book))
        .catch(err => res.status(400).json(err));   // If the request was not successful return a 400 response code with the errors
}

// Method for updating an existing book in the database
module.exports.updateBook = (req, res) => {
    Book.findOneAndUpdate({ _id: req.params.id}, req.body, {
        new:true, 
        runValidators: true // Validate data on updates, updated data isn't validated by default without this. 
    })
        .then(updatedBook => res.json(updatedBook))
        .catch(err => res.status(400).json(err));   // If the request was not successful return a 400 response code with the errors}
}

// Method for deleting an existing book in the database
module.exports.deleteBook = (req, res) => {
    Book.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json(err));   // If the request was not successful return a 400 response code with the errors
}