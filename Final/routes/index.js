var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { stuname: '610108020001 Chayaphon Chaengpiw' });
});

module.exports = router;
