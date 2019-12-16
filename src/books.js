const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: [true, 'Le titre est requis'] },
  totalPages: { type: Number, default: 0 }
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;
