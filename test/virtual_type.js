const assert = require('assert');
const User = require('../src/users');

describe('Test de virtual type', () => {
  it(`Test du virtual type countBooks`, done => {
    const user1 = new User({
      name: 'Robin',
      books: [
        { title: `Le seigneur des anneaux` },
        { title: `Les raisin de la colère` }
      ]
    });
    user1
      .save()
      .then(() =>
        User.findOne({ name: `Robin` }).then(user =>
          assert(user.countBooks === 2)
        )
      );
    done();
  });
});
