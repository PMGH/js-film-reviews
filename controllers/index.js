var express = require('express');
var router = new express.Router();
var path = require('path');

router.use('/films', require('./films'));

router.get('/', function(req, res){
  // res.sendFile(path.join(__dirname + "/index.html"));
  res.json({ data: "Welcome!" });
});

module.exports = router;
