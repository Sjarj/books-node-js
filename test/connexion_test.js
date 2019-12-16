const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(done => {
  mongoose.connect(
    'mongodb+srv://Sjarj:lesilence@cluster0-l1jes.mongodb.net/test?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
  mongoose.connection
    .once('open', () => done())
    .on('error', error => {
      console.warn('Warning', error);
    });
});

beforeEach('Supprime les données', done => {
  mongoose.connection.db.dropDatabase().then(() => done());
});
