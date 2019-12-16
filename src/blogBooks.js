const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogBookShema = new Schema({
  title: String,
  sumary: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }]
});

const BlogBook = mongoose.model('blogBook', BlogBookShema);

module.exports = BlogBook;
