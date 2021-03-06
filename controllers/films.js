var express = require('express');
//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films');
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var filmRouter = new express.Router();
var films = films();

// get all films
filmRouter.get('/', function(req, res){
  res.json({ data: films });
});

// create film
filmRouter.post('/', function(req, res){
  films.push(req.body);
  res.json({ data: films });
});

// get film by id
filmRouter.get('/:id', function(req, res){
  var film = films[req.params.id];
  res.json({ film });
});

// update film by id
filmRouter.put('/:id', function(req, res){
  films[req.params.id] = req.body;
  res.json({ data: films });
});

// add film review by film id
filmRouter.put('/new-review/:id', function(req, res){
  var film = films[req.params.id];
  film.reviews.push(req.body);
  films[req.params.id] = film;
  res.json({ data: films });
});

// delete film by id
filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({ data: films });
})

module.exports = filmRouter;
