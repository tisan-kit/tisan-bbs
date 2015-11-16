var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('question', { title: 'Express' });
});
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
