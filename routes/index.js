var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , log: 'GET'});
});

	
/* POST ONE student. */
router.post('/', function (req, res, next) {
    res.render('index', { title: 'Express' , log: 'POST'});
});

/* PUT ONE customer. */
router.put('/', function (req, res, next) {
    res.render('index', { title: 'Express' , log: 'PUT'});
});

/* DELETE ONE students. */
router.delete('/', function (req, res, next) {
    res.render('index', { title: 'Express' , log: 'DELETE'});
});

module.exports = router;
