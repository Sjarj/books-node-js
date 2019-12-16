const assert = require('assert');
const Book = require('../src/books');

describe('Test de validation', () => {
  it(`Un titre doit être requis`, done => {
    const book1 = new Book({ title: undefined });
    const validateionResult = book1.validateSync();
    const { message } = validateionResult.errors.title;
    assert(message === 'Le titre est requis');
    done();
  });

  it(`Un livre doit avoir moins de 3000 pages`, done => {
    const book1 = new Book({ title: 'les fleurs du mal', totalPages: 3001 });
    book1.validate(validateionResult => {
      const { message } = validateionResult.errors.totalPages;
      assert(message === 'Un livre doit avoir moins de 3000 pages');
      done();
    });
  });
});
