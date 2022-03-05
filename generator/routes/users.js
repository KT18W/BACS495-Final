var express = require('express');
var router = express.Router();

var students = [
  {"id":1, "name":"Joel"},
  {"id":2, "name":"Katie"}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(students);
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  for(let student of students){
    if(student.id == id){
      res.json(student);
    }
  }
  res.send("Cannot find student");
});

router.put('/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  for(let student of students){
    if(student.id == id){
      res.json(student);
    }
  }
  res.send("Cannot find student");
});

router.post('/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  for(let student of students){
    if(student.id == id){
      res.json(student);
    }
  }
  res.send("Cannot find  student");
}); 

router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  for(let student of students){
    if(student.id == id){
      res.json(student);
    }
  }
  res.send("Cannot find student");
});

module.exports = router;
