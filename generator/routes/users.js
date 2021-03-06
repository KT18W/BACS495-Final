var express = require('express');
const { route } = require('.');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.app.locals.db;
  var cursor = db.collection("users").find();
  cursor.toArray().then(c => res.json(c));
});

router.get('/:name', function(req, res, next) {
  var db = req.app.locals.db;
  var name = req.params.name;
  console.log(id);
  const query = {'name': name};
  db.collection("users")
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
    "name": req.body.name
  }
  console.log(user);
  var db = req.app.locals.db; 
  db.collection("users").insertOne(user); 
  res.json({"message":"User inserted"});
});

router.put('/users/:userId', (req, res) => {
  const user = getUser(req.params.userId)
 
  if (!user) return res.status(404).json({})
 
  user.name = req.body.name
  res.json(user)
 })

module.exports = router;
