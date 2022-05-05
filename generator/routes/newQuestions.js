const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { route } = require('.');

var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.app.locals.db;
  var cursor = db.collection("questions").find();
  cursor.toArray().then(c => res.json(c));
});

router.get('/:question', function(req, res, next) {
  var db = req.app.locals.db;
  var question = req.params.name;
  console.log(question);
  const query = {'question': question};
  db.collection("questions")
    .findOne(query)
    .then(result => {
      console.log(`Got question ${result}`);
      res.json(result);
    })
    .catch(err=>{
      console.log(`Error: ${err}`);
    });
  
});

router.post("/", function(req, res, next){
  const question = {
    "question": req.body.question,
    "answers": req.body.answers,
    "votes": req.body.quotes
  }
  console.log(question);
  var db = req.app.locals.db; 
  db.collection("questions").insertOne(question); 
  res.json({"message":"Question inserted"});
});

router.put('/questions/:question', (req, res) => {
  const question = getQuestion(req.params.question)
 
  if (!question) return res.status(404).json({})
 
  question.question = req.body.question
  res.json(question)
 })

 module.exports = router;