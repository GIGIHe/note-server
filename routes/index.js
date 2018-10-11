var express = require('express');
var router = express.Router();
var user = require('../controller/user');
var article = require('../controller/article');
var catagory = require('../controller/catagory');
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index');
  res.send('haha,wo shi fuwuqi');
});
router.use(user);
router.use(article);
router.use(catagory);
module.exports = router;
