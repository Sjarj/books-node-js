const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://Sjarj:lesilence@cluster0-l1jes.mongodb.net/test?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true }
);
mongoose.connection
  .once('open', () => {
    console.log('Connexion est établie');
  })
  .on('error', error => {
    console.warn('Erreur durant la connexion', error);
  });
