const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BookSchema = require('./books').schema;

const UserSchema = new Schema({
  name: String,
  books: [BookSchema]
});

UserSchema.virtual('countBooks').get(function() {
  return this.books.length;
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
