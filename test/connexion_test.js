const mongoose = require('mongoose');

before(done => {
  mongoose.connect(
    'mongodb+srv://Sjarj:lesilence@cluster0-l1jes.mongodb.net/test?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
  mongoose.connection
    .once('open', () => {
      console.log('Connexion est établie', done());
    })
    .on('error', error => {
      console.warn('Erreur durant la connexion', error);
    });
});

beforeEach('Supprime les anciens livres', done => {
  const { books } = mongoose.connection.collections;
  books.drop(() => done());
});
