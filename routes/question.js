var express = require('express');
var router = express.Router();
var Question = require('../models/mysql/question').Question;

/* GET home page. */
router.get('/', function(req, res) {
  Question.find({}).then(function(result){
    res.render('question', { title: 'Express' });
  }).catch(function(err){
    console.log(err);
  })
});

//问题主页
router.get('/publish', function(req, res) {
  res.render('publish');
});

router.post('/publish', function(req, res) {
  console.log(req.body);
  res.json({
    code:0,
    msg:'ok'
  })
});

module.exports = router;
