const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BookSchema = require('./books').schema;
const BlogBook = require('./blogBooks');

const UserSchema = new Schema({
  name: String,
  books: [BookSchema],
  blogBooks: [{ type: Schema.Types.ObjectId, ref: 'blogBook' }]
});

UserSchema.virtual('countBooks').get(function() {
  return this.books.length;
});

UserSchema.pre('remove', function(next) {
  BlogBook.remove({ _id: { $in: this.blogBooks } }).then(() => next());
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
