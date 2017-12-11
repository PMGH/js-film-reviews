var express = require('express');
//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films');
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var filmRouter = new express.Router();

filmRouter.get('/', function(req, res){
  res.json({ data: films() });
});

module.exports = filmRouter;
