const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  titre: string
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;
