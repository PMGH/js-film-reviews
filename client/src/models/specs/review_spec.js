var Review = require('../review');
var assert = require('assert');

describe('Review', function () {
  var review;

  beforeEach(function () {
    review = new Review({
      comment: "I'll never get that time back.",
      rating: 0,
      author: "Dave"
    });
  });

  it('should have a comment', function(){
    assert.strictEqual(review.comment, "I'll never get that time back.");
  });


});
