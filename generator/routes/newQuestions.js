var express = require('express');
const { route } = require('.');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.app.locals.db;
  var cursor = db.collection("questions").find();
  cursor.toArray().then(c => res.json(c));
});

router.get('/:name', function(req, res, next) {
  var db = req.app.locals.db;
  var name = req.params.name;
  console.log(id);
  const query = {'name': name};
  db.collection("questions")
    .findOne(query)
    .then(result => {
      console.log(`Got user ${result}`);
      res.json(result);
    })
    .catch(err=>{
      console.log(`Error: ${err}`);
    });
  
});

router.post("/", function(req, res, next){
  const user = {
    "id": req.body.id,
    "name": req.body.name,
    "votes": req.body.votes
  }
  console.log(user);
  var db = req.app.locals.db; 
  db.collection("questions").insertOne(user); 
  res.json({"message":"question inserted"});
});

router.patch("/", function(req, res, next){
    const question = {
      "id": req.body.id
    }
    var db = req.app.locals.db; 
    db.collection("questions").updateOne(question
    , {$set: {"votes": req.body.votes}}
    , {upsert: true}); 
    res.json({"message": " - " + req.body.votes + " votes registered for: " + req.body.id});
  });

module.exports = router;
