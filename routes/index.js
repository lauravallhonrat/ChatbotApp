var express = require('express');
const ensureLogin = require("connect-ensure-login");
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/secret', ensureLogin.ensureLoggedIn(), function(req, res, next) {
  res.render('secret', { user: req.user });
});


module.exports = router;
