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

// delete film by id

module.exports = filmRouter;
