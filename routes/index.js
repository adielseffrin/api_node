var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/students', function(req, res, next) {
  var db = require('../db');
  var Student = db.Mongoose.model('students',db.StudentSchema, 'students');
 Student.find({}).lean().exec(function(e,docs){
    res.json(docs);
    res.end();
  })

});

router.get('/students/:id', function(req, res, next) {
  var db = require('../db');
  var Student = db.Mongoose.model('students',db.StudentSchema, 'students');
 Student.find({_id: req.params.id}).lean().exec(function(e,docs){
    res.json(docs);
    res.end();
  })

});

2
3
4
5
6
7
8
9
10
11
12
13
14
15
	
/* POST ONE student. */
router.post('/students/', function (req, res, next) {
    var db = require('../db');
    var Student = db.Mongoose.model('students', db.StudentSchema, 'students');
    var newStudent = new Student({ name: req.body.name, email: req.body.email });
    newStudent.save(function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json(newStudent);
        res.end();
    });
});

/* PUT ONE customer. */
router.put('/students/:id', function (req, res, next) {
  var db = require('../db');
  var Student = db.Mongoose.model('students', db.StudentSchema, 'students');
  Student.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: true }, function (err, doc) {
      if (err) {
          res.status(500).json({ error: err.message });
          res.end();
          return;
      }
      res.json(req.body);
      res.end();
  });
});

/* DELETE ONE students. */
router.delete('/students/:id', function (req, res, next) {
    var db = require('../db');
    var Student = db.Mongoose.model('students', db.StudentSchema, 'students');
    Student.find({ _id: req.params.id }).remove(function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json({success: true});
        res.end();
    });
});

module.exports = router;
