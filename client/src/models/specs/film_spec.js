var Film = require('../film');
var assert = require('assert');

describe('Film', function () {
  var film;

  beforeEach(function () {
    film = new Film({
      title: "Titanic",
      actors: ["Leonardo Di Caprio", "Kate Winslet"],
      reviews: ["This film is great, 5 whole starts!", "The film went down like the titanic, 1 star"],
      genres: ["Drama", "Romance"]
    });

    film2 = new Film({
      title: "Children of Men",
      actors: ["Clive Owen", "Michael Caine", "Juliane Moore", "Chiwetel Ejiofor"],
    });
  });

  it('should have title titanic', function () {
    assert.equal(film.title, "Titanic");
  });

  it('should have actors', function(){
    assert.strictEqual(film.actors.length, 2);
    assert.strictEqual(film.actors[0], "Leonardo Di Caprio");
    assert.strictEqual(film.actors[1], "Kate Winslet");
  });

  it('should have reviews', function(){
    assert.strictEqual(film.reviews.length, 2);
    assert.strictEqual(film2.reviews.length, 0);
    assert.strictEqual(film.reviews[0], "This film is great, 5 whole starts!");
    assert.strictEqual(film.reviews[1], "The film went down like the titanic, 1 star");
  });

  it('should have genres', function(){
    assert.strictEqual(film.genres.length, 2);
    assert.strictEqual(film2.genres.length, 0);
    assert.strictEqual(film.genres[0], "Drama");
    assert.strictEqual(film.genres[1], "Romance");
  });


});
