const assert = require('assert');
const User = require('../src/users');

describe('Test de relation', () => {
  it(`Test la taille de la liste d'un utilisateur`, done => {
    const user1 = new User({
      name: `Robin`,
      books: [
        { title: `Le seigneur des anneaux` },
        { title: `Les raisins de la colères` }
      ]
    });
    user1
      .save()
      .then(() =>
        User.findOne({ name: `Robin` }).then(
          user => assert(user.books.length === 2),
          done()
        )
      );
  });

  it(`Ajout de livre à un user`, done => {
    const user1 = new User({
      name: `Robin`
    });
    user1.books.push({ title: `Le seigneur des anneaux` });
    user1
      .save()
      .then(() =>
        User.findOne({ name: `Robin` }).then(
          user => assert(user.books.length === 1),
          done()
        )
      );
  });

  it(`Suppression de livre d'un user`, done => {
    const user1 = new User({
      name: `Robin`,
      books: [
        { title: `Le seigneur des anneaux` },
        { title: `Les raisins de la colères` }
      ]
    });
    user1.books[0].remove();
    user1
      .save()
      .then(() =>
        User.findOne({ name: `Robin` }).then(
          user => assert(user.books.length === 1),
          done()
        )
      );
  });
});
