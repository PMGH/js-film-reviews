var Film = function(options){
  this.title = options.title;
  this.actors = options.actors;
  this.genres = options.genres;
  this.reviews = options.reviews || [];
}

Film.prototype = {
  addReview: function(review){
    this.reviews.push(review)
  }
}

module.exports = Film;
