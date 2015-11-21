var express = require('express');
var router = express.Router();
var Question = require('../models/mysql/question').Question;
var QuestionContent = require('../models/mysql/question_content').QuestionContent;

router.get('/',function(req,res){
  res.render('question');
})
router.get('/question/info', function(req, res) {
  Question.findAll({}).then(function(questionInfo){
    var tmpQuestionInfo=[];
    for(var i in questionInfo){
      if(!!questionInfo[i].dataValues.length){
        tmpQuestionInfo.push(questionInfo[i].dataValues);
      }
    }
    res.json({
      code:0,
      msg:'ok',
      questionInfo:tmpQuestionInfo
    });
  }).catch(function(err){
    console.log(err);
  })
});

//问题主页
router.get('/publish', function(req, res) {
    res.render('publish');
});

router.post('/publish', function(req, res) {
  var title = req.body.title || '',
      tags = req.body.tags || '',
      content= req.body.content || '';

  Question.create({
    title:title,
    content:content,
    create_time:Date.parse(new Date())/1000,
  }).then(function(result){
    res.json({
      code:0,
      msg:'ok'
    })
  }).catch(function(err){
    console.log(err);
  })
});
router.get('/question/:id',function(req,res){
  res.render('question_content');
})
module.exports = router;
