var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  if (req.session.login) {
    res.redirect('/home');
  }
  else {
    res.render('index', { loginError: req.session.loginError });
    req.session.loginError = false
  }
});


const uname = 'unni';
const upass = '120';

router.post('/login', (req, res) => {
  const username = req.body.name;
  const password = req.body.pass;
  if (username === uname && password === upass) {
    req.session.login = true
    res.redirect('home')
  } else {
    req.session.loginError = true
    res.redirect('/');
  }
})

router.get("/logout", (req, res) => {
  req.session.destroy()
  res.redirect("/");
})

module.exports = router;


