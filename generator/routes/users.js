var express = require('express');
var router = express.Router();

var user = [
  {"id":1, "name":"Katie"},
  {"id":2, "name":"Joel"}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  for(let user of users){
    if(user.id == id){
      res.json(user);
    }
  }
  res.send("Cannot find user");
});

router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  for(let user of users){
    if(user.id == id){
      res.json(user);
    }
  }
  res.send("Cannot find user");
});

module.exports = router;
