var express = require('express');
var router = express.Router();
var Question = require('../models/mysql/question').Question;
var QuestionContent = require('../models/mysql/question_content').QuestionContent;
//render页面

router.get('/test',function(req,res){
  res.render('test');
})
router.get('/question/list', function(req, res) {
  Question.findAll({}).then(function(questionInfo){
    var tmpQuestionInfo=[];
    for(var i in questionInfo){
        tmpQuestionInfo.push(questionInfo[i].dataValues);
    }
    res.json({
      code:0,
      msg:'ok',
      data:{
        questionInfo:tmpQuestionInfo
      }
    });
  }).catch(function(err){
    console.log(err);
  })
});

router.get('/question/info/:id',function(req,res){
  var id = req.params['id'];
  if(!isNaN(id)){
    Question.find({where:{id:id}}).then(function(result){
      res.json({ msg:'ok', code:0, data:{
          questionInfo:result.dataValues
        }
      })
    }).catch(function(err){
      console.log(err);
    })
  }else{
    res.json({ msg:'data format error', data:'', code:1, })
  }
})

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

router.get('/',function(req,res){
  res.render('question');
})
router.get('/question/:id',function(req,res){
  res.render('question_content',{
    question_id:req.params['id']
  });
})
module.exports = router;
